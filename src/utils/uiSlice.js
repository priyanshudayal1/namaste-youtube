import { createSlice } from "@reduxjs/toolkit";

const uiSlice=createSlice({
    name:"ui",
    initialState:{
        isSidebarOpen:true,
        videoComments:[],
    },
    reducers:{
        toggleIsSidebarOpen:(state)=>{
            state.isSidebarOpen=!state.isSidebarOpen;
        },
        closeSidebar:(state)=>{
            state.isSidebarOpen=false
        },
        addVideoComments:(state,action)=>{
            state.videoComments=state.videoComments.unshift(action.payload);
        }

    }
});

export default uiSlice.reducer;

export const {toggleIsSidebarOpen,closeSidebar,addVideoComments}=uiSlice.actions;