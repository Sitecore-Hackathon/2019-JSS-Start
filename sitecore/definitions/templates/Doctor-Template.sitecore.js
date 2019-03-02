// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, Manifest, SitecoreIcon } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * This is the data template for an individual _item_ in the Styleguide's Content List field demo.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function(manifest) {
  manifest.addTemplate({
    name: 'Doctor',
    inherits: ["App Route"],
    icon: SitecoreIcon.Doctor,
    fields: [
      { 
        name: 'firstName', displayName:"First Name", type: CommonFieldTypes.SingleLineText 
      },
      { 
        name: 'lastName', displayName:"Last Name", type: CommonFieldTypes.SingleLineText 
      },
      { 
        name: 'location', displayName:"Location", type: CommonFieldTypes.MultiLineText
      },
      { 
        name: 'services', displayName:"Services", type: CommonFieldTypes.ContentList
      }
    ],
  });
}
