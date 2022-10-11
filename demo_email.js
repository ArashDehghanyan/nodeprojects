var nodemailer = require('nodemailer');

var transporter =  nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'arashserej@gmail.com',
    pass: 'successpoint2013'
  }
});

var mailOptions = {
  from: 'arashserej@gmail.com',
  to: 'jobs@danaxa.com',
  subject: 'hiring',
  text: 'Dear Fastima I have send you emails many times but you never replied.'
};

transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
