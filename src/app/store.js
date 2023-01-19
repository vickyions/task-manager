import { configureStore } from "@reduxjs/toolkit";

//reducers of slices
import listsReducer from "../features/lists/listsSlice";
import popupsReducer from "../features/popup/popupSlice";

export const store = configureStore({
    reducer: {
        //this reducer will handle any update regarding lists
        lists: listsReducer,
        popups: popupsReducer,
    }
});
