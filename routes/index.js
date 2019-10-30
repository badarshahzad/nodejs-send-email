var express = require("express");
var router = express.Router();

const nodemailer = require("nodemailer");

// TODO : REMEMBER my friend when you are going to send email to user. The email and password 
//			you have used is not secure used a secure way. Another thing is you have to enable
//			the less secure apps.
			

async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail",

    auth: {
      user: "YOUR_EMAIL", // generated ethereal user
      pass: "YOUR_PASSWORD" // generated ethereal password
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Badar Shahzad 👻" <badar@sudoz.com>', // sender address
    to: "badarshahzad54.uob@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>" // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/gmail", function(req, res, next) {
  res.render("index", { title: "Express" });
  main().catch(console.error);
  // sendEmail();
});
module.exports = router;
