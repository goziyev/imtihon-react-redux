import { createStore } from "redux";
import { customeReducer } from "./customeReducer";

export const store = createStore(customeReducer);
