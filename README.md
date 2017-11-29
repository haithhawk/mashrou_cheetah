
# :confetti_ball::confetti_ball:Mashrou_Cheetah:confetti_ball::confetti_ball:

## Build from scratch a front and back-end system that utilises Google Maps geolocation (on-click event) to retrieve news and other data relevant to location

Building on acquired knowledge from previous study weeks as part of Founders & Coders, where we focused on front and back-end topics. In this project we are taking a more holistic approach and putting the user experience centre stage. The objective we need to hit can be found in the objectives section at the bottom.


#### WHO :busts_in_silhouette:
 - <a href= "https://github.com/ghassanmas/ghassanmas.github.io">Ghassanmas</a>

 - <a href=
 "https://github.com/NickP123">NickP123</a>

 - <a href= "https://github.com/haithhawk/">Haithhawk</a>

 - <a href= "https://github.com/prodionov/prodionov.github.io">Prodionov</a>



#### WHY :key:

This was a project to extend our team experience with using APIs, making calls from the backend and putting that together with a well written and styled front-end.


#### WHAT	:loudspeaker:
A application that will provide location based news from the New York Times based on a click event within Google maps.

#### HOW :wrench:
We Whiteboarded our ideas and then split our project as follows. For details on system-architecture please see below for the relevant section.

Front-end
- index.html
- Public - containing:
- style.css,
- dom.js,
- logic.js

Back End
- src - containing:
- server.js,
- router.js,
- apihandler.js (to API),
- statichandler.js (from API) ,
- filter.js

The chain of events were to take place as follows

- 1 Click event in Google Maps
- 2 Event listener for 'on-click' event
- 3 XHR/server static server Request
- 4 Request sent to GPS to address API
- 5 Data manipulated and sent to NYT API
- 6 Response with required data
- 5 Dom Manipulation / filtering of data in API Handler
- 6 Rendering of information back to user

#### Instructions for using the website:
- Click the weblink in the title of the repo. Then...

- 1) Click anywhere on the Google Maps Screen.
- 2) The click event will trigger the rest of the User experience


----------------------------------


##### SYSTEM ARCHITECTURE / PLAN

![img_6131](https://user-images.githubusercontent.com/25667270/33375234-f0b7b202-d511-11e7-9210-2910ec98566d.jpg)


###### STEP 1
- Whiteboard ideas and user experience
- Research suitable APIs to achieve user objectives
- Readme outline
- Setup of project and folders
-
- outline front-end folders
- outline back-end folders
- create servers
- create basic route paths

###### STEP 2
- Set up google API on click integration
- complete DOM handler for static information
- Trouble-shoot Google Maps API gps data
- Setup feeding in GPS data to additional API to return an address
- Consider testing structure

###### STEP 3
- Complete index.js (XHR requests)
- TBC
- TBC
- TBC
- Update README
- upload to cloud server
- Review code between team members to ensure understanding

----------------------------------
##### PROJECT OBJECTIVES

- 1 Use at least 1 API

- 2 Make your API calls from the back-end using the Request module (or one you build yourself)

- 3Your server should contain a minimum of 2 routes

- 4 We expect back-end testing using tape (test as many components as you can) and basic front-end testing.

- 5 Test your server by injecting fake HTTP requests using Shot.

- 6 Host your project on heroku, see resources

- 7 Use module.exports and require to break a single large server file into smaller modules.

- 8 Consider a good server file structure based on what we have discussed over the week.

- 9 Employ continuous intergration on your project with Travis or a similar tool. (If you decide to use Travis, we strongly recommend that you host this project in your own repo rather than in your cohort's FAC repository to avoid all builds getting queued together)

- 10 Use CodeCov or a similar tool for test coverage.

- 11 Display continuous intergration and code coverage badges on your project README.

- 12 Ensure that errors are handled, if for example a user attempts to make a request to a non-existent route to your server, provide the user with a custom response.

- 13 Include a user input field on your web app and include server-side validation to protect your server from potentially malicious user input.
