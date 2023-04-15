import { UPDATE_PAYMENT_STATUS } from "../actions/PaymentActions";

const initialState = {};

const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PAYMENT_STATUS:
      const { orderId, status } = action.payload;
      return {
        ...state,
        [orderId]: status,
      };
    default:
      return state;
  }
};

export default paymentReducer;
