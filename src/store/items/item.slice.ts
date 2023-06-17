import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store"
import { loadItems, saveSet } from "./item.actions"
import { Item } from "../../types"

interface InitialState {
    value: {
        shirt: null | Item[],
        pants: null | Item[],
        shoes: null | Item[],
        savedItems: Array<Array<Item>>
    },
    status: string
}

const initialState = {
    value: {
        shirt: null ,
        pants: null ,
        shoes: null ,
        savedItems: [],
    }
    ,
    status: 'idle'
} as InitialState

export const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(loadItems.fulfilled, (state, action) => {
                const shirt: Item[] = action.payload.filter((item:Item) => item.type === 'shirt')
                const pants: Item[] = action.payload.filter((item:Item) => item.type === 'pants')
                const shoes: Item[] = action.payload.filter((item:Item) => item.type === 'shoes')
                state.status = 'idle'
                state.value.shirt = shirt
                state.value.pants = pants
                state.value.shoes = shoes
            })
            .addCase(saveSet.fulfilled,(state, action) => {
                state.value.savedItems = [...state.value.savedItems, action.payload]
            } )
    }
})


export const selectSavedItems = (state: RootState) => state.item.value.savedItems

export const selectShirt = (state: RootState) => state.item.value.shirt
export const selectpants = (state: RootState) => state.item.value.pants
export const selectShoes = (state: RootState) => state.item.value.shoes


export default itemSlice.reducer
