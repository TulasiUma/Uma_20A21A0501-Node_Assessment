// var nodemailer=require('nodemailer');
// var transporter=nodemailer.createTransport({
//     service:'gmail',
//         auth: {
//              user:'umaachanta7301@gmail.com',
//              pass:'yivnjvynpyzrxpgo'
//         }   
// });
// var mailOptions={
//     from:'umaachanta7301@gmail.com',
//     to:'pravin.consensus@gmail.com',
//     subject:'sending mail from 20A21A0501',
//     text:'Hello Sir'
// };
// transporter.sendMail(mailOptions, function(error,info){
//     if(error) {
//         console.log(error);
//     }
    
//     else{
//         console.log('Email Sent:' + info.response);
//     }
// });
var nodemailer=require('nodemailer');
var transport=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'umaachanta7301@gmail.com',
        pass:'yivnjvynpyzrxpgo'
    }
});
var mailOptions={
    from:'umaachanta7301@gmail.com',
    to:'pravin.consensus@gmail.com',
    subject:'20A21A0501',
    text:'hello Sir'
};
transport.sendMail(mailOptions,function(error,info){
    if(error){
        console.log(error);
    }
    else{
        console.log('Email Sent :'+info.response);
    }
});