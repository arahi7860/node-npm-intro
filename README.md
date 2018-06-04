# Intro to Server Applications, HTTP, NodeJS, and npm

## Learning Objectives

  - Describe the role of the server
  - Describe the request/response paradigm
  - Identify high-level differences between server-side and client-side Javascript
  - Export and import NodeJS modules
  - Use npm to install and manage dependencies in projects and globally, on the local machine 
  - Build a basic server application from scratch

## Framing (5 min, 0:05)

Today we're going to embark on the next leg of our journey in learning fullstack web development. 
So far we've just learned to write client-side JavaScript that is loaded into our browsers via an HTML file. 
There hasn't been a server involved yet.

If we're not writing JavaScript *for* our browsers to run, then what exactly are we writing it for? 
You may have heard that nodeJS is server-side JavaScript, but why and how are we concerned with servers as web developers?

## Discuss: What does a server do?

In plain english, what does a server do? Spend 2-3 minutes discussing with your peers and we'll review. 

## The Role of the Server (10 min, 0:15)

The server provides as much functionality as we want it to. That can mean performing really resource-heavy computation (like with large amounts of data), reading and writing from a database, or responding to a request. 

You don't want to do heavy-lifting in the browser, especially when dealing with mobile devices. So, we put our code on the server.

In web development, the most common job of a *server* is to **respond** to *client* **requests**. 
If a server application receives a request it can't fulfill, it still provides a response. 
If a server doesn't respond with anything, we'll assume that it is down or that something has gone wrong with our connection.

![client-server](./assets/client-server.png)

