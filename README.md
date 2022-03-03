# Brainfuck-Math-API
A web API written in Brainfuck which calculates various mathematical operations.

It uses a basic JS server for recieving API requests and passes the request type and parameters into the corresponding Brainfuck code which handles the request and calculates it's result.

## Usage

Use NodeJS with "npm install" to install the prerequisites and then use "npm start" to start up the API.

The tests for the project can be executed with "npm test". Yes there are unit tests for this project. And yes they are also written in Brainfuck.

## Endpoints

The API uses the port 3000 for recieving requests and currently supports these endpoints for requests.

- sum (For adding two numbers together)
- subtract (For subtracting two numbers. Doesn't support negative numbers due to Brainfuck limitations)
- multiply (For multiplying two numbers. Doesn't support negative values due to Brainfuck limitations. Zero and positive numbers do work.)
