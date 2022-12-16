import { configureStore } from '@reduxjs/toolkit'

import onlinefileReducer from '../../Components/States/OnlineFile/OnlineFileSlice'

export default configureStore({
    reducer: {
        onlinefile: onlinefileReducer,
    },
})