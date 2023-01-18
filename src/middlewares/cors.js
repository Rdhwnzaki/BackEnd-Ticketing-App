const myCors = (req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    "https://caffeine-ankasa-tickecting.netlify.app",
    "https://ticketing-adm.netlify.app"
  );
  // http://domain-website-kamu.com
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
};

module.exports = {
  myCors,
};
