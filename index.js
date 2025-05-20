const { ethers } = require('ethers');
const express = require('express');
const path = require('path');
const app = express();

// Phục vụ các file tĩnh từ thư mục public
app.use(express.static('public'));

// Route chính
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Khởi động server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});