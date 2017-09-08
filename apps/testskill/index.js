
'use strict';

var alexa = require( 'alexa-app' );
var app = new alexa.app( 'test-skill' );


app.launch( function( request, response ) {
	response.say( 'Welcome to daily news updates' ).reprompt( 'Way to go. ' ).shouldEndSession( false );
} );


app.error = function( exception, request, response ) {
	console.log(exception)
	console.log(request);
	console.log(response);	
	response.say( 'Sorry an error occured ' + error.message);
};
//Welcome intent
app.intent('GetNewWelcomeIntent',

  function(request,response) {
    response.say("Hello sandeep ! How may i help you ? ");
  }
);
// news intent
app.intent('GetCricketUpdates',function(request,response) {
    
 var article=require('./cricketupdates')();

var news = article.articles[0].title;
response.say(news+"." + " Do you want to hear one more article ?").shouldEndSession( false );
}

);
// asking more news
app.intent('YesIntent',function(request,response) {

var article=require('./cricketupdates')();

var min=2;
var max = 10;

var num = Math.floor(Math.random() * 9) + 1 ;



var news = article.articles[num].title;
response.say(news+ "." + " Do you want to hear one more article ?").shouldEndSession( false );
}

);

// thank you intent
app.intent('ThankYou',function(request,response) {

response.say("Thank you ! Have a good day").shouldEndSession( true );
}

);


module.exports = app;
