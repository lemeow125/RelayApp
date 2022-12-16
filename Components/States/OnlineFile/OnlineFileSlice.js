import { createSlice } from '@reduxjs/toolkit'

export const onlinefileSlice = createSlice({
    name: 'onlinefile',
    initialState: {
        filename: '',
        filesize: '',
    },
    reducers: {
        setfilename: (state, action) => {
            state.filename = action.payload
        },
        setfilesize: (state, action) => {
            state.filesize = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setfilename, setfilesize } = onlinefileSlice.actions

export default onlinefileSlice.reducer