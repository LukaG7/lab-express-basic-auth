const router = require("express").Router();
const bcryptjs = require('bcryptjs');

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get('/signup', (req, res, next) => {
  res.render('signup.hbs')
  const myEmail = req.body.email;
  const myPassword = req.body.password;

  const myHashedPassword = bcryptjs.hashSync(myPassword)

  User.create({
    username: myUsername,
    password: myHashedPassword
  })
  .then(savedUser => {
    console.log(savedUser);
    res.redirect('/login')
  })
  .catch(err => {
    console.log(err)
    res.send(err);
  })
});

module.exports = router;
