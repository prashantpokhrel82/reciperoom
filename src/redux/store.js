import { configureStore } from "@reduxjs/toolkit";
import recipeSlice from "./features/recipeSlice";
import { tastyApi } from "./services/tastyApi";

const store = configureStore({
  reducer: {
    [tastyApi.reducerPath]: tastyApi.reducer,
    recipe: recipeSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tastyApi.middleware),
});

export default store;
