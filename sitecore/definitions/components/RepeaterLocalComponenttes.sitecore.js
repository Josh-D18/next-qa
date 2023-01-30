import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'RepeaterLocalComponenttes',
    displayName: 'RepeaterLocalComponenttes',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    fields: [],
  })
}
