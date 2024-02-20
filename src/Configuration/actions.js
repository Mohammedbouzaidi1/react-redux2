export const Add_user = (credentials) => {
  return {
    type: "Add",
    payload: credentials,
  };
};

export const Update_user = (credentials) => {
  return {
    type: "Update",
    payload: credentials,
  };
};

export const Remove_user = (id) => {
  return {
    type: "Remove",
    id: id,
  };
};