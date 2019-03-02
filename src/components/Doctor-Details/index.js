import React from 'react';
import { Text, Image, RichText } from '@sitecore-jss/sitecore-jss-react';
import { Placeholder, withSitecoreContext } from '@sitecore-jss/sitecore-jss-react';

// Showing doctor details from the context page (no datasource) so we will get the context from WithSitecoreContext()

const DoctorDetails = ({ sitecoreContext, rendering, route }) => {
    return (
      <div className="doctor-details">
        {sitecoreContext.route.fields.pageTitle && (
          <Text tag="h2" className="display-4" field={sitecoreContext.route.fields.pageTitle} />
        )}

        <img src={sitecoreContext.route.fields.headshot.value.src} />

        {/* Looping through all services tagged with the doctor */}
        <div className="service-tag">
          {sitecoreContext.route.fields.services && (
            sitecoreContext.route.fields.services.map((service, index) => (
              <a href="/" class="service-tag">{service.fields.pageTitle.value}</a>
            ))
          )}
        </div>

       <div className="doctor-content">
          {sitecoreContext.route.fields.location && (
            <Text field={sitecoreContext.route.fields.location} tag="h3" />
          )}
          {sitecoreContext.route.fields.pageDescription && (
              <RichText className="contentDescription" field={sitecoreContext.route.fields.pageDescription} />
          )}

        <button>
          <a href="/make-appointment">Make an appointment</a>
        </button>
      </div>
  </div>
)};

export default withSitecoreContext()(DoctorDetails);
