const request = require('request-sync');
let datares;
module.exports = function () {
    return JSON.parse(request({
        uri: "https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=3058b62b8b2d4eda9a246510fccbf556" ,
        method: 'GET'
    }).body);

};
