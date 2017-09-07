module.change_code = 1;
'use strict';

var alexa = require( 'alexa-app' );
var app = new alexa.app( 'test-skill' );


app.launch( function( request, response ) {
	response.say( 'Welcome to my skill' ).reprompt( 'Way to go. ' ).shouldEndSession( false );
} );


app.error = function( exception, request, response ) {
	console.log(exception)
	console.log(request);
	console.log(response);	
	response.say( 'Sorry an error occured ' + error.message);
};
app.intent('GetNewWelcomeIntent',

  function(request,response) {
    //var number = request.slot('number');
    response.say("Hello sandeep ! How may i help you ? ");
  }
);
// news intent
app.intent('GetCricketUpdates',function(request,response) {
    
 var article=require('./cricketupdates')();

var news = article.articles[0].title;
response.say(news+" Do you want to hear one more article ?").shouldEndSession( false );
}

);
//
app.intent('YesIntent',function(request,response) {

var article=require('./cricketupdates')();

var min=2;
var max = 10;

var num =function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// var num = function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
//console.log(num);


var news = article.articles[num].title;
response.say(news+ " Do you want to hear one more article ?").shouldEndSession( false );
}

);

// thank you
app.intent('ThankYou',function(request,response) {

response.say("Thank you ! Have a good day").shouldEndSession( true );
}

);


app.intent('sayNumber',
  {
    "slots":{"number":"NUMBER"}
	,"utterances":[ 
		"say the number {1-100|number}",
		"give me the number {1-100|number}",
		"tell me the number {1-100|number}",
		"I want to hear you say the number {1-100|number}"]
  },
  function(request,response) {
    var number = request.slot('number');
    response.say("You asked for the number "+number);
  }
);

module.exports = app;
