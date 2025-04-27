exports.contactUsEmail = (
    email,
    firstname,
    lastname,
    message,
    phoneNo,
    countrycode
  ) => {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8" />
      <title>Contact Form Confirmation</title>
      <style>
        body {
          background-color: #ffffff;
          font-family: Arial, sans-serif;
          font-size: 16px;
          line-height: 1.5;
          color: #333333;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 30px;
          text-align: left;
          background-color: #f9f9f9;
        }
        .logo {
          max-width: 180px;
          margin-bottom: 20px;
          display: block;
        }
        .message {
          font-size: 20px;
          font-weight: bold;
          color: #222;
          margin-bottom: 20px;
        }
        .body p {
          margin: 10px 0;
        }
        .support {
          font-size: 14px;
          color: #777777;
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
        <div class="message">Thank You for Reaching Out!</div>
        <div class="body">
          <p>Dear ${firstname} ${lastname},</p>
          <p>Thank you for contacting StudyNotion. We've received your message and our team will respond as soon as possible.</p>
          <p><strong>Here’s a summary of your message:</strong></p>
          <p><strong>Name:</strong> ${firstname} ${lastname}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${countrycode} ${phoneNo}</p>
          <p><strong>Message:</strong><br />${message}</p>
          <p>We appreciate your interest and will get back to you shortly.</p>
        </div>
        <div class="support">
          If you need immediate assistance, please contact us at
          <a href="mailto:info@studynotion.com">info@studynotion.com</a>.
        </div>
      </div>
    </body>
    
    </html>`;
  };
  