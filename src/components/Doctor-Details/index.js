import React from 'react';
import { Text, Image, RichText } from '@sitecore-jss/sitecore-jss-react';
import { Placeholder, withSitecoreContext } from '@sitecore-jss/sitecore-jss-react';


const DoctorDetails = ({ sitecoreContext, rendering, route }) => {
  return (
    <div>
      {sitecoreContext.route.fields.pageTitle && (
        <Text tag="h2" className="display-4" field={sitecoreContext.route.fields.pageTitle} />
      )}

      <img src={sitecoreContext.route.fields.headshot.value.src} />

      {/* {sitecoreContext.route.fields.headshot && sitecoreContext.route.fields.headshot.value && (
        <Image field={sitecoreContext.route.fields.headshot} />
      )} */}

      {sitecoreContext.route.fields.services && (
        sitecoreContext.route.fields.services.map((service, index) => (
          <a href="/" class="service-tag">{service.fields.pageTitle.value}</a>
        ))
      )}
      {sitecoreContext.route.fields.location && (
        <Text field={sitecoreContext.route.fields.location} tag="h3" />
      )}
      {sitecoreContext.route.fields.pageDescription && (
          <RichText className="contentDescription" field={sitecoreContext.route.fields.pageDescription} />
      )}
      <button onclick="activateLasers()">
        Make an appointment
      </button>
  
  </div>
)};

export default withSitecoreContext()(DoctorDetails);
