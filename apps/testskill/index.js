module.change_code = 1;
'use strict';

var alexa = require( 'alexa-app' );
var app = new alexa.app( 'my-skill' );


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
