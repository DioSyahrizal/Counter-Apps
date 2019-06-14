# Simple Redux-saga with React-Typesript

## Table of Contents

- [Introduction](#introduction)
- [Why Using This Stack](#why-using-this-stack)
- [Description and Flow of the Project](#description_and_flow_of_the_project)
- [How to Run](#how_to_run)
- [References](#references)

## Introduction

This is a simple app with the CRD Function, it doesn't have a Update function because we not use the form :). We manage the state with Redux, and use middleware for Redux using Redux Saga

## Why Using This Stack?

### React with TypeScript
Don't worry guys you will enjoy using it. This is the example of benefit using Typescript :

- TypeScript simplifies JavaScript code, making it easier to read and debug.
- TypeScript is open source.
- TypeScript provides highly productive development tools for JavaScript IDEs and practices, like static checking.
- TypeScript makes code easier to read and understand.
- With TypeScript, we can make a huge improvement over plain JavaScript.
- TypeScript gives us all the benefits of ES6 (ECMAScript 6), plus more productivity.

[Check the article in this page for the detail](https://dzone.com/articles/what-is-typescript-and-why-use-it)

### Redux and Redux Saga
The problem we facing later in development app in React is you will confuse to manage the state. It's possible to passing the state to props, but if you have a lot of component it's gonna be messing your project. The solution for this problem is you can use a state management. Aaand redux is a state management and a pretty popular ones! So we can use it :D

Redux-saga is a redux middleware library, that is designed to make handling side effects in your redux app nice and simple. It achieves this by leveraging an ES6 feature called Generators, allowing us to write asynchronous code that looks synchronous, and is very easy to test.

### Description and Flow of the Project
The idea of the project is we will use redux for manage our state such as counter and result globally. And we gonna using a simple REST API. Check this [repo](https://github.com/DioSyahrizal/counter-server) for using REST that i build.

Redux-Saga will be a middleware that can manage fetch, store, and delete from the API to our project.

## How to Run
Install the package first
### `yarn install`

Run the apps in development mode (Make sure the server is running first)
### `yarn start`

Run apps in production
### `yarn build`


## References
Great article about [Redux-Saga](https://engineering.universe.com/what-is-redux-saga-c1252fc2f4d1)

Writer: [Dio Syahrizal](https://github.com/DioSyahrizal)


