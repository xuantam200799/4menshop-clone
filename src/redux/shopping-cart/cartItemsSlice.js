import { createSlice } from '@reduxjs/toolkit';

const items = localStorage.getItem('cartItems') !== null ? JSON.parse(localStorage.getItem('cartItems')) : [];

const initialState = { value: items };

export const cartItemsSlice = createSlice({
    name: 'cartItems',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload

            const duplicate = findItem(state.value, newItem)

            if (duplicate.length > 0) {
                state.value = delItem(state.value, newItem);

                state.value = [...state.value, {
                    ...newItem,
                    id: duplicate[0].id,
                    quantify: newItem.quantify + duplicate[0].quantify
                }]
            } else {
                state.value = [...state.value, {
                    ...newItem,
                    id: state.value.length > 0 ? state.value[state.value.length - 1].id + 1 : 1,
                }]
            }
            localStorage.setItem('cartItem', JSON.stringify(sortItem(state.value)))
        },
        updateItem: (state, action) => {
            const itemUpdate = action.payload

            const item = findItem(state.value, itemUpdate)

            if (item.length > 0) {
                state.value = delItem(state.value, itemUpdate)
                state.value = [...state.value, {
                    id: item[0].id,
                    slug: itemUpdate.slug,
                    color: itemUpdate.color,
                    size: itemUpdate.size,
                    price: itemUpdate.price,
                    quantity: itemUpdate.quantity
                }]
                localStorage.setItem('cartItem', JSON.stringify(sortItem(state.value)))
            }
        },
        removeItem: (state, action) => {
            const item = action.payload
            state.value = delItem(state.value, item)
            localStorage.setItem('cartItem', JSON.stringify(sortItem(state.value)))
        }
    }
})

const findItem = (arr, item) => arr.filter(e => e.slug === item.slug && e.color === item.color && e.size === item.size)

const delItem = (arr, item) => arr.filter( e => e.slug !== item.slug || e.color !== item.color || e.size !== item.size)

const sortItem = (arr) => arr.sort((a, b) => a.id > b.id ? 1 : (a.id < b.id ? -1 : 0))

export const { addItem, updateItem, removeItem } = cartItemsSlice.actions;

export default cartItemsSlice.reducer