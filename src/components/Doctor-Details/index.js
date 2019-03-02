import React from 'react';
import { Text, Image, RichText } from '@sitecore-jss/sitecore-jss-react';
import { Placeholder, withSitecoreContext } from '@sitecore-jss/sitecore-jss-react';


const DoctorDetails = ({ sitecoreContext, rendering, route }) => {
  return (
    <div>
    <Text tag="h2" className="display-4" field={sitecoreContext.route.fields.pageTitle} />
    
        <Image
              field={sitecoreContext.route.fields.headshot}
              editable={true}
              imageParams={{ mh: 200, mw:200, ar:true }}
              height="200"
              width="200"
              className="headshot" />

        {sitecoreContext.route.fields.services && (
          sitecoreContext.route.fields.services.map((service, index) => (
            <a href="/" class="service-tag">{service.fields.pageTitle.value}</a>
          ))
        )}

        <Text field={sitecoreContext.route.fields.location} tag="h1" />
    
        <RichText className="contentDescription" field={sitecoreContext.route.fields.content} />

        <button onclick="activateLasers()">
          Make an appointment
        </button>

    </div>
)};

export default withSitecoreContext()(DoctorDetails);
