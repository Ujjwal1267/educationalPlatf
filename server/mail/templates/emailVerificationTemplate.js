const otpTemplate = (otp) => {
	return `<!DOCTYPE html>
	<html lang="en">
	
	<head>
	  <meta charset="UTF-8" />
	  <title>OTP Verification Email</title>
	  <style>
		body {
		  background-color: #ffffff;
		  font-family: Arial, sans-serif;
		  font-size: 16px;
		  line-height: 1.6;
		  color: #333333;
		  margin: 0;
		  padding: 0;
		}
		.container {
		  max-width: 600px;
		  margin: 0 auto;
		  padding: 30px 20px;
		  text-align: center;
		  background-color: #f9f9f9;
		}
		.logo {
		  max-width: 180px;
		  margin-bottom: 20px;
		}
		.message {
		  font-size: 20px;
		  font-weight: bold;
		  margin-bottom: 20px;
		}
		.body p {
		  margin: 12px 0;
		}
		.highlight {
		  display: inline-block;
		  font-size: 24px;
		  font-weight: bold;
		  color: #000;
		  background-color: #ffd60a;
		  padding: 10px 20px;
		  border-radius: 5px;
		  margin: 20px 0;
		}
		.support {
		  font-size: 14px;
		  color: #777;
		  margin-top: 30px;
		}
		a {
		  color: #1a73e8;
		  text-decoration: none;
		}
	  </style>
	</head>
	
	<body>
	  <div class="container">
		<a href="https://studynotion-edtech-project.vercel.app">
		  <img class="logo" src="https://i.ibb.co/7Xyj3PC/logo.png" alt="StudyNotion Logo" />
		</a>
		<div class="message">Verify Your Account</div>
		<div class="body">
		  <p>Hello,</p>
		  <p>Thank you for registering with <strong>StudyNotion</strong>.</p>
		  <p>Please use the OTP below to verify your email address:</p>
		  <div class="highlight">${otp}</div>
		  <p>This OTP is valid for the next <strong>5 minutes</strong>.</p>
		  <p>If you did not initiate this request, please ignore this email.</p>
		</div>
		<div class="support">
		  Need help? Contact us at <a href="mailto:info@studynotion.com">info@studynotion.com</a>
		</div>
	  </div>
	</body>
	
	</html>`;
  };
  
  module.exports = otpTemplate;
  