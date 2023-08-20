import { NextResponse } from 'next/server'
const nodemailer=require("nodemailer")
const validator = require('validator');

export async function POST(req) {
    const {name,email,message,typeofprayer} = await req.json();
    
    if (validator.isEmail(email)) {
      var transporter = nodemailer.createTransport({
        host:"mail.potterstemplechurch.or.tz",
        port:465,
        auth: {
          user: process.env.EMAIL_ID,
          pass: process.env.EMAIL_PASSWORD
        }
       });

       transporter.verify(function(error, success) {
        if (error) {
          console.error('Transporter verification failed:', error);
        } else {
          console.log('Transporter is ready to send emails');
        }
      });

       var mailOptions = {
        from:email,
        to: process.env.EMAIL_ID,
        subject: `A New ${typeofprayer} From ${name.toUpperCase()} `,
         html:`
         <!DOCTYPE html>
         <html>
         <head>
           <meta charset="UTF-8">
           <title>${typeofprayer}</title>
         </head>
         <body>
           <h2>${typeofprayer}</h2>
           <p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Message:</strong> ${message}</p>
         </body>
         </html>
         `
       };
     const res=  await new Promise((resolve, reject) => {
       transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          reject(error);
        } else{
          resolve(info);
        }
       })
      })
      if(res){
        return NextResponse.json({"success":true,"message":`Your request is forwarded`})
      }else{
        return NextResponse.json({"success":false,"message":"Internal Server Error !" })
      }

    } else { 
      
      return NextResponse.json({"success":false,"message":"plz enter a valid email !" })

    }

  
}