import { configureStore } from '@reduxjs/toolkit'

import onlinefileReducer from '../../Components/States/OnlineFile/onlinefileSlice'
import uploadhistoryReducer from '../../Components/States/OnlineUploadHistory/uploadhistorySlice'
import offlinefileReducer from '../../Components/States/OfflineFile/offlinefileSlice'

export default configureStore({
    reducer: {
        onlinefile: onlinefileReducer,
        uploadhistory: uploadhistoryReducer,
        offlinefile: offlinefileReducer,
    },
})