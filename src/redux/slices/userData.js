import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userDetails: [{email:'shiv1@gmail.com' , phone:'90268141995' , username:'shiv123'} ,
  {email:'shiv2@gmail.com' , phone:'902681419345' , username:'shiv1234'} ,
  {email:'shiv3@gmail.com' , phone:'902681419455' , username:'shiv12345'} ,
  {email:'shiv4@gmail.com' , phone:'902681419785' , username:'shiv123456'} ,
  {email:'shiv5@gmail.com' , phone:'902681419925' , username:'shiv1234567'}],
};

export const userSlice = createSlice({
  name: 'userDetails',
  initialState,
  reducers: {


    addUser(state , action){
       const tempUserData = [...state.userDetails];
       tempUserData.push(action.payload);
       state.userDetails = tempUserData;
    }
   
  },
});

export default userSlice.reducer;

export const { addUser } = userSlice.actions;

