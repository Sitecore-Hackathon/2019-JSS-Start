import React from 'react';
import { Text, Image, RichText } from '@sitecore-jss/sitecore-jss-react';
import { Placeholder, withSitecoreContext } from '@sitecore-jss/sitecore-jss-react';


const DoctorDetails = (props) => {
  return (
    <div>
    <Text tag="h2" className="display-4" field={props.fields.pageTitle} />
    
        <Image
              field={props.fields.headshot}
              editable={true}
              imageParams={{ mh: 200, mw:192, ar:true }}
              height="200"
              width="192"
              className="headshot" />

        {props.fields.services && (
          props.fields.services.map((service, index) => (
            <a href="/" class="service-tag">{service.fields.pageTitle.value}</a>
          ))
        )}

        <Text field={props.fields.location} tag="h1" />
    
    <RichText className="contentDescription" field={props.fields.content} />
    </div>
)};

export default DoctorDetails;
