const router = require('express').Router()
const event = require('../controllers/event')
const auth = require('../controllers/auth')
const sub = require('../controllers/sub')
const secureRoute = require('../lib/secureRoute')

router.route('/events')
  .get(event.index)
  .post(secureRoute, event.create)

router.route('/events/:id')
  .get(event.show)
  .put(secureRoute, event.update)
  .delete(secureRoute, event.delete)

router.route('/register')
  .post(auth.register)

router.route('/login')
  .post(auth.login)

router.route('/subscribe')
  .get(sub.subscribeIndex)
  .post(sub.subscribe)

router.route('/mail')
  .post(sub.mail)

module.exports = router