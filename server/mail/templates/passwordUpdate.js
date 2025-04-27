exports.passwordUpdated = (email, name) => {
	return `<!DOCTYPE html>
	<html lang="en">
	
	<head>
		<meta charset="UTF-8" />
		<title>Password Update Confirmation</title>
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
				font-weight: bold;
				color: #000000;
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
			<div class="message">Your Password Has Been Updated</div>
			<div class="body">
				<p>Hi ${name},</p>
				<p>This is a confirmation that the password associated with your account (<span class="highlight">${email}</span>) has been successfully updated.</p>
				<p>If you made this change, no further action is required.</p>
				<p><strong>If you did not make this change</strong>, please reset your password immediately and contact our support team to ensure the security of your account.</p>
			</div>
			<div class="support">
				Need help? Contact us at <a href="mailto:info@studynotion.com">info@studynotion.com</a>
			</div>
		</div>
	</body>
	
	</html>`;
};
