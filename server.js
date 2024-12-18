// backend/server.js

const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 5000;

// Setup multer for file handling
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Create a folder with a name based on current date or any unique string
    const folderName = 'uploads/' + new Date().toISOString().split('T')[0]; // e.g., "uploads/2024-12-18"
    
    // Create the folder if it doesn't exist
    if (!fs.existsSync(folderName)){
      fs.mkdirSync(folderName, { recursive: true });
    }
    
    cb(null, folderName);  // Store file in the created folder
  },
  filename: (req, file, cb) => {
    // Set the filename as the original file name
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

app.use(express.static('public'));  // Serve static files

// POST route to handle the file upload
app.post('/upload', upload.single('uploadCV'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  // Respond with the file URL (this can be a path or an actual URL to access the file)
  const fileUrl = `/uploads/${new Date().toISOString().split('T')[0]}/${req.file.filename}`;
  res.json({ message: 'File uploaded successfully', fileUrl });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
