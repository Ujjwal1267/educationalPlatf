exports.courseEnrollmentEmail = (courseName, name) => {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8" />
      <title>Course Enrollment Confirmation</title>
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
          padding: 30px;
          text-align: left;
          background-color: #f9f9f9;
        }
        .logo {
          max-width: 180px;
          display: block;
          margin: 0 auto 20px auto;
        }
        .message {
          font-size: 20px;
          font-weight: bold;
          color: #222;
          margin-bottom: 20px;
          text-align: center;
        }
        .body p {
          margin: 12px 0;
        }
        .highlight {
          font-weight: bold;
          color: #000;
        }
        .cta {
          display: inline-block;
          padding: 12px 24px;
          background-color: #ffd60a;
          color: #000000;
          text-decoration: none;
          border-radius: 5px;
          font-weight: bold;
          margin-top: 25px;
          text-align: center;
        }
        .support {
          font-size: 14px;
          color: #777;
          margin-top: 30px;
          text-align: center;
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
        <div class="message">You're Enrolled!</div>
        <div class="body">
          <p>Dear ${name},</p>
          <p>Congratulations! You’ve successfully enrolled in the course: <span class="highlight">"${courseName}"</span>.</p>
          <p>Your learning journey starts now — all the course content is ready for you in your dashboard.</p>
          <p><a class="cta" href="https://studynotion-edtech-project.vercel.app/dashboard">Access My Dashboard</a></p>
        </div>
        <div class="support">
          Need help or have questions? Email us at <a href="mailto:info@studynotion.com">info@studynotion.com</a> — we're happy to assist!
        </div>
      </div>
    </body>
    
    </html>`;
  };
  