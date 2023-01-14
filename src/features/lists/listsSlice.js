import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: 0,
    title: "Todo",
    cards: [
        {
            id: 0,
            title: "make Trello boiler Plate",
            description: "Install redux vite taiwlwinds etc"
        },
        {
            id: 1,
            title: "Practice redux toolkit",
            description: "visit  redux-toolkit.js.org"
        }
    ],
};

export const listsSlice =  createSlice({
    name: 'lists',
    initialState: initialState,
    reducers: {
        //can write mutating code as Immer is handling that
        
    }
});


//Action creators are generatod for each reducer function defined
//in reducers of slice export those to use latter
export const {} = listsSlice.actions;

//export reducer to add to store reducers object which combines all of them
export default listsSlice.reducer;
