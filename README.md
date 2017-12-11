# Intro to HTTP, NodeJS, and npm

## Learning Objectives
  - Describe the request/response cycle
  - Understand differences between server-side and client-side Javascript
  - Export and import JavaScript modules
  - Use npm to install and manage dependencies in projects and globally, on the local machine 
  - Build a server from scratch

## How HTTP works

HTTP stands for hypertext transfer protocol.

### Request & Response: The Role of the Server

Before we start writing our first server-side applications, let's take a moment to think about what a server does. As we know them, servers are entities that deliver or serve data and webpages to users' browsers.

Ultimately, the job of a server is to respond to client requests. If a server application receives a request it can't fulfill, it still provides a response. If a server doesn't respond with anything, we'll assume that it is down or that something has gone wrong with our connection.

What often happens when we try to access a page that doesn't exist, we usually see a familiar error code...

![GitHub Octocat on Octocatooine 404](assets/FT-404%20errors-Github.jpg.CROP.promo-mediumlarge.jpg)

The server still gives us feedback instead of no feedback at all.

There is a 'contract' between servers and clients where a client makes requests to a server, which in turn responds to each request. This is a paradigm known as [request-response](https://en.wikipedia.org/wiki/Request%E2%80%93response). The rules laid down by this paradigm enforce a standard baseline for a reliable internet that we've grown to depend on.

## What is Node?

  - JavaScript that runs in the node runtime environment
  - Is run with the same engine used by Chrome, V8

## Modules

Node JavaScript is packaged up until modules.

## npm and node_modules

## Building a Basic Server
