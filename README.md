# Adobe Target On Device decisioning demo site

> This is a demo site intended to showcase the On Device Decisioning capabilities of Adobe Target. The Source code and Design patterns used are not production ready and hence should be cautious if you copy code.

## Installation

* Download/Clone this repo.
* Run `npm install` on the terminal to install all the dependencies.
* The Application will be running in port 3006, if you wish to change the port, you must change now in `src/config/server.js`
* if you change the port, ensure you build again by executing `npm run build-server`
* Run `npm run start` on the terminal to start the application.
* Open http://localhost:3006/ to see the demo site.

## Customization

* Ensure you have stopped the server by terminating the process running in the terminal. (Closing the terminal will not end the server process)
* You can change the Target Client Code and IMS Org in `src/config/target/js` to connect to your Target Account.

## Understanding the On Device Setup Code

* You can look at the `server/index.js` to see how Target Node SDK is initialized and configured.
* This demo site uses React Context API to send the Target JSON offers to all the components. You can customize it according to your design.
* There are several pages where Adobe Target is used for decision making and rendering content. A simple implementation can be found in `containers/ProductList.jsx`. A screenshot of the same can be seen below.
  ![Consuming Target JSON Offers](/public/assets/images/screen_consumer_code.png).
* To see all the active Adobe Target campaigns on the demo site, you can execute `sessionStorage.setItem("showTarget", true)` on your browser's developer console and do a hard refresh of the website. Now you will see a button (screenshot below) labelled "Click here to see Target Activity information" on areas which are controlled by Adobe Target. Clicking on the button will reveal the Activity and JSON offer details. The experience qualified will be highlighted with a green border.
![Consuming Target JSON Offers](/public/assets/images/screen_activitydetails.png).


## Contributing

Contributions are welcomed! Read the [Contributing Guide](./CONTRIBUTING.md) for more information.

## Licensing

This project is licensed under the MIT License. See [LICENSE](./LICENSE.md) for more information.
