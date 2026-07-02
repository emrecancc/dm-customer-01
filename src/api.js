const handler = async (req, res) => {
  const data = await fetchData();
  res.json(data);
};
module.exports = { handler };
