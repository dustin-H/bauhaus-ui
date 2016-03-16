
module.exports = function(req, res) {
  if (req.body.username !== 'demo' || req.body.password !== 'demo') {
    return res.status(401).send()
  }
  res.json({
    token: 'NotSecureToken',
    profile: {
      firstname: 'Steve',
      lastname: 'Jobs',
      avatarUrl: 'static/steve-jobs.jpg'
    }
  })
}
