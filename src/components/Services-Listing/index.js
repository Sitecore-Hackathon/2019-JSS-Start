import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import { Image } from '@sitecore-jss/sitecore-jss-react';

import { loader as gqlLoader } from 'graphql.macro';
import GraphQLData from '../../lib/GraphQLData';

const ServicesQuery = gqlLoader('./service-listing.graphql');
const ServicesListing = (props) => {
  const graphQLResult = props.connectedQuery;

  const {contextItem } = graphQLResult;

  return (
    <p>
     {contextItem && (
        <div>
            {contextItem.children.map((child) => (
              <div className="service-item">
                <a href={child.url}>
                  <Text field={child.pageTitle} editable="true" tag="h4" />
                </a>
              </div>
            ))}
        </div>
     )} 
    </p>
  );
};

export default GraphQLData(ServicesQuery, { name: 'connectedQuery' })(ServicesListing);
