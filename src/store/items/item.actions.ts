import { createAsyncThunk } from "@reduxjs/toolkit";
import { Item } from "../../types";

export const loadItems = createAsyncThunk<Item[]>(
  "item/loadItems",
  async () => {
    try {
      const response = await fetch(
        "https://run.mocky.io/v3/2d06d2c1-5a77-4ecd-843a-53247bcb0b94"
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching items:", error);
      throw error;
    }
  }
);

export const saveSet = createAsyncThunk(
   "item/saveSet",
   (newSavedSet: Item[]) => {
    return newSavedSet;
   }
  )