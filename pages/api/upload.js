// pages/api/upload.js
import formidable from 'formidable';
import path from 'path';

export const config = {
  api: {
    bodyParser: false, // Disable default body parser to handle file uploads
  },
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const form = new formidable.IncomingForm();
    form.uploadDir = path.join(process.cwd(), '/public/uploads');
    form.keepExtensions = true;

    try {
      const { fields, files } = await new Promise((resolve, reject) => {
        form.parse(req, (err, fields, files) => {
          if (err) reject(err);
          resolve({ fields, files });
        });
      });

      const { name, email, phone, appliedPosition } = fields;
      const resumeFile = files.resume;

      if (!name || !email || !phone || !appliedPosition || !resumeFile) {
        return res.status(400).json({ message: 'All fields are required.' });
      }

      // Handle the file (e.g., move it to a permanent location, send email, etc.)
      const filePath = path.join('/uploads', path.basename(resumeFile.filepath));
      const fileUrl = `${req.headers.origin}${filePath}`;

      // Here, you can send the email with the form data and file URL using nodemailer

      return res.status(200).json({ message: 'Form submitted successfully.' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error processing the form.' });
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}



