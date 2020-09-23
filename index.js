
const fetch = require('node-fetch');
require('dotenv').config();

const get_url = process.env.get_url
const post_url = process.env.post_url
const refreshtoken = process.env.refresh_token
const clientid = process.env.client_id
const clientsecret = process.env.client_secret;

var access_token;
fetch(post_url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        'client_id':clientid,
        'client_secret':clientsecret,
        'refresh_token':refreshtoken,
        'grant_type':'refresh_token'
    })
})
.then(res => res.json())
.then(json => access_token = json.access_token) 

function print() {console.log(access_token)}
setTimeout(print,3000) 




