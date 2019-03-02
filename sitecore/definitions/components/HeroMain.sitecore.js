// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * Adds the HeroMain component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function(manifest) {
    manifest.addComponent({
        name: 'HeroMain',
        icon: SitecoreIcon.DocumentTag,
        fields: [
            { name: 'title', type: CommonFieldTypes.SingleLineText },
            { name: 'subtitle', type: CommonFieldTypes.SingleLineText },
            { name: 'hero', type: CommonFieldTypes.Image },
            { name: 'link', type: CommonFieldTypes.GeneralLink },
        ],
  });
}
