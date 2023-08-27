import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type Auth = {
  isAuth: boolean;
};
const initialValue: Auth = {
 isAuth:false
};


export const NoteSlice = createSlice({
  name: "note",
  initialState: initialValue,
  reducers: {
  
    isAuth: (state, action: PayloadAction<boolean>) => {
         state.isAuth=action.payload  
    },
    
  },
});
export default NoteSlice.reducer;
export const {isAuth } = NoteSlice.actions;
