# ServiceNow - Mass Mail application in React

This is a mass mail application built utilising the following packages: React, ReactDOM, React Router and Axios. This application uses Axios to post and get records from a ServiceNow instance. It provides a user interface and backend configuration/customisation to allow users to send a mass mail to users for a specific user criteria.

Based on [Create-React-App] (https://github.com/facebook/create-react-app).

## How to set up your development environment

You need to complete 4 steps so you can start bulding a React applicaiton for ServiceNow:

1. Commit the update set: ServiceNow Mass Mail Update Set.xml to your ServiceNow instance
2. Copy this repo to your local machine and run `npm install` to install all dependencies.
3. Update `package.json` (line #5) with your ServiceNow instance URL:
```json
    "proxy":"https://devXXXXX.service-now.com"
```
4. Update `.env` file with user credentials you want to use for communications wtih ServiceNow:
```bash
    REACT_APP_USER=servicenow.account
    REACT_APP_PASSWORD=servicenow.password
```

This completes development environment setup and you can run the application by `npm start`.

> User name and password required for development environment only. You don't need to provide credentials when deploying the app into ServiceNow.

## ServiceNow deployment
To deploy the application into ServiceNow you need to perform the following steps:
1. Commit the update set: ServiceNow Mass Mail Update Set.xml to your ServiceNow instance
2. Build the application by executing `npm run build`.
3. Save JS and CSS files from Build folder as _Style Sheets_ in ServiceNow.
4. Save HTML file from Build folder as a UI page. Update references to JS/CSS correspondingly.

You can find more details in [this article](https://medium.com/@pishchulin/react-application-in-servicenow-8bdbb1e69c0c).

## Screenshots
1. Mass Mail Home
![Mass Mail Home](http://oi66.tinypic.com/2n9j2j4.jpg "Mass Mail Home")

2. Compose Mass Mail
![Compose Mass Mail](http://oi63.tinypic.com/2cnb441.jpg "Compose Mass Mail")

![Sent Mass Mail](http://oi66.tinypic.com/2ytnw43.jpg "Sent Mass Mail")

3. View Mass Mails
![View Mass Mails](http://oi64.tinypic.com/oic2fd.jpg "View Mass Mails")
