import { combineReducers } from "redux";
import { ticketReducer } from "./ticket";
export let rootReducer = combineReducers({ ticketReducer: ticketReducer });
