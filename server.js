const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;

// สั่งให้ส่งไฟล์ทุกอย่างในโฟลเดอร์นี้ (รวมถึง .js และ .css)
app.use(express.static(__dirname));

// เมื่อเข้าหน้าแรก ให้ส่งไฟล์ index.html ออกไป
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log('Server is running on port ' + port);
});
