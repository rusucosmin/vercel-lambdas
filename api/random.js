module.exports = function(request, response) {
  const lowerBound = Number(request.query.lower) || 0;
  const upperBound = Number(request.query.upper) || 100;
  response.json({
    lowerBound: lowerBound,
    upperBound: upperBound,
    random: Math.random() * (upperBound - lowerBound) + lowerBound,
  });
}
