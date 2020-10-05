const connect = require('../config/db.connect');
const _ = require('lodash');

const UrlModel = {
    saveShortUrl: (reqData) => {
        let { long_url, short_url } = reqData;
        return new Promise((resolve, reject) => {
            connect.query('insert into short_urls (long_url, short_url) values (?, ?)', [long_url, short_url], (err, data) => {
                if (err) {
                    reject(err)
                }
                resolve(data);
            })
        });
    },

    getShortUrl: async (short_url) => {
        return new Promise((resolve, reject) => {
            connect.query('SELECT long_url, short_url, id, created_at FROM short_urls WHERE short_url = ?', [short_url], (err, [data]) => {
                if (err) {
                    reject(err);
                } else {
                    if (_.get(data, 'long_url', '')) {
                        resolve(data);
                    } else {
                        reject({ message: 'No data Found' });
                    }
                }
            });
        })
    },

    saveStats: async (reqData) => {
        let { short_urls_id, ip_address, country } = reqData;
        return new Promise((resolve, reject) => {
            connect.query('insert into stats (short_urls_id, ip_address, country) values (?, ?, ?)', [short_urls_id, ip_address, country], (err, data) => {
                if (err) {
                    reject(err)
                }
                resolve(data);
            })
        });
    },

    getStats: async () => {
        return new Promise((resolve, reject) => {
            connect.query(`select su.long_url, su.short_url, su.id as url_id, count(stat.id) as count, GROUP_CONCAT(DISTINCT stat.country) as countries from stats as stat RIGHT join short_urls su on su.id = stat.short_urls_id GROUP BY url_id`, [], (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        })
    }
}

module.exports = UrlModel;