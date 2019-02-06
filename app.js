const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express')
const swaggerJSDoc = require('swagger-jsdoc')

if (process.env.NODE_ENV !== 'production') {
  dotenv.load();
}

const v1Router = require('./routes/v1');

const app = express();

if (process.env.NODE_ENV !== 'production') {
  app.use(cors())
} else {
  const corsOptions = {
    origin: /coachesclass\.com$/,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
  app.use(cors(corsOptions))
}
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// let version;
// try {
//   version = require('./app-version');
// } catch (err) {
//   version = '0.0.0';
// }
const v1JSDocOptions = {
  definition: {
    info: {
      title: "CoachesC.L.A.S.S. API",
      // description: "",
      // version: version,
    },
  },
  apis: ['./routes/v1/*.js'],
}
const v1SwaggerSpec = swaggerJSDoc(v1JSDocOptions)
app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(v1SwaggerSpec))

app.use('/api/v1', v1Router);

module.exports = app;
