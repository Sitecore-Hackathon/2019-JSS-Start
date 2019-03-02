import React from 'react';
import { Text, Image, Link } from '@sitecore-jss/sitecore-jss-react';

const HeroMain = ({ fields }) => (
    <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark" >
      <div className="col-md-6 px-0">
        <Text tag="h2" className="display-4" field={fields.title} />
            <Text tag="h5" className="display-5" field={fields.subtitle} /> 
        </div>
        <img src={fields.hero.value.src}
             sizes="(min-width: 960px)"
             className="img-fluid"
            />
            <button type="button" className="btn btn-light mt-2">
                <Link field={fields.link} className="text-dark p-2" />
            </button> 
       
  </div>
);

export default HeroMain;
