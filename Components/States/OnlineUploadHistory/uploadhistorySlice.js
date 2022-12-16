import { createSlice } from '@reduxjs/toolkit'

export const uploadhistorySlice = createSlice({
    name: 'uploadhistory',
    initialState: {
        uploadfnhistory: '',
        uploadszhistory: ''
    },
    reducers: {
        adduploadfn: (state, action) => {
            state.uploadfnhistory += '\n ' + action.payload
        },
        adduploadsz: (state, action) => {
            state.uploadszhistory += '\n ' + action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { adduploadfn, adduploadsz } = uploadhistorySlice.actions

export default uploadhistorySlice.reducer