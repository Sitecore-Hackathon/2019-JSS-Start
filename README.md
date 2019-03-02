## Summary

**Category:** ```*Best enhancement to JSS to change a JSS component rendering behavior based on user's session data*```

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

* **Home page** - Shows a page hero, and content. Here, we will personalize page hero based on user's journey.

![alt text](https://github.com/Sitecore-Hackathon/2019-JSS-Start/raw/master/screenshots/homepage.png "Homepage")
<hr />

* **Services Landing** - Shows page hero, list of all services. We are using GraphQL to list down all services.

![alt text](https://github.com/Sitecore-Hackathon/2019-JSS-Start/raw/master/screenshots/services.PNG "Services Landing page")
<hr />

* **Service Page** - Shows service page and its content.

![alt text](https://github.com/Sitecore-Hackathon/2019-JSS-Start/raw/master/screenshots/service.PNG "Service page")
<hr />

* **Find a Foctor** - Shows all doctors. We list all doctors using GraphQL.

![alt text](https://github.com/Sitecore-Hackathon/2019-JSS-Start/raw/master/screenshots/findadoctor.PNG "Find a Doctor")
<hr />

* **Doctor Page** - Shows Doctor details. Each doctor provides one or more services(categories) are listed here. Patients can also  make an appointment from here. 
One possible use case of the doctor's services is - When system finds user's persona as "Transplant Patient", then while finding a doctor, we can show recommended doctors, who provide Transplant services.

![alt text](https://github.com/Sitecore-Hackathon/2019-JSS-Start/raw/master/screenshots/doctor.PNG "Doctor page")
<hr />

* **Make appointment Page** - Confirmation of doctor's appointment
![alt text](https://github.com/Sitecore-Hackathon/2019-JSS-Start/raw/master/screenshots/appointment.PNG "Make an Appointment")
<hr />

* **Homepage** - Notification to remind making an appointment. When a user visits doctor's profiles, but forgets making an appointment. Then when he comes back to the homepage, we will show a notification like this to remind user.
![alt text](https://github.com/Sitecore-Hackathon/2019-JSS-Start/raw/master/screenshots/notification.PNG "Notification for appointment")
<hr />

* **Homepage** - Personalized page hero based on user persona or goals.
![alt text](https://github.com/Sitecore-Hackathon/2019-JSS-Start/raw/master/screenshots/personalized-hero.PNG "Personalized page hero")
