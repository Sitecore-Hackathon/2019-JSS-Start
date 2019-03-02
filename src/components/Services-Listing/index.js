import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import { Image } from '@sitecore-jss/sitecore-jss-react';

import { loader as gqlLoader } from 'graphql.macro';
import GraphQLData from '../../lib/GraphQLData';

// We are fetching all children (services) inside Services landing page using GraphQL.
// The GraphQL file is - service-listing.graphql inside the same folder.

const ServicesQuery = gqlLoader('./service-listing.graphql');
const ServicesListing = (props) => {
  const graphQLResult = props.connectedQuery;

  const {contextItem } = graphQLResult;

  return (
    <p>
     {contextItem && (
        <div>
            {contextItem.children.map((child) => (
                <div className="column">
                    <div className="service-item">
                        <a href={child.url}>
                            <Text field={child.pageTitle} editable="true" tag="h4" />
                        </a>
                    </div>
                </div>
            ))}
        </div>
     )} 
    </p>
  );
};

export default GraphQLData(ServicesQuery, { name: 'connectedQuery' })(ServicesListing);
