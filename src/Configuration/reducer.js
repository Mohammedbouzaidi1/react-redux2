const initialeState = [];
const reducer = (state = initialeState, action) => {
  switch (action.type) {
    case "Add":
      return [
        ...state,
        {
          id: Math.random(),
          name: action.payload.name,
          email: action.payload.email,
        },
      ];
    case "Update":
      return state.map((item) => {
        if (item.id === action.payload.EditedId) {
          return {
            ...state,
            id: action.payload.EditedId,
            name: action.payload.name,
            email: action.payload.email,
          };
        } else {
          return item;
        }
      });
    case "Remove":
      return state.filter((item) => action.id !== item.id);
    default:
      return state;
  }
};

export default reducer;
