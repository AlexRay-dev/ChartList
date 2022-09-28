import {combineReducers, configureStore} from "@reduxjs/toolkit";
import chartListReducer from "./reducers/chartListSlice/chartListSlice"

const rootReducer = combineReducers({
  chartListReducer
})

const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}
export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];