/* 
json-server:
1. npm i json-server 
2. package.json中的scripts里增加：
"server": "json-server --watch db.json --port 5001"
其中:
    db.json是json file的名字
    --port 5001, specifies the port on which the JSON Server will run
3. Feedback中增加db.json文件
4. run json server:
npm run server

5. postman(需要desktop),
get:
http://localhost:5001/feedback
会看到json

post:
http://localhost:5001/feedback
Body中，选raw，填：（id不用，会自动生成。但目前会转String导致随机，还未解
{
  "rating": 7,
  "test": "feedback from postman"
}
会看到生成的内容，同时db.json中可以看到

delete:
http://localhost:5001/feedback/a36e

6. 因为现在npm run start运行react，npm run server运行json server，可以：
1. npm i concurrently
2. package.json的scripts中增加
    "dev": "concurrently \"npm run server\" \"npm start\""
3. terminal中npm run dev
    react run: http://localhost:3000/
    server run: http://localhost:5001/feedback

这里经常会发现5001和3000被占用，可以：
1. lsof -i :5001
2. 如果返回
COMMAND   PID USER   FD   TYPE             DEVICE SIZE/OFF NODE NAME
node    34650  phm   23u  IPv4 0xab4db8b5a96a6bf9      0t0  TCP *:hbci (LISTEN)
则34650的PID在占用
3. kill -9 34650
4. lsof -i :5001
如果no output is returned，就OK了

7. 可以在package.json中增加proxy
"proxy": "http://localhost:5001/",
在API请求(FeedbackContext)中原使用
let response = await fetch(`http://localhost:5001/feedback?_sort=id&_order=desc`)
可以换成
let response = await fetch(`/feedback?_sort=id&_order=desc`)
*/