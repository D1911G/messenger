import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type Theme = "light" | "dark";

type UiState = {
  theme: Theme;
  isInfoPanelOpen: boolean;
};

const getInitialTheme = (): Theme => {
  try {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") return saved;
  } catch {
    // localStorage недоступен, берём значение по умолчанию
  }
  return "dark";
};

const initialState: UiState = {
  theme: getInitialTheme(),
  isInfoPanelOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === "dark" ? "light" : "dark";
    },
    setTheme(state, action: PayloadAction<Theme>) {
      state.theme = action.payload;
    },
    toggleInfoPanel(state) {
      state.isInfoPanelOpen = !state.isInfoPanelOpen;
    },
  },
});

export const { toggleTheme, setTheme, toggleInfoPanel } = uiSlice.actions;
export default uiSlice.reducer;
