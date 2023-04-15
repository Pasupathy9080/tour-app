// Action Types
export const UPDATE_PAYMENT_STATUS = "UPDATE_PAYMENT_STATUS";

// Action Creators
export const updatePaymentStatus = (orderId, status) => ({
  type: UPDATE_PAYMENT_STATUS,
  payload: { orderId, status },
});

// Thunk Action Creator
export const updatePaymentStatusAsync = (orderId, status) => {
  return (dispatch) => {
    // Simulate asynchronous payment status update
    setTimeout(() => {
      dispatch(updatePaymentStatus(orderId, status));
    }, 2000);
  };
};
