# CISE Assignment 1B SPEED 
Group Assignment using the MERN stack.

# Group Members
- Vinson Beduya
- Jacob Tupe
- Jose Santos

# Setting Up Backend Dev Environment
1. In the root folder, open your CLI and run `npm install`.
2. Copy .env file from [this private repository](https://github.com/justvinny/cise_assignment_1b_private_files/tree/main/backend) and paste it into the root folder locally. (Authorised Access Only)
3. Run `npm start` or `npm run dev` to start the express server. For API tests, please follow instructions from [Running API Tests](#running-api-tests).

# Running API Tests
Note: Ensure to restart the server for each time you run the tests to clear the mongodo-memory-server.

1. Open two CLI windows.
2. On the first CLI window, enter `npm run dev:mongo-mock` to run the mock server which uses mongodb-memory-server.
3. On the second CLI window, enter Enter `npm run test` to run the tests with mocha.
4. Close once finished.
