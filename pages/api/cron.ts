// import { MongoClient, MongoClientOptions } from 'mongodb';
// import nodemailer from 'nodemailer';

// export default async function handler(req, res) {
//   const uri = process.env.MONGODB_URI;
//   if (!uri) {
//     return res.status(500).json({ error: 'MongoDB URI is not defined' });
//   }
  
//   const { startDate, endDate } = req.query;

//   const client = new MongoClient(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   } as MongoClientOptions);

//   try {
//     await client.connect();

//     const database = client.db('Cluster0');
//     const collection = database.collection('emails');

//     // Convert IST dates from query parameters to UTC
//     let startOfDayUTC;
//     if (startDate) {
//       const startDateTime = new Date(startDate);
//       startOfDayUTC = startDateTime.toISOString();
//     } else {
//       const currentDateIST = new Date();
//       currentDateIST.setHours(0, 0, 0, 0);
//       startOfDayUTC = currentDateIST.toISOString();
//     }

//     let currentDateUTC;
//     if (endDate) {
//       const endDateTime = new Date(endDate);
//       currentDateUTC = endDateTime.toISOString();
//     } else {
//       currentDateUTC = new Date().toISOString();
//     }

//     const emails = await collection.find({
//       timestamp: { $gte: startOfDayUTC, $lte: currentDateUTC }
//     }).toArray();

//     // Convert timestamps from UTC to IST for display
//     emails.forEach(email => {
//       email.timestampIST = new Date(email.timestamp).toLocaleString('en-IN', {timeZone: 'Asia/Kolkata'});
//     });

//     let tableHtml = `
//       <style>
//         table {
//           width: 100%;
//           border-collapse: collapse;
//           font-family: Arial, sans-serif;
//         }
//         th, td {
//           padding: 8px;
//           text-align: left;
//           border-bottom: 1px solid #ddd;
//         }
//         th {
//           background-color: #f2f2f2;
//         }
//         tbody tr:nth-child(even) {
//           background-color: #f2f2f2;
//         }
//         tbody tr:hover {
//           background-color: #ddd;
//         }
//       </style>
//       <table>
//         <thead>
//           <tr>
//             <th>Email</th>
//             <th>Timestamp (IST)</th>
//           </tr>
//         </thead>
//         <tbody>
//     `;
    
//     emails.forEach(email => {
//       tableHtml += `
//         <tr>
//           <td>${email.email}</td>
//           <td>${email.timestampIST}</td>
//         </tr>
//       `;
//     });
    
//     tableHtml += '</tbody></table>';

//     const startDateIST = new Date(startOfDayUTC).toLocaleString('en-IN', {timeZone: 'Asia/Kolkata'});
//     const endDateIST = new Date(currentDateUTC).toLocaleString('en-IN', {timeZone: 'Asia/Kolkata'});

//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: process.env.GMAIL_SMTP_USERNAME,
//         pass: process.env.GMAIL_SMTP_PASSWORD
//       }
//     });

//     const mailOptions = {
//       from: process.env.GMAIL_SMTP_EMAIL_FROM,
//       to: 'info@bizassist.online',
//       cc: ['suresh.37x@gmail.com'],
//       subject: `List of Emails with Timestamps (${startDateIST} - ${endDateIST})`,
//       html: tableHtml
//     };

//     await transporter.sendMail(mailOptions);

//     res.status(200).end('Email sent successfully');
//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).end('Internal Server Error');
//   } finally {
//     await client.close();
//   }
// }