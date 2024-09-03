module.exports = {
  createUser: (data) => ({
    first_name: data.first_name,
    last_name: data.last_name,
    email: data.email,
  }),
};
