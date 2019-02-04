import router from '../../js/router';

router.get('/', function (req, res) {
  console.log(req.url, req.path)
})

router.get('/tag/:int', function (req, res) {
  console.log(req.url, req.path)
})