export const rePrice = (state = null, action) => {
  console.log(state);
  switch (action.type) {
    case "TOTAL":
      return action.payload;
    default:
      return state;
  }
};

export const acPrice = (payload) => ({ type: "TOTAL", payload });
