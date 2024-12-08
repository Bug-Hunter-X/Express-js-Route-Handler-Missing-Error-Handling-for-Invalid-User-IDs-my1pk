# Express.js Route Handler Missing Error Handling for Invalid User IDs

This repository demonstrates a common error in Express.js route handlers: missing error handling for invalid user IDs.  The `bug.js` file shows the flawed code, while `bugSolution.js` provides a corrected version.

The problem occurs when the route handler attempts to access an array element using an invalid or out-of-bounds user ID.  This can lead to unexpected behavior or even crashes. The solution incorporates robust error handling to gracefully handle these scenarios.

## How to reproduce the bug:

1. Clone the repository.
2. Run `npm install express` to install the necessary dependency.
3. Run `node bug.js`.
4. Send a request to `/users/invalid_id` or `/users/100` (assuming the `users` array has fewer than 100 elements).

You'll likely encounter an error or unexpected behavior depending on your Node.js version and the specific issue encountered.

## Solution:

The `bugSolution.js` file demonstrates a corrected version of the code.  It includes error handling to check for valid input and gracefully handle cases where the user is not found.