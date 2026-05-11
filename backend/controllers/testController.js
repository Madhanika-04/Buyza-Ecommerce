const testApi = (req, res) => {
  res.json({ message: "Backend connected successfully 🚀" });
};

module.exports = { testApi };