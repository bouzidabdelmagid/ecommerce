const nodemailer = require("nodemailer");
const sendEmail = async (email, htmlMessage,subject) => {
    try {
        const transporter = nodemailer.createTransport({
            service: process.env.SERVICE,
             host: "smtp.ethereal.email",
             port: 587,
             secure: false, // Use true for port 465, false for port 587
            auth: {
                user: process.env.EMAILUSER,
                pass: process.env.PASS
            },
        });
 // Options for sending email
        const options = {
            from:process.env.EMAILUSER,
            to: email,
            subject: subject,
            html: htmlMessage,
        };
// Send email
        await transporter.sendMail(options);
        console.log("Reset email sent successfully to:", email);
        return true; // Success
    } catch (error) {
        console.error("Error sending email:", error);
        return false; // Failure
    }
};
module.exports = sendEmail;