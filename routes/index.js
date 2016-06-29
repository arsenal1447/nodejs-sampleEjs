var express = require('express');
    router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
    if(req.cookies.islogin){
        console.log('cookie:' + req.cookies.islogin);
        req.locals.username = req.cookie.islogin;
    }
    res.render('index', { title: 'Express' });

    if(req.session.username){
        console.log('session:' + req.session.username);
        res.locals.username = req.session.username;
    }else{
        res.redirect('/login');
        return;
    }

    res.render('index',{title:'首页'});
});

module.exports = router;
