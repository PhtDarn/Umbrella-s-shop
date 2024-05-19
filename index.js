const express = require("express");
const path = require("path");

const app = express();

// Указываем текущую директорию как директорию со статическими файлами
app.use(express.static(__dirname));

app.listen(3000, () => {
  console.log("Сервер на порте 3000");
});
