import { v4 as uuidv4 } from "uuid";
import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 0,
        title: "Todo",
        cards: [
            {
                id: 0,
                title: "make Trello boiler Plate",
                description: "Install redux vite taiwlwinds etc",
            },
            {
                id: 1,
                title: "Practice redux toolkit",
                description: "visit  redux-toolkit.js.org",
            },
        ],
    },
    {
        id: 1,
        title: "In Progress",
        cards: [
            {
                id: 0,
                title: "make Trello boiler Plate",
                description: "Install redux vite taiwlwinds etc",
            },
            {
                id: 1,
                title: "Practice redux toolkit",
                description: "visit  redux-toolkit.js.org",
            },
            {
                id: 2,
                title: "Luajh djshue fdhhu dkuw KJdb ,djh jhdsu JHsuh JHudh Jhuhdwoio jsiown iuisen jhd Jdund jhh",
                description: "visit  redux-toolkit.js.org",
            },
            {
                id: 3,
                title: "Practice redux toolkit",
                description: "visit  redux-toolkit.js.org",
            },
        ],
    },
];

export const listsSlice = createSlice({
    name: "lists",
    initialState: initialState,
    reducers: {
        //can write mutating code as Immer is handling that
        addList: (state, action) => {
            const newList = {
                id: uuidv4(),
                title: action.payload.title,
                cards: [],
            };
            //state.push(newList);
            return [...state, newList];
        },
        removeList: (state, action) => {
            return state.filter((list) => list.id !== action.payload.id);
        },
        changeListTitle: (state, action) => {
            return state.map((list) => {
                if (list.id === action.payload.id) {
                    return { ...list, title: action.payload.title };
                } else return list;
            });
        },

        //reducers for cards
        addCard: (state, action) => {
            const {listId, card} = action.payload; //{listId, card: {title, description}}
            card.id = uuidv4();
            card.description = card.description ? card.description : "";
            console.log(card);
            state.map(list => {
                if (list.id === listId) {
                    list.cards.push(card);
                } else return list;
            })
        },
        removeCard: (state, action) => {
            const {listId, cardId} = action.payload; //{listId, card: {title, description}}
            return state.map(list => {
                if (list.id === listId) {
                    return list.cards.filter(card => card.id !== cardId);
                } else return list;
            })
        }
    },
});

//Action creators are generatod for each reducer function defined
//in reducers of slice export those to use latter
export const { addList, removeList, changeListTitle, addCard, removeCard } = listsSlice.actions;

export const selectLists = (state) => state.lists;
//export reducer to add to store reducers object which combines all of them
export default listsSlice.reducer;
