const redis = require("redis");
//Add important details to enviroenment vars
module.exports = {
    establishConnection : () => {
        return new Promise((resolve, reject) => {
        const client = redis.createClient(6380, "gcpdevredis.redis.cache.windows.net", 
                {auth_pass: "5FTPhRQIYMYkfG9vu1G3exM3S6PBfe8Id97Y62KakMI=", tls: {servername: "gcpdevredis.redis.cache.windows.net" }});
                client.auth('5FTPhRQIYMYkfG9vu1G3exM3S6PBfe8Id97Y62KakMI=', (err, reply) => {
                if(err){
                    reject(err)
                }else{
                    resolve(client)
                }
                })
            }
    
        )}
        
}