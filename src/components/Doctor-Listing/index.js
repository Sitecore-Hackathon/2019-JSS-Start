import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import { Image } from '@sitecore-jss/sitecore-jss-react';

import { loader as gqlLoader } from 'graphql.macro';
import GraphQLData from '../../lib/GraphQLData';

const DoctorQuery = gqlLoader('./doctor-listing.graphql');
const DoctorListing = (props) => {
  const graphQLResult = props.connectedQuery;

  const {contextItem } = graphQLResult;

  return (
    <p>
     {contextItem && (
        <div>
            {contextItem.children.map((child) => (
              <div className="doctor-item">
              <a href={child.url}>
                <Image
                    field={child.headshot}
                    editable={true}
                    imageParams={{ mh: 200, mw:192, ar:true }}
                    height="200"
                    width="192"
                    className="headshot"
                  />
                </a>
                <a href={child.url}>
                  <Text field={child.pageTitle} editable="true" tag="h4" />
                </a>
                <Text field={child.location} tag="p" />
                {/* <Text field={child.services.targetItems.Path} tag="p" /> */}

                {child.services && child.services.targetItems && 
                  child.services.targetItems.map((service, index) => (
                    <span class="service-tag">{service.name}</span>
                ))}
              </div>
            ))}
        </div>
     )} 
    </p>
  );
};

export default GraphQLData(DoctorQuery, { name: 'connectedQuery' })(DoctorListing);
