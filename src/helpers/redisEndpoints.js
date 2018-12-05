const connection = require('./connection');
const redis = require("redis");
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

module.exports = (app) => {
    app.post('/redis/save',jsonParser, (req, res) => {
        const uuid = req.body.uuid.toString();
        const type = req.body.type.toString();
        const data = req.body.value;
        const value  = JSON.stringify(data);
        const val = JSON.stringify(value);
        connection.establishConnection().then(result => {
            const client = result;
            client.hset(uuid,type, val, redis.print);
            client.hget(uuid,type,(error, result) => {
                if (error) {
                    throw error;
                }
                const data = JSON.parse(result)
                const basket = JSON.parse(data)
                res.json(basket)
            });
            client.quit()
        }).catch(error => {
            res.json({"error": error})
            client.quit()
        })
        
    });
    app.post('/redis/get', jsonParser, (req, res) => {
        const uuid = req.body.uuid.toString();
        const type = req.body.type.toString();
        connection.establishConnection().then(result => {
            const client = result;
            client.hget(uuid,type, (error, result) => {
                if (error) {
                  
                    throw error;
                }
                const data = JSON.parse(result)
               
                const basket = JSON.parse(data)
                res.json(basket)
                client.quit()
            });
        }).catch(error => {
            res.send({"error" : error})
            client.quit()
        })
    });
    app.delete('/redis/delete',jsonParser, (req, res) => {
        const uuid = req.body.uuid.toString();
        const type = req.body.type.toString();
        connection.establishConnection().then(result => {
            const client = result;
            client.HDEL(uuid,type, (result => {
              
                if(result === null){
                    res.json({"deleted" : true})
                    client.quit()
                }
            }))
            }).catch(error => {
                res.json({"error": error})
                client.quit()
            })
    })
    app.get('/redis/getall/:uuid',jsonParser, (req, res) => {
        const uuid = req.params.uuid.toString();
        connection.establishConnection().then(result => {
            const client = result;
            client.hgetall(uuid, (err, results) => {
                
                if(results){
                res.json({alldata: results})
                    client.quit()
                }else{
                    res.json({error:err})
                    client.quit()
                }
            });
        })
    })
    
}
  