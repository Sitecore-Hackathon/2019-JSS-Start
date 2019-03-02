import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import { Image } from '@sitecore-jss/sitecore-jss-react';

import { loader as gqlLoader } from 'graphql.macro';
import GraphQLData from '../../lib/GraphQLData';

const DoctorQuery = gqlLoader('./doctor-listing.graphql');

// This component does not need datasource, will be placed on Doctors Landing page.
// The GraphQL is required to fetch all children of the context item. We will also fetch item URL using GraphQL.
// The GraphQL is mentioned in doctor-listing.graphql file in the same folder

const DoctorListing = (props) => {
  const graphQLResult = props.connectedQuery;

  // This contains results of the graphQL
  const {contextItem } = graphQLResult;

  return (
    <p>
     {contextItem && (
        <div>
          {/* Looping through all children of context item */}
            {contextItem.children.map((child) => (
              <div className="doctor-item">
              <a href={child.url}>
                <div>
                 <Image
                    field={child.headshot}
                    editable={true}
                    imageParams={{ mh: 120, mw:120, ar:true }}
                    height="120"
                    width="120"
                    className="headshot"
                   />
                </div>
               </a>
                <a href={child.url}>
                  <Text field={child.pageTitle} editable="true" tag="h4" />
                </a>
                <Text field={child.location} tag="p" />

                {/* Looping through all services the doctor is tagged with */}
                {child.services && child.services.targetItems && 
                  child.services.targetItems.map((service, index) => (
                    <span class="tag-wrapper">{service.name}</span>
                ))}
              </div>
            ))}
        </div>
     )} 
    </p>
  );
};

export default GraphQLData(DoctorQuery, { name: 'connectedQuery' })(DoctorListing);
