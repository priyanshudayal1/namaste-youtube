import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./uiSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";

const store=configureStore({
    reducer:{
        ui:uiSlice,
        search:searchSlice,
        chat:chatSlice,
    },
});

export default store;
