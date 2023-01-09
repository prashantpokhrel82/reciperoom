import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tagNames: [],
  recipes: [],
};

const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    setTagNames: (state, action) => {
      let totalTagNames = action.payload?.count;
      const tagsList = action.payload?.results;

      if (totalTagNames) {
        let tempTagNames = [];

        while (tempTagNames.length < 5) {
          const randomIndex = Math.floor(Math.random() * totalTagNames);
          let randomTag = tagsList[randomIndex]?.name;
          if (!tempTagNames.includes(randomTag)) {
            tempTagNames.push(tagsList[randomIndex]);
          }
        }
        state.tagNames = tempTagNames;
      }
    },
  },
});

export default recipeSlice.reducer;
export const { setTagNames } = recipeSlice.actions;
