function processUser(user) {
  const { street } = user || {};
  // other logic
  return street;
}
module.exports = { processUser };