There is a 'contract' between servers and clients where a *client makes requests to a server* and the *server responds to the request*. 
This is a paradigm known as [request-response](https://en.wikipedia.org/wiki/Request%E2%80%93response). 
The rules laid down by this paradigm enforce a standard baseline for a reliable internet we've all come to rely on. 

In a practical sense, every time you visit a website (like `google.com`) you're seeing what's been requested and returned from a server. 

What we've done so far is write our code in files and opened them locally - what if we wanted someone else to be able to view our site? Well we could email them I guess (sounds terrible). 

OR

We could set up a server to send that html/css/javascript to each person that visits it. Then we have control over what happens on both ends. 

<!--

## HTTP (10 min, 10:25)

HTTP is the fundamental way that we receive and transmit data to and from websites. When we visit a website, the URLs we type into our browsers' navigation bars start with `http` or `https`. Even if we don't type `http` in, our browsers will fill this in for us. HTTP stands for **hypertext transfer protocol**. HTTP is a protocol built on  a kind of contract between clients and servers, that a server must provide some type of response to a request from a client. In the case of this lesson, we are clients using a browser to connect to `git.generalassemb.ly`.

HTTP 1.1 (what we are used to) is a stateless protocol which means that its connection doesn't keep track of its status. The connections simply open and close. A connection is established between the user's browser (the client) and the server when the user makes a request to the server. After the request is received, a server responds to the request with a webpage, an error page, some data, a file, etc, and then the connection is closed.

A stateful protocol, like a websocket connection, maintains an open connection in a socket that listens for messages that are transmitted or 'pushed' to the socket. Think about notifications on your phone. A server 'pushes' these updates to your phone-- you don't have to request them. A socket connection is also used in a lot of chat applications and many `.io` games. HTTP 2.0 has a request-push model which is a stateful connection protocol.

### Additional Reading on TCP

<details>
  <summary>HTTP over TCP</summary>
  <p> HTTP operates over TCP. When we navigate to a website, a TCP connection is established at a specific port, which is almost always going to be port <code>80</code> for <code>http</code> or <code>443</code> with <code>https</code>. </p>
  <ul>
    <li>https://www.diffen.com/difference/TCP_vs_UDP</li>
    <li>https://www.quora.com/Why-does-Netflix-use-TCP-and-not-UDP-for-its-streaming-video</li>
  </ul>
</details>

### Requests (5 min, 10:30)

Requests are actual entities in HTTP. They have a location or **URL**, like `google.com/` for example, and also have a **type**, which we refer to as a request **verb**. 

A request also has a specific structure, containing a header and body.

#### Request Verbs

Whenever we navigate to a website, we are making a `GET` request. When we navigate to google we are making a `GET` request to `https:/www.google.com/`. Most of the time we are using the web we are using `GET` requests. 

[This is a fairly comprehensive list of the HTTP request verbs](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods)

#### CRUD (10 min, 10:40)

CRUD is an acronym for operations involving data: ***Create, Read, Update, and Destroy***. These CRUD actions involve the server application interacting with the database to retrieve and/or change data.

CRUD is simply the set of features of an application that involve seeing and changing data. It is often how developers conceptualize reading and writing data in web applications, especially ones that involve a server persisting data in a database. We will be repeatedly implementing CRUD functionality in our apps during this course.

|CRUD   |  Verb   |URL Path examples|Database Action|
|-------|---------|-----------------|--------------|
|READ   |GET      |  `/tacos`       | Retrieve data|
|CREATE |POST     |  `/tacos`       | Create new data|
|UPDATE |PUT/PATCH|  `/tacos/6`     | Update existing data|
|DESTROY|DELETE   |  `/tacos/7`     | Delete existing data|

> Assume /tacos/6 refers to one variety of taco (e.g. carne asada) and /tacos/7 refers to another variety of taco (e.g. grilled cactus)

#### Request & Response Headers & Bodies (5 min, 10:45)

[This is a fairly comprehensive list of the HTTP header fields](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields)

The header will contain meta-data, type of content the request body contains, authentication data related to logins, cookies, the status code (like `200`, `404` `500`, `418`) and many other things.

The request body will contain the 'payload' or the information to be transmitted, such as information from a form. Responses have headers and bodies as well and could contain the page or data requested, an error display page, etc.

![Request Response Image src: http://www.oreilly.com/openbook/webclient/ch03.html](assets/request-response.gif)

Now that we've taken a closer look at the concerns of a web server application, let's talk about NodeJS, which will help us run server-side code.

-->

## What is Node? (5 min, 0:20)

Server-side JavaScript was implemented years ago in 1995 as Netscape's 'LiveWire' but never took off. Also Netscape died. Until recently, the concept of server-side JavaScript had been abandoned.

Since 2009, NodeJS has allowed us to run our code independently of the browser. Node is an application runtime environment that runs inside the V8 JavaScript engine, just as Chrome does. However, Node is specialized to handle functions that are unique to servers. Just as the browser environment provides methods to interface with websites (like working with the DOM), Node provides an environment useful for servers (like reading and writing files, and http requests). 

NodeJS is JavaScript, but it runs on the server. When you're writing node, you're writing javascript. Node runs in a system environment (in this case, your laptop is acting as the server) as opposed to running in chrome, or firefox or whatever browser. 

NodeJS is packaged up into modules. Let's create our first node project.

## You Do: Your First Node Application (10min, 0:30)

### Directions

1. Navigate to your `sandbox` or another directory of your choosing.
2. Create a new directory called `hello-node` and `cd` into it.
3. Run `npm init` and answer each of the questions.
4. Type `ls`. What has changed? Remember you can use the `cat` command to print the contents of a file to the CLI.
5. Create a file called `index.js` and edit it in your text editor.
6. Console log 'hello world'.
7. Create an array with at least three items, assign it to a variable, and console log it.
8. Create an object with at least two properties, assign it to a variable, and console log it.
9. In your command line and enter the command `node index.js`. Make sure you're in the same directory as the file you're trying to run.

### Review

1. What did `npm init` do?
2. What file(s) appeared? What were the contents?
3. How did the `node` command work?

## We Do: Modules and Dependencies (15 min, 0:45)

1. On the command line, in our node project directory run...

```sh
 $ npm install lodash
```

2. In `index.js`...
```js
const _ = require('lodash')

const variousBrownBears = [
  "Atlas bear",
  "Bergman's bear",
  "Blue bear",
  "Eurasian brown bear",
  "European brown bear",
  "Gobi bear",
  "Grizzly bear",
  "Himalayan brown bear",
  "Ussuri brown bear",
  "Kamchatka brown bear",
  "Kodiak bear",
  "Marsican brown bear (critically endangered)",
  "Mexican grizzly bear",
  "East Siberian brown bear",
  "Syrian brown bear"
]

const randomBear = _.sample(variousBrownBears)
console.log(randomBear)
```

3. Next, let's create a new file called `bears.js` and add the array of brown bears, removing from `index.js`.

Add the following to bears.js...

```js
module.exports = variousBrownBears
```

4. Then, in `index.js` add...

```js
const variousBrownBears = require('./bears')
```

5. Run `node index.js` from the command-line.

## We Do: Build Your Own Node Package (30 min, 1:15)
[NPM Resume](https://git.generalassemb.ly/dc-wdi-node-express/npm-resume)


<!-- ## I Do: Building a Basic Server (30min, 12:30) -->
## Break (10 min / 1:25)

<!-- [Node Server from Scratch](https://git.generalassemb.ly/dc-wdi-node-express/node-server-from-scratch) -->
## We do: Reading and writing files (45 min / 2:10)

Because is a server-side language we can do all kinds of neat things with reading and writing files, accessing folders on our computer, running processes, responding to HTTP requests, and all kinds of other things.
Today we're just going to write to and read from a file in the current directory.

### Write to a file

* Create a new folder in your `wdi/sandbox` directory. Call it `nodefiles`
* `cd` to `nodefiles` and create a file called `index.js`

Let's look at the API docs for [fs.writeFile](https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback) as reference.


```js
const fs = require('fs')

// fs is the node filesystem module. we're importing it from the node standard library which is always in scope

fs.writeFile('./file.txt', 'hello world', (err) => {
  if(err) {
    console.error(error)
  }
  else {
    console.log('done')
  }
})
```
Let's break this down.

* We first import fs, and save it to a variable using `require()`.
* the first argument is the path to the file we want to write.
* the second argument is the data we want to write - in this case just a string that says `hello world`.
* the last argument is the `callback` function, or a function that runs when the writing is complete.

Go ahead and run this file in your terminal by typing `node index.js`. What happened?

### Read from a file

Awesome, so we have written some data to a file. How can we get the contents of it?

Comment out the writefile function call and add this below:
```js
fs.readFile('./file.txt', 'utf8', (err, data) => {
  if(err) {
    console.error(err)
  }
  else {
    console.log(data)
  }
})
```

This looks very similar to the writefile syntax, but with some different arguments.

* argument 1 is the path to the file we want to read.
* argument 2 is the `encoding` of the file. If you don't specify the encoding, what happens?
* argument 3 is the callback function again - it takes two arguments - error and data.

This is great and all, but can't we do more than hello world? Why yes, yes we can.


### Parsing + Stringifying JSON

Enter JSON - [Javascript Object Notation](https://en.wikipedia.org/wiki/JSON). It's a format that looks very similar to javascript objects, so it's easy to read and write by hand (if we want to).

Let's create a plain old javascript object in our `index.js` file.

```js
let pojo = {
  animal: false,
  name: 'peter obvarious jones otlewski',
  password: 'shenanigan174',
  hobbies: ['reading', 'writing', 'snowboarding', 'cat petting']
}
```

Now we have a nice regular JS object. Let's turn it into a JSON string.

```js
let jsonString = JSON.stringify(pojo)
```

If we console log `jsonString` we will see something like this:

```
{"animal":false,"name":"peter obvarious jones otlewski","password":"shenanigan174","hobbies":["reading","writing","snowboarding","cat petting"]}
```

Now we can take this and write it into the file.

> Why can't we just write a javascript object directly to the file?

Comment out the readfile function and uncomment the writefile. Move it below the object declaration. Then, swap out `'hello world'` with the `jsonString` variable.

Now your whole file should look something like this:

```js
const fs = require('fs')

// fs.readFile('./file.txt', 'utf8', (err, data) => {
//   if(err) {
//     console.error(err)
//   }
//   else {
//     console.log(data)
//   }
// })

let pojo = {
  animal: false,
  name: 'peter obvarious jones otlewski',
  password: 'shenanigan174',
  hobbies: ['reading', 'writing', 'snowboarding', 'cat petting']
}

let jsonString = JSON.stringify(pojo)

fs.writeFile('./file.txt', jsonString, (err) => {
  if(err) {
    console.error(error)
  }
})
```

Run the script again in your terminal, and check the results in file.txt

## You do: Modifying a json file (20 min / 2:30)

Let's combine everything we've just covered.

The objective here is to be able to read the contents of a file, parse that into json, modify the object in some way, and then write the changes back to the file. 
Use fs.readFile, fs.writeFile, JSON.stringify, and JSON.parse to accomplish your task.

Because readfile and writefile are asynchronous, this may not be as straightforward as you think.

Try putting writeFile inside of the readFile callback, to ensure it happens in the correct order. 

