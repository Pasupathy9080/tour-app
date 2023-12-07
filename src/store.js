import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducers';
import thunk from "redux-thunk";
import paymentReducer from './reducers/PaymentReducers';

const rootReducer = combineReducers({
  auth: authReducer,
  payment: paymentReducer,
  // Add other reducers here if needed
});

const middleware = [thunk];

const store = configureStore({
  reducer: rootReducer,
  middleware,
  // Add preloaded state here if needed
});

export default store;
