import React from 'react';
import { Text, RichText } from '@sitecore-jss/sitecore-jss-react';


const Notification = (props) => (
  <div class="notification">
    <Text field={props.fields.heading} tag="p" />
    <RichText field={props.fields.content} tag="div" />
  </div>
);

export default Notification;
