const express = require('express');
const app = express();

const cors = require('cors');

// app.use(cors({
// //   origin: 'http://localhost:4200/'
// }));

const corsOptions = { 
    // origin:'https://abc.onrender.com',
    AccessControlAllowOrigin: '*',  
    origin: '*',  
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE' 
  }
  app.use(cors(corsOptions))

// app.get('/', (req, res) => {
//   res.send('CORS solved')
// })

// app.use((req, res, next) => {
//     const allowedOrigins = ['http://localhost:4200/', 'http://localhost:4200/cart'];
//     const origin = req.headers.origin;
//     if (allowedOrigins.includes(origin)) {
//       res.setHeader('Access-Control-Allow-Origin', origin);
//     }
//     return next();
//   });