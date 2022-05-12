export const emailProperties = {
  length: 5,
  regex: /^\S+@\S+\.\S+$/,
};

export const passwordProperties = {
  length: 8,
  regex: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
};
