const { onRequest } = require("firebase-functions/v2/https");
const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const cors = require("cors")({ origin: true });

const { defineSecret } = require("firebase-functions/params");
const emailUser = defineSecret("EMAIL_USER");
const emailPass = defineSecret("EMAIL_PASS");

exports.sendContactEmail = functions.https.onRequest((req, res) => {
	cors(req, res, async () => {

		if (req.method !== "POST") {
			return res.status(405).send("Method Not Allowed");
		}

		const { name, subject, email, message } = req.body;

		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: emailUser.value(),
				pass: emailPass.value()
				// user: process.env.EMAIL_USER,
				// pass: process.env.EMAIL_PASS
			}
		});

		try {
			await transporter.sendMail({
				from: email,
				to: emailUser.value(),
				subject: `Portfolio Contact - ${name} - ${subject}`,

				html: `<div style="max-width:600px;margin:auto;font-family:Segoe UI,Arial;padding:20px;border:1px solid #eee;border-radius:10px;">
                
               <h2>New Message from Your Portfolio</h2>
               
               <p><strong>From:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Subject:</strong> ${subject}</p>
               
               <div style="background:#f8f9fa;padding:15px;border-radius:8px;margin-top:20px;">
               <h3>Message</h3>
               <p style="white-space:pre-line;">${message}</p>
               </div>
               
               <p style="margin-top:30px;font-size:12px;color:#aaa;">
               Portfolio Contact System
               </p>
               
               </div>`
			});

			res.status(200).send({ success: true });

		} catch (error) {
			res.status(500).send({ error: "Email failed to send" });
		}

	});
});