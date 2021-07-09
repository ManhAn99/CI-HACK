var root = null;
var useHash = true; // Defaults to: false
var hash = '#'; // Defaults to: '#'
var router = new Navigo(root, useHash, hash);


router
  .on('/register', function () {
    document.getElementById('app').innerHTML = '<register-form></register-form>'
  })
  .resolve();


router
  .on('/login', function () {
    document.getElementById('app').innerHTML = '<login-form></login-form>'
  })
  .resolve();
router
  .on('/headerTag', function () {
    document.getElementById('app').innerHTML = '<header-tag></header-tag>'
  })
  .resolve();
router
  .on('/homeScreen', function () {
    let currentUser = firebase.auth().currentUser;
    if (currentUser == null) {
      router.navigate('/login')
    }
    document.getElementById('app').innerHTML = '<home-screen></home-screen> '
  })
  .resolve();

window.router = router