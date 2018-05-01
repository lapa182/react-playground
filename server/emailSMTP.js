const express = require('express');
const nodemailer = require('nodemailer');
const Email = require('email-templates');
const router = express.Router();

router.get('/test', (req, res, next) => {
    res.send({ test: 'Yay, it worked'} );
});

router.post('/send', (req, res, next) => {

    res.header("Content-Type",'application/json');

    const nodeTransport = nodemailer.createTransport({
        host: 'smtp.office365.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.EMAIL_USER, // generated ethereal user
            pass: process.env.EMAIL_PASS // generated ethereal password
        },
        tls: {
            ciphers: 'SSLv3'
        },
        requireTLS: true
    });

    const email = new Email({
        message: {
            from: 'igo.lapa@tribalworldwide.co.uk'
        },
        send: true,
        transport: nodeTransport
    });
    
    email.send({
        template: 'wfh',
        message: {
            to: 'igo.lapa@tribalworldwide.co.uk'
        },
        locals: {
            message: req.body.emailText
        }
    })
    .then(function () {
        res.status(200).end();
    })
    .catch(() => {
        res.status(500).end();
    });
});

module.exports = router;