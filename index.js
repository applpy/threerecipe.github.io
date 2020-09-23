const fetch = require("node-fetch");

const get_url = 'https://www.strava.com/api/v3/athlete/activities'
const post_url = 'https://www.strava.com/oauth/token?'
const refreshtoken = '9541e489b6a5ad9382817c70ec1e5d94285b9d0c'
const clientid = '46936'
const clientsecret = 'ba4aef26adc6ff032c0abffdf6ea94e2f5ba3a57';

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

function print(){
console.log(access_token)}
setTimeout(print,3000) 




