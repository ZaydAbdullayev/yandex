export const reCardUpdate = (state = false, action) => {
  switch (action.type) {
    case "UPDATE_CARD":
      return !state;
    case "TRUE":
      return true;
    default:
      return state;
  }
};

export const acUpdateCard = () => {
  return { type: "UPDATE_CARD" };
};

export const acUpdate = (payload) => {
  return {
    type: "TRUE",
    payload,
  };
};
