import React from 'react';
import { Text, RichText } from '@sitecore-jss/sitecore-jss-react';

// This comonent will be used to show personalized notification for suggesting making appointment, can be used for any other purpose as well.
const Notification = (props) => (
  <div class="notification">
    <b><Text field={props.fields.heading} tag="p" /></b>
    <RichText field={props.fields.content} tag="div" />

    <button id="hero-button" type="button" className="btn btn-dark mt-2">
      <a href="/doctors" className="text-light p-2 button-link">Search Doctors</a>
    </button>
  </div>
);

export default Notification;
