const express = require('express');
const router = express.Router();
const UrlModel = require('../models/urlModel');
const _ = require('lodash');
const fetch = require('node-fetch');


function generateRandomId(length) {
  var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  var result = '';
  for (var i = 0; i < length; i++) {
    result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
  }
  return result;
}


//middleware
router.use('/saveurl', (req, res, next) => {
  req.body.short_url = generateRandomId(6);
  next();
})
//middleware

router.get('/', (req, res, next) => {
  res.status(200);
})
router.get('/stats', (req, res, next) => {
  res.status(200);
})

router.post('/saveurl', (req, res, next) => {
  let { long_url, short_url } = req.body;
  UrlModel.saveShortUrl({ long_url, short_url })
    .then(response => {
      res.status(200).json({ message: 'ShortUrl Created Successfully', short_url });
    })
    .catch(err => {
      res.status(201).json({ err });
    })
});

router.get('/geturl/:short_url', (req, res, next) => {
  let { short_url } = req.params;
  UrlModel.getShortUrl(short_url)
    .then(response => {
      res.status(200).json({ message: 'ShortUrl Fetched Successfully', data: response });
    })
    .catch(err => {
      res.status(201).json({ err });
    })
});

router.get('/getallurls', (req, res, next) => {
  UrlModel.getStats()
    .then(response => {
      res.status(200).json({ message: 'Data Fetched Successfully', data: response });
    })
    .catch(err => {
      res.status(201).json({ err });
    })
});

router.post('/savestats', async (req, res, next) => {
  let { short_urls_id } = req.body;
  // const ip_address = '27.59.142.116';
  const ip_address = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  getCountry(ip_address)
    .then(response => {
      console.log(short_urls_id, ip_address, _.get(response, 'country_name', ''))
      UrlModel.saveStats({ short_urls_id, ip_address, country: _.get(response, 'country_name', '') })
        .then(response => {
          res.status(200).json({ message: 'Data Saved Successfully' });
        })
        .catch(err => {
          res.status(201).json({ err });
        })
    })
    .catch(err => {
      res.status(400).json({ err });
    })
});

//getCOuntry Middleware
const getCountry = (ip) => {
  return new Promise(async (resolve, reject) => {
    await fetch(`http://api.ipstack.com/${ip}?access_key=378bfa1055a5eada1d26585b2068afce`, {
      method: 'GET'
    })
      .then(response => {
        return response.json();
      })
      .then(res => resolve(res))
      .catch(err => {
        reject(err);
      })
  })
}
//getCOuntry Middleware

module.exports = router;
