import React from 'react';
import { Text, Image, Link } from '@sitecore-jss/sitecore-jss-react';

const HeroMain = ( props ) => (
    <div className="jumbotron p-3 p-md-5 text-dark rounded bg-dark hero" style={{ backgroundImage: `url(${props.fields.hero.value.src})`}} >
     <div className="container">
        <Text tag="h2" className="display-4" field={props.fields.title} />
      <div className="col-md-6 px-0">
        <Text tag="h5" className="display-5" field={props.fields.subtitle} /> 
            <button id="hero-button" type="button" className="btn btn-dark mt-2">
                <Link field={props.fields.link} className="text-light p-2 button-link" />
            </button> 
       </div>
     </div>
    </div>
);

export default HeroMain;
