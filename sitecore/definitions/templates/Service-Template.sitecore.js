// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, Manifest, SitecoreIcon } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * This is the data template for an individual _item_ in the Styleguide's Content List field demo.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function(manifest) {
  manifest.addTemplate({
    name: 'Service',
    inherits: ["BasePage"],
    icon: SitecoreIcon.Eye
  });
}
