# 幹話產生器
使用者只需要選擇角色，即可自動產生出符合該角色背景的幹話!

## 功能說明
1. 可以選擇任一個角色(工程師、設計師、創業家)，並按下"產生幹話"，即可產出一段敘述文字
2. 若未選擇任一個角色，直接按"產生幹話"，則會有紅色警示文字出現

## 開始使用
1. 下載本專案檔案至本地端
```
git clone https://github.com/surferintaiwan/Semester3-A4-shit-talk-generator.git
```
2. 於終端機打開專案檔案
```
cd Semester3-A4-shit-talk-generator
```
3. 於終端機安裝npm

此命令會查詢package.json看本專案使用了哪些套件，並自動安裝
```
npm install
```
4. 於終端機啟用並監聽伺服器
```
nodemon app.js
```
5. 於瀏覽器輸入 [http://localhost:3000/](http://localhost:3000/) 即可開始使用建立於本地端之幹話產生器網站

6. 若欲停止伺服器運行，可於終端機輸入Ctrl + C ，即可停用伺服器

## 環境配置
* node.js > v12.12.0

## 套件
* express
* express-handlebars
* body-parser
* nodemon
* bootstarp

## 專案貢獻者
[Shawn](https://github.com/surferintaiwan)