const compose = require('compose-middleware').compose;
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

var whitelist = process.env.WHITELIST_URLS?.split(',') ?? [];

if (process.env.NODE_ENV === 'development') {
  whitelist.push('http://localhost:3000');
}

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(null, false);
    }
  },
  methods: ['POST'],
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

module.exports = compose([
  morgan(':remote-addr :method :url :status :res[content-length] :response-time ms'),
  bodyParser.json(),
  cors(corsOptions),
]);
