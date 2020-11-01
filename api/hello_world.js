module.exports = function(request, response) {
  var message = request.query.say_hello ? 'Hello from Vercel' : 'Goodbye';
  response.json({
    body: request.body,
    query: request.query,
    cookies: request.cookies,
    message: message,
  });
};
