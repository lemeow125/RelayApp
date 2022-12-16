import { configureStore } from '@reduxjs/toolkit'

import onlinefileReducer from '../../Components/States/OnlineFile/onlinefileSlice'
import uploadhistoryReducer from '../../Components/States/OnlineUploadHistory/uploadhistorySlice'

export default configureStore({
    reducer: {
        onlinefile: onlinefileReducer,
        uploadhistory: uploadhistoryReducer,
    },
})