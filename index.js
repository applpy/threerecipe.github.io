
const { access } = require('fs');
const { url } = require('inspector');
const fetch = require('node-fetch');
require('dotenv').config();

const get_url = process.env.get_url
const post_url = process.env.post_url
const refreshtoken = process.env.refresh_token
const clientid = process.env.client_id
const clientsecret = process.env.client_secret;

var access_token;
var data;
var bearer = 'Bearer ';

function get_access_token() {
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
.then(json => access_token = json.access_token)}

function get_data() {
access_token_final = String(bearer + access_token)
fetch(get_url, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': access_token_final,
        'per_page':'200',
        'page':'1'
    }
})
.then(res=> res.json())
.then(json => data = json)}


/*
get_access_token()
setTimeout(get_data,1000)
function print() {console.log(access_token_final ,data)}
setTimeout(print,2000)
*/







