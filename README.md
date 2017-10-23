# Social Tech Project

### Prerequisites

1. Install Brew
2. Install MongoDB
    1. URL: https://treehouse.github.io/installation-guides/mac/mongo-mac.html
    2. SECTION: 'Install and Run MongoDB by Downloading it Manually'
    3. Stop before creating the data directory.
3. RUN '**mkdir ~/mongoData**'
4. RUN '**export PATH=$PATH:$HOME/mongodb/bin**'
    1. Add the above command to your **~/.zshrc** file.
5. RUN '**mongod --dbpath ~/mongoData**'
    1. You should see a lot of text & "**waiting for connections on port 27017**" at the end.
6. Install React-Native
    1. URL: https://facebook.github.io/react-native/docs/getting-started.html
    2. SECTION: 'Building Projects with Native Code'
    3. Change the Target OS to 'Android'. **Note: you should already have everything installed to run iOS,
               if not, just change the target and read through it.**

### Projects

#### API
1. Navigate to API Directory.
2. RUN '**npm install**' <-- Install all the dependencies.
3. RUN '**npm run dev**' **Note: it will fail if mongodb hasn't been started.**

#### React-Native Apps

This should be the same for both the QR_Generator & QR_Scanner.

1. RUN '**npm install**'
2. RUN '**react-native run-ios**'

**Note: to run on android, you need to have a running emulator. Then call 'react-native run-android'.**
