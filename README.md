[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Intro to Node and NPM

Learn about server-side JavaScript with Node and NPM.

## Prerequisites

* JavaScript
* Command line
* Have Node and NPM installed

## Objectives

By the end of this, developers should be able to:

* Identify and discuss high-level differences between server-side and
    client-side JavaScript
* Import and export Node modules
* Use npm to install and manage dependencies in projects and globally
* Publish an npm module to the npm registry

As a bonus, if there is time, we will discuss building a basic server
application from scratch using Node.

## Introduction

Today, we're going to embark on the next leg of our journey in learning full
stack web development. So far we've just learned to write client-side JavaScript
that is loaded into our browsers via an HTML file. There hasn't been a server
involved at all, yet.

If we're not writing JavaScript *for* our browsers to run, then what exactly are
we writing it for? You may have heard that node is server-side JavaScript,
but why and how are we concerned with servers as web developers?

### Turn and Talk

Turn to your neighbor and discuss the following questions:

* In plain English, what does a server do?

## The Role of the Server

The server provides as much functionality as we want it to. That can mean
performing really resource-heavy computation (like with large amounts of data),
reading and writing from a database, or responding to a request.

You don't want to do heavy-lifting in the browser, especially when dealing with
mobile devices, because those heavy-lifting tasks will require a lot of
resources. So, we put that code on the server.

In web development, the most common job of a *server* is to **respond** to
*client* **requests**.  If a server application receives a request it can't
fulfill, it still provides a response.  If a server doesn't respond with
anything, we'll assume that it is down or that something has gone wrong with our
connection.

![client-server](./assets/client-server.png)

There is a 'contract' between servers and clients where a *client makes requests
to a server* and the *server responds to the request*. This is a paradigm known
as [request-response](https://en.wikipedia.org/wiki/Request%E2%80%93response).
The rules laid down by this paradigm enforce a standard baseline for a reliable
internet we've all come to enjoy.

In a practical sense, every time you visit a website (like `http://google.com`)
you're seeing what's been requested and returned from a server.

So far, all our applications have run entirely in the browser. We did deploy
them, so users could use our applications from anywhere. But, the code for our
application was only executed in their browser, with no connection to anyone
else using our application. Very, very few applications work like that in the
real world.

So how do we make applications in such a way that different users can interact
with each other through them from different clients?

We use a server!

## What is Node?

Node is a server-side runtime of JavaScript.

What does that mean? To answer that, we have to rethink our understanding of
JavaScript.

Most programming languages have different versions of the language. As new
features are rolled out, they are released in a new version of the language.
JavaScript has this as well, but is unique in that JavaScript is run in multiple
different environments. So there isn't just one "JavaScript", there are many.

The implementations of JavaScript are different in different browsers, i.e. the
language is different in Chrome, Fire Fox, Internet Explorer, etc. Each
implementation follows the same specification, which is maintained and updated
by a central committee called TC39, but each vendor is in charge of their own
implementation.

While nowadays, these implementations are largely standardized, there are still
some differences. For instance, the `forEach` method is implemented on NodeLists
in all major browsers except Internet Explorer!

[Node](https://nodejs.org/), then, is just another implementation of the
JavaScript specification.

What's important about Node, though, and what makes it a little different from
the browser implementations, is that it is aimed at running JavaScript in
a server environment, not a browser!

That means there are some practical differences in how we write JavaScript in
Node versus for a browser. It also means there is a lot of server specific
functionality that will only work in Node.

### [Seeing the Difference](https://git.generalassemb.ly/dc-wdi-node-express/browser-server-js)

Let's explore the similarities and differences between JavaScript in the browser
(which you're already familiar and comfortable with) and on the Server (what
we're learning now). Work through [this
exercise](https://git.generalassemb.ly/dc-wdi-node-express/browser-server-js)

## Your First Node Application

We're going to explore working with Node and npm in our `sandbox` directory.

### Instructions

1. Navigate to your `sandbox`
1. Create a new directory called `hello-node` and `cd` into it.
1. Run `npm init` and answer each of the questions.
1. Type `ls`. What has changed? Remember you can use the `cat` command to print
   the contents of a file to the CLI.
1. Create a file called `index.js` and edit it in your text editor.
1. Console log 'hello world'.
1. Create an array with at least three items, assign it to a variable, and
   console log it.
1. Create an object with at least two properties, assign it to a variable, and
   console log it.
1. In your command line and enter the command `node index.js`. Make sure you're
   in the same directory as the file you're trying to run.

**Review Questions:**

* What did `npm init` do? Why did we have to run it?
* What file(s) appeared? What purpose did they serve?
* What does the `node` command do?

## Working with Modules and Dependencies

We use npm and the `package.json` file it creates to manage our project. Most
importantly, we use it to manage **project dependencies.**

Dependencies are modules or libraries of code, separate from our application,
that our application relies on in order to function. It's a way for us to reuse
code, either written by ourselves or someone else.

### Instructions

> Still in your `hello-node` directory

1. In the command line, in your project directory, run:

```sh
npm install lodash
```

2. In `index.js`:

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

3. Next, let's create a new file called `bears.js` and add the array of brown
   bears, removing it from `index.js`.

Add the following to `bears.js`:

```js
module.exports = variousBrownBears
```

4. Then, in `index.js` add the following:

```js
const variousBrownBears = require('./bears')
```

5. Run `node index.js` from the command-line.

**Review Questions:**

* In your own words, describe what we just did

## Working With the File System

One of the key advantages to working on the server is being able to work with
the file system. Working with the file systems is especially handy if we're
using Node to build command line applications, which we can do because Node is
not confined to the browser!

Node comes with a module, called
[`fs`](https://nodejs.org/dist/latest-v10.x/docs/api/fs.html), for working with
the file system.

### Set up

1. Create a new folder in your `wdi/sandbox` directory, call it `node-fs`
1. `cd` into `node-fs` and create a file called `index.js`

### Write to a file

We'll start by exploring how to create (i.e. write) files using Node. The method
for doing so is part of the `fs` module and is called `writeFile`. 

> Documentation for
> [fs.writeFile](https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback)

Update your `index.js` file with this code snippet:

```js
const fs = require('fs')

// fs is the node filesystem module. We're importing it from the node standard
// library, which is always in scope

fs.writeFile('./file.txt', 'hello world', (err) => {
  if(err) {
    console.error(error)
  } else {
    console.log('done')
  }
})
```
Let's break this down:

1. We first import `fs`, and save it to a variable using `require()`
1. The first argument is the path to the file we want to write
1. The second argument is the data we want to write. In this case, just a string
   that says `hello world`
1. The last argument is a `callback` function, or a function that runs when the
   writing is complete

Go ahead and run this file in your terminal by typing `node index.js`.

#### Turn & Talk

Turn and discuss what just happened with your neighbor.

### Read From a File

So, we've written some data to a file. How can we get the contents of it?

Comment out the code to for `writeFile` and add the following below:

```js
fs.readFile('./file.txt', 'utf8', (err, data) => {
  if(err) {
    console.error(err)
  } else {
    console.log(data)
  }
})
```

This looks very similar to the `writefile` syntax, but with some different
arguments:

1. Argument 1 is the path to the file we want to read
1. Argument 2 is the `encoding` of the file. If you don't specify the encoding,
   what happens?
1. Argument 3 is the callback function again. It takes two arguments: `error`
   and `data`.

This is great and all, but can't we do more than hello world? Why yes, yes we can.

### Parsing & Stringifying JSON

Enter JSON: [JavaScript Object Notation](https://en.wikipedia.org/wiki/JSON).
It's a format that looks very similar to JavaScript objects, so it's easy to
read and write by hand (if we want to).

Let's create a plain old JavaScript object in our `index.js` file:

```js
let pojo = {
  animal: false,
  name: 'peter obvarious jones otlewski',
  password: 'shenanigan174',
  hobbies: ['reading', 'writing', 'snowboarding', 'cat petting']
}
```

Now we have a nice regular JavaScript object. Let's turn it into a JSON string:

```js
let jsonString = JSON.stringify(pojo)
```

If we console log `jsonString` we will see something like this:

```js
{"animal":false,"name":"peter obvarious jones otlewski","password":"shenanigan174","hobbies":["reading","writing","snowboarding","cat petting"]}
```

Now we can take this and write it into the file.

Comment out the `readfile` function and uncomment the `writefile`. Move it below the
object declaration. Then, swap out `'hello world'` with the `jsonString`
variable.

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

Run the script again in your terminal, and check the results in `file.txt`.

## [Build Your Own Node Module](https://git.generalassemb.ly/dc-wdi-node-express/npm-resume)

Let's build off of our work with `fs` and JSON and build out your resume as
a node module and publish it to the npm registry! Work through [this
repository](https://git.generalassemb.ly/dc-wdi-node-express/npm-resume).

## Additional Resources

* [Node.js Documentation](https://nodejs.org/en/)
* [W3 Schools: Getting Started with
    Node](https://www.w3schools.com/nodejs/nodejs_get_started.asp)
* [Rising Stack](https://blog.risingstack.com/) - A really great resource for
    Node

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
