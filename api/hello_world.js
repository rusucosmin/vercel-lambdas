module.exports = function(request, response) {
  response.json({
    body: request.body,
    query: request.query,
    cookies: request.cookies,
    message: 'Hello from Vercel',
  });
};
