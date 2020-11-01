module.exports = function(request, response) {
  var message = request.query.say_hello ? 'Hello' : 'Goodbye';
  response.json({
    body: request.body,
    query: request.query,
    cookies: request.cookies,
    message: message,
  });
};
