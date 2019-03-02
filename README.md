## Summary

**Category:** Best enhancement to JSS to change a JSS component rendering behavior based on user's session data

A healthcare provider network - **PatientCore** needs a JSS based application which helps patients to read  health care related different services articles, check doctor profiles, and making appointments.

We need to maximize personalization so that we can give better user experience to patients.

* When a patient (or a user) visits Doctor's profile, and not making an appointment, then on any later page he visits (here on Homepage), we are showing a notification to the user by suggesting help in making appoinment.

* Whenever organization launches new service, they want to highlight it more for users who actually visits those services pages. For example, if user visits Transplant service pages, then try to show transplant related content on Homepage page hero. We can do different personalization using this rule.

* When no new services launched or no campaign going on, we can also do predictive personalization by choosing right content based on user persona (which based on which services the user shows interest more)

## Pre-requisites
For checking the application basic features (without hosting on Sitecore)

* An OS supported by Node (Mac, Windows, Linux)
* Node. We recommend using the latest LTS release.
* JSS CLI

Refer for more details: https://jss.sitecore.com/docs/getting-started/quick-start


For hosting this app on Sitecore

* Windows 10, or later
* Sitecore 9.1 Initial Release (XP0). On XM, this app will work without personalization
* Sitecore JSS License
* SQL 2016
* Node (LTS version)
* JSS Server Components  (https://dev.sitecore.net/Downloads/Sitecore_JavaScript_Services.aspx)

Refer for more details: https://jss.sitecore.com/docs/getting-started/jss-server-install

## Installation

Here we will see installation of this application on Sitecore 9.1 Initial Version.

* Install Sitecdore 9.1 XP0 using SIF
* Make sure you are using Sitecore JSS license
* Install JSS Server Components. Refer: https://dev.sitecore.net/Downloads/Sitecore_JavaScript_Services.aspx
* Clone this repository in your local.
* Open PowerShell and navigate to the root folder of the repo
* Execute command npm install
* Create API Key in Sitecore to allow this JSS app to interact with Sitecore
* Setup config, and deploy code to Sitecore. Refer: https://jss.sitecore.com/docs/getting-started/app-deployment
* View your app using the domain you have chosen in jss setup.

## Usage

### We can achieve below personalizations:

* When a patient (or a user) visits Doctor's profile, and not making an appointment, then on any later page he visits (here on Homepage), we are showing a notification to the user by suggesting help in making appoinment.

* Whenever organization launches new service, they want to highlight it more for users who actually visits those services pages. For example, if user visits Transplant service pages, then try to show transplant related content on Homepage page hero. We can do different personalization using this rule.

* When no new services launched or no campaign going on, we can also do predictive personalization by choosing right content based on user persona (which based on which services the user shows interest more)


### Explaining application using screenshots

* Home page - Shows a page hero, and content

![alt text](https://github.com/Sitecore-Hackathon/2019-JSS-Start/blob/master/screenshots/homepage.png "Homepage")


* Services Landing - Shows page hero, list of all services
* Service Page - Shows service page and its content
* Find a Foctor - Shows all doctors
* Doctor Page - Shows Doctor details, and make an appointment
* Make appointment Page - Confirmation of doctor's appointment
