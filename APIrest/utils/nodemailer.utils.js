const nodemailer = require("nodemailer");

module.exports = {

  mailOptions: function (user) {
    return  mailOptions = {
    from: process.env.EMAIL,
    to: `${user.email}`,
    subject: `Welcome on MateHub ✔`, // Subject line
    text: `Hey ${user.nickname}, thank you for creating an account at matehub.gg.<br>We are doing everything we can to make your experience on the site as pleasant as possible, and if you have anything to tell us about it, you can contact us via the contact page. We hope that you will find a lot of teammates to play your favorite games.`, // plain text body
    html: `<h1>Hey ${user.nickname}</h1>
    <p>Thank you for creating an account at <strong>matehub.gg</strong> . We are doing everything we can to make your experience on the site as pleasant as possible, and if you have anything to tell us about it, you can contact us via the contact page. We hope that you will find a lot of teammates to play your favorite games</p>
    <h3>Enjoy</h3>`, // html body
  }},

  mailOptionsPassword: function (email, securityString) {
    return  mailOptions = {
    from: process.env.EMAIL,
    to: `${email}`,
    subject: `forgot password ✔`, // Subject line
    text: `hey ,here is the code to change your password`, // plain text body
    html: `<h1>Hey </h1>
    <p>here is the code to change your password:<br>${securityString}</p>` // html body
  }},
}
  


/*

transporter.sendMail(mailOptions, (err, data) => {
  if (err) {
    console.log('error', err)
  } else {
    console.log('email send')
  }
})*/

/*
// async..await is not allowed in global scope, must use a wrapper
async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();
  
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass, // generated ethereal password
      },
    });
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"MateHub Teams " <foo@example.com>', // sender address
      to: "bar@example.com, baz@example.com", // list of receivers
      subject: "Welcome on MateHub ✔", // Subject line
      text: "Hello user, thank you for creating an account at matehub . We are doing everything we can to make your experience on the site as pleasant as possible, and if you have anything to tell us about it, you can contact us via the contact page. We hope that you will find a lot of teammates to play your favorite games.", // plain text body
      html: `<h1>Hello User</h1>
      <p>thank you for creating an account at <strong>matehub</strong> . We are doing everything we can to make your experience on the site as pleasant as possible, and if you have anything to tell us about it, you can contact us via the contact page. We hope that you will find a lot of teammates to play your favorite games</p>
      <h3>Enjoy</h3>`, // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }
  
  main().catch(console.error);*/