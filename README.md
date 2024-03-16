# User Management

This is simple user management using Svelte with MongoDB database and using JWT token for login/register purposes.

# For Production Environment

Install Mongodb.

In command prompt, start the mongodb by typing,
```
mongod
```
This will start the mongodb. You can use MongoDB Compass GUI to create databases. Create a database named "login". (check src/server.cjs)


In another command prompt navigate to project folder and start the server side script by typing,
```
node src/server.cjs
```
This will run the server script and will connect to mongodb.


In another command prompt,
```
npm install -g http-server
```
This will install http-server globally.


In command prompt, navigate to dist folder and type,
```
http-server
```
This will start the http-server with the dist files and will show available urls.
Open one of the mentioned urls in browser.


# For Developement Environment

Install Mongodb.

In command prompt, start the mongodb by typing,
```
mongod
```
This will start the mongodb. You can use MongoDB Compass to create databases. Create a database named "login". (check src/server.cjs)


In another command prompt navigate to project folder and start the server side script by typing,
```
node src/server.cjs
```
This will run the server script and will connect to mongodb.


In another command prompt navigate to project folder and type,
```
npm run dev -- --open
```
This will open development url in browser, use Visual Studio Code to edit the "src" folder files (.svelte files, css, html) and can view live changes.



