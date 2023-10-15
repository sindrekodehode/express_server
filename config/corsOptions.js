const whitelist = ["http://localhost:3500", "http://127.0.0.1:5500"];
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) != -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("GTFO, you're not in the club"));
    }
  },
  optionsSuccessStatus: 200,
};

module.exports = corsOptions;
