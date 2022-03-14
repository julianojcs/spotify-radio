# Spotify Radio

## Preview

<img src="./prints/demo.png" />

## Checklist Features

- Web API
    - [ ] Must achieve 100% code coverage in tests
    - [ ] Must have integration tests validating all API routes
    - [ ] Must deliver static files like Node.js Stream
    - [ ] Must deliver music files as Node.js Stream
    - [ ] Given a disconnected user, should not break API
    - [ ] Even if multiple commands are fired at the same time, it should not break the API
    - [ ] If an unexpected error occurs, the API should continue to work
    - [ ] The project needs to run on Linux, Mac and Windows environments

- Web App 
    - Client
        - [ ] Must play the broadcast
        - [ ] Shouldn't pause if any effects are added
    - Controller
        - [ ] Must achieve 100% code coverage in tests
        - [ ] Must be able to start or stop a broadcast
        - [ ] Must send commands to add audio effects to a stream
## Tasks

- 01: Cover service and route layers with unit tests and achieve 100% code coverage
- 02: Maintain 100% code coverage and implement e2e tests for the entire API
- 03: implement unit tests for the frontend and maintain 100% code coverage
- **PLUS**: 
    - [ ] make a new effect available
        - [ ] add a new button on the controller
        - [ ] add a new effect sound to the `audios/fx/` folder
        - [ ] repost on heroku

### Credits/Copyright to used audios

#### Transmission 
- [English Conversation](https://youtu.be/ytmMipczEI8)

#### Effects
- [Applause](https://youtu.be/mMn_aYpzpG0)
- [Applause Audience](https://youtu.be/3IC76o_lhFw)
- [Boo](https://youtu.be/rYAQN11a2Dc)
- [Fart](https://youtu.be/4PnUfYhbDDM)
- [Laugh](https://youtu.be/TZ90IUrMNCo)

## FAQ 
- `NODE_OPTIONS` is not a command recognized by the system, what to do?
    - If you are on Windows, the way to create environment variables is different. You must use the word `set` before the command. 
    - Ex: `    "test": "set NODE_OPTIONS=--experimental-vm-modules && npx jest --runInBand",`

- I ran `npm test` but nothing happens, what to do?
    - Check your Node.js version. We are using version 17. Go to [node.js website](https://nodejs.org) and download the latest version.


## Layer/folder structure
- Server
  service = everything that is business rule or processing
  controller = Intermediate the presentation layer and the business layer
  routes = presentation layer
    Obs: rotes calls the controller which calls the service. Routes never calls the service directly.
  server = responsible for creating the server (but not instantiating)
  index = instantiate the server and expose to the web (infrastructure)
  config = everything that is static of the project