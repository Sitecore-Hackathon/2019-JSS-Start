import React from 'react';
import { Text, Image, Link } from '@sitecore-jss/sitecore-jss-react';

const HeroMain = ({ fields }) => (
    <div className="jumbotron p-3 p-md-5 text-dark rounded bg-dark hero" style={{ backgroundImage: `url(${fields.hero.value.src})`}} >
        <div className="container">
      <Text tag="h2" className="display-4" field={fields.title} />
     <div className="col-md-6 px-0">
        <Text tag="h5" className="display-5" field={fields.subtitle} /> 
        </div>
<<<<<<< Updated upstream
        <img src={fields.hero.value.src}
             sizes="(min-width: 960px)"
             className="img-fluid"
            />
            <button type="button" className="btn btn-light mt-2">
                <Link field={fields.link} className="text-dark p-2" />
            </button> 
       
  </div>
=======
        <button id="hero-button" type="button" className="btn btn-dark mt-2">
                <Link field={fields.link} className="text-light p-2 button-link" />
        </button> 
     </div>
    </div>
>>>>>>> Stashed changes
);

export default HeroMain;
