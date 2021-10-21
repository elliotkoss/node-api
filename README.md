# Node API Template

### Latest Version - v0.0.2 - Oct 20, 2021

### Notes

#### To Do

1. Add nodemon to Docker so that docker doesn't require a start and stop every time.

2. Figure out where the console.log output is sent. I don't see it in the terminal when the API is running. This will also help with errors / issues since at the moment, if an image fails to be run as a Docker container, you have to look at the logs of the container versus seeing some message immediately in a console.

2. Run this set-up from a clean machine to identify any updates to the ReadMe since there may need to be some other Node install required.

3. Remove any unnecessary Node packages.

4. Clarify the name of <run container ID> in the Docker Troubleshooting section.

#### v0.0.2 - Oct 20, 2021

Added a docker container to begin preparing to add a database. I haven't figured out nodemon for Docker (ie your changes automatically refresh the server), but that will be added.

# Getting Started

This is a Node JS API using Express for routes, Auth0 for security, and Axios to execute a third-party API call built within a Docker container. I've included the Docker commands I use, but you may need to brush up on others. [Add Link]

In general, the naming should be intuitive, where you would say, 'get this endpoint data' or 'post data to this endpoint'.

Feel free to use this as a starting point when building your own API.

### Using Docker

1. In Visual Studio Code (or navigate to the directory), build the image using this command. It will build the server image from the directory and tag your image so that you can identify it if needed.

    `docker build . -t <user/node-api>`

2. Then run this command to create a detached Docker container from the image and connect your localhost:5000 port to the 8080 port in the Docker container (which you'll notice is referenced as the default port in index.js).
    
    `docker run -p 5000:8080 -d test1/node-web-app`

3. Go to localhost:5000. You should see 'Hello World'. If you do not, you may need to troubleshoot. More on that below in 'Troubleshooting'.

4. When you're ready to stop your docker container, you need to first determine the container's ID. Enter:

    `docker ps`

5. You should see the name of your Image along with a Container ID. Use the Container ID in the next command to stop the container:

    `docker stop <Container ID>`

### NOT Using Docker, Instead Running From Your Machine

Do NOT use these steps if you're also using Docker.

1. In Visual Studio Code (or navigate to the directory), run `nodemon index.js`.

2. Go to localhost:8080 (notice that this is a DIFFERENT PORT). You should see 'Hello World'. If you do not, you may need to troubleshoot. More on that below in 'Troubleshooting'.

3. When you're ready to stop the API, use CTRL + C.

### Testing API Calls

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

# Troubleshooting

### Docker

If the Docker container is not created in Step 2 of 'Using Docker', then you may need to use some other Docker commands to determine what's going on.

- When you execute the `docker run` command, you will receive an output. I'm not 100% on the name, but let's call the output the 'run confirmation ID'. If you run this next command with that ID, you'll see an output of the script that's being run. If there is an error in your code, you'll find it there.
        
    `docker logs <run confirmaton ID>`

Having an issue with localhost not working.

- Double check that you have input the port correctly. You have to use port 5000 (or whatever you input in the Docker command), and you have to make sure you don't change any of the port 8080 references in the file. The 8080 port allows the app to move data in/out of the container at port 8080 while port 5000 is the port on your local machine that connects to Docker. So you have to use port 5000.

### Not Using Docker

Having an issue with localhost not working.

- Double check that you have input the port correctly. You have to use port 8080 (unless you changed the port value in the API). The 8080 port allows the API to move data in/out of the app server on your local machine. So you have to use port 8080. This is a completely different experience than using Docker.

# Contact Me

Feel free to reach out on Twitter, @elliotkoss. DMs open.

# Donations

I intend to always keep this freely available, but if you'd like to send a donation, I'd be much appreciative.

ETH: elliotkoss.eth (ETH only set-up for this ENS - adding more wallets later)

Venmo: @Elliot-Koss

Cash App: $elliotkoss1

# Version History 

#### Note to self

Use `npm i --package-lock-only` to update the package-lock version before releasing.

#### v0.0.1 - Oct 17, 2021

Hello World! I built a Node JS API using Express for routes, Auth0 for security, and Axios to execute a third-party API call. I watched this [great Node tutorial](https://www.youtube.com/watch?v=pKd0Rpw7O48), read the Auth0 docs, and then used Postman's sample Node code plus some Googling to determine Axios was the right library for API calls.
