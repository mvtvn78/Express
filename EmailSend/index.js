const nodemailer = require("nodemailer");
require('dotenv').config()
console.log(process.env.USER_EMAIL)
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.APP_EMAIL, // app password
  },
});

const mailOptions = {
  from: {
    name: "Mai Van Tien",
    address: "Hacker@hack.io",
  },
  to: ["example@gmail.com"], // list of receivers
  subject: "Hello ✔", // Subject line
  text: "Hello world?", // plain text body
  html: "<b>Kaioken?</b>", // html body
};

const sendMail = async (transporter, mailOptions) => {
  try {
    await transporter.sendMail(mailOptions);
    console.log("Email has been sent!");
  } catch (err) {
    console.error(err);
  }
};
sendMail(transporter, mailOptions);
