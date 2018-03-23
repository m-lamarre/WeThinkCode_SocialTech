# Social Tech Project

## Prerequisites

* Install Brew
* Install MongoDB
    * URL: *https://treehouse.github.io/installation-guides/mac/mongo-mac.html*
    * SECTION: **'Install and Run MongoDB by Downloading it Manually'**
    * Stop before creating the data directory
* `mkdir ~/mongoData`
* `export PATH=$PATH:$HOME/mongodb/bin`
    * Add the above command to your **~/.zshrc** file
* `mongod --dbpath ~/mongoData`
    * You should see a lot of text & "**waiting for connections on port 27017**" at the end
* Install React-Native
    * URL: *https://facebook.github.io/react-native/docs/getting-started.html*
    * SECTION: **'Building Projects with Native Code'**
    * Change the Target OS to **'Android'**

**Note: you should already have everything installed to run iOS, if not, just change the target and read through it.**

## Projects

### API
* Navigate to API Directory
* `npm install` to install all the dependencies
* `npm run dev` **(Note: it will fail if mongodb hasn't been started.)**

### React-Native Apps

#### This should be the same for both the QR_Generator & QR_Scanner

* `npm install`
* `react-native run-ios`

**Note: to run on android, you need to have a running emulator. Then call** `react-native run-android`

## The Team

* Owen Exall - who was incharge of building the QR Scanner & the QR Code Generating apps 
* Robert Jones - who was our business liaison and in charge of the business model
* Miriam Lamarre - who was in charge of design, mock-ups, front end and the presentation
