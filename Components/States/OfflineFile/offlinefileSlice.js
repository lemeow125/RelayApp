import { createSlice } from '@reduxjs/toolkit'

export const offlinefileSlice = createSlice({
    name: 'sendfile',
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
export const { setfilename, setfilesize } = offlinefileSlice.actions

export default offlinefileSlice.reducer