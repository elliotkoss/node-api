# Node API Template

### Latest Version

v0.0.1 - Oct 17, 2021

### Notes

Hello World! I built a Node JS API using Express for routes, Auth0 for security, and Axios to execute a third-party API call. I watched this [great Node tutorial](https://www.youtube.com/watch?v=pKd0Rpw7O48), read the Auth0 docs, and then used Postman's sample Node code plus some Googling to determine Axios was the right library for API calls.

### Clean-up

1. Run this set-up from a clean machine to identify any updates to the ReadMe since there may need to be some other Node install required.

2. Remove any unnecessary Node packages.

# Getting Started

This is a Node JS API using Express for routes, Auth0 for security, and Axios to execute a third-party API call.

In general, the naming should be intuitive, where you would say, 'get this endpoint data' or 'post data to this endpoint'.

Feel free to use this as a starting point when building your own API.

1. Run `nodemon index.js`.

2. Use Postman to check each of the API URLs. The responses should be intuitive:

    a.  GET http://localhost:3000/
    b.  GET http://localhost:3000/api/courses
    c.  POST http://localhost:3000/api/courses
            raw -> JSON input for the post
            {
                "name": "coursea 1"
            }

            TIP: Rerun 2.b to confirm value was added
    d.  GET http://localhost:3000/api/courses/1
    e.  PUT http://localhost:3000/api/courses/1
            raw -> JSON input for the post
            {
                "name": "coursea 1"
            }

            TIP: Rerun 2.b to confirm value was updated
    f.  DELETE http://localhost:3000/api/courses/1
            TIP: Rerun 2.b to confirm value was deleted
    g.  GET http://localhost:3000/api/hipster-ipsum
            This is an example of a third-party API fetch and response.

3. To add Auth0, which enforces security credentials, you'll need to follow some tutorials first. If this is your first time, go ahead and do some reading since security is important and understanding what you're doing will save hours of frustration later.

    a. Tutorials
        i.      https://auth0.com/docs/quickstart/backend/nodejs/01-authorization
        ii.     https://auth0.com/docs/quickstart/backend/nodejs/02-using
        iii.    https://auth0.com/docs/get-started/create-apps/machine-to-machine-apps
    b. Validate set-up
        GET http://localhost:3000/secure
            header->Authorization (Bearer token as noted in the tutorial 3.a.ii above)

# Contact Me

Feel free to reach out on Twitter, @elliotkoss. DMs open.

# Donations

I intend to always keep this freely available, but if you'd like to send a donation, I'd be much appreciative.

ETH: elliotkoss.eth (ETH only set-up for this ENS - adding more wallets later)
Venmo: @Elliot-Koss
Cash App: $elliotkoss1
