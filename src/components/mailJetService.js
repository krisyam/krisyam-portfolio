// MailjetService.js
// import { encode as btoa } from "base-64";
// import { mailJetApiKey, mailJetApiSecret } from "../key";

const sendEmail = async (senderEmail, subject, text) => {
    const mailjet = require('node-mailjet').connect(
        process.env.MJ_APIKEY_PUBLIC,
        process.env.MJ_APIKEY_PRIVATE
      );
    let request = mailjet
        .post("send", { 'version': 'v3.1' })
        .request({
            Messages: [{
                From: {
                    Email: "kristian.ayam+website@gmail.com",
                    Name: `Krisyam Website - ${senderEmail}`,
                },
                To: [
                    {
                        Email: "kristian.ayam@gmail.com",
                        Name: "Kristian Benzene Ayam",
                    },
                ],
                Subject: subject,
                TextPart: text,
            }]
        })

    console.log(request)
    request
        .then(result => {
            console.log(result.body)
        })
        .catch(err => {
            console.log(err.statusCode)
        })
    // const request = {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //         Authorization:
    //             "Basic " + btoa(mailJetApiKey + ":" + mailJetApiSecret),
    //     },
    //     body: JSON.stringify({
    //         Messages: [
    //             {
    //                 From: {
    //                     Email: "kristian.ayam+website@gmail.com",
    //                     Name: `Krisyam Website - ${senderEmail}`,
    //                 },
    //                 To: [
    //                     {
    //                         Email: "kristian.ayam@gmail.com",
    //                         Name: "Kristian Benzene Ayam",
    //                     },
    //                 ],
    //                 Subject: subject,
    //                 TextPart: text,
    //             },
    //         ],
    //     }),
    // };
    // console.log(JSON.stringify(request.body));
    // const response = await fetch("https://api.mailjet.com/v3/send", request);

    // const resultJson = await response.json();
    // console.log("Mailjet response", JSON.stringify(resultJson));
    // return resultJson;
};

export default sendEmail;
