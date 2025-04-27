exports.paymentSuccessEmail = (name, amount, orderId, paymentId) => {
    return `<!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8" />
      <title>Payment Confirmation</title>
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
  
        .cta {
          display: inline-block;
          padding: 10px 20px;
          background-color: #FFD60A;
          color: #000000;
          text-decoration: none;
          border-radius: 5px;
          font-size: 16px;
          font-weight: bold;
          margin-top: 30px;
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
        <div class="message">Thank You for Your Payment!</div>
        <div class="body">
          <p>Hi ${name},</p>
          <p>We’re happy to confirm that we’ve received your payment of <span class="highlight">₹${amount}</span>.</p>
          <p><strong>Payment ID:</strong> ${paymentId}</p>
          <p><strong>Order ID:</strong> ${orderId}</p>
          <p>You can now access your course via your dashboard.</p>
  
          <a class="cta" href="https://studynotion-edtech-project.vercel.app/dashboard">Go to Dashboard</a>
        </div>
        <div class="support">
          Need help? Email us at <a href="mailto:info@studynotion.com">info@studynotion.com</a>
        </div>
      </div>
    </body>
  
    </html>`;
  };
  