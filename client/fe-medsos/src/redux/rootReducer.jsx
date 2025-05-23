import { combineReducers } from "redux"
import storage from "redux-persist/lib/storage"
import authReducer from "./reducer/AuthReducer"
import { persistReducer } from "redux-persist"
import majorReducer from "./reducer/MajorReducer"

const persisConfig = {
    key: "root",
    varsion: 1,
    storage
}

const root = combineReducers({
    auth: authReducer,
    majorReducer
})

const persistedReducer = persistReducer(persisConfig, root)

export default persistedReducer