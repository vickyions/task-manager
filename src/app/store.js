import { configureStore } from "@reduxjs/toolkit";

//reducers of slices
import listsReducer from "../features/lists/listsSlice";

export const store = configureStore({
    reducer: {
        //this reducer will handle any update regarding lists
        lists: listsReducer,
    }
});
