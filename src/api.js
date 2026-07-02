const handler = (req, res) => {
  const data = await fetchData();
  res.json(data);
};
module.exports = { handler };
