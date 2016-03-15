import { getStore } from 'configureStore.js';

export function getMobileStyle(styleObject) {
  // Mobile first approach
  // Style is overrided if tablet/desktop object present
  var mobileObject = {};

  // Build mobile style object
  for (var key in styleObject) {
    if (!_.includes(['tablet', 'desktop'], key)) {
      mobileObject[key] = styleObject[key];
    }
  }

  return mobileObject;
};


export function handleStyle(style) {
  const state = getStore().getState().get('viewport');

  let mobile = getMobileStyle(style);
  let {tablet, desktop} = style;
  let responsiveStyle;

  if (state.get('isMobile')) {
    responsiveStyle = _.clone(mobile);
  } else if (state.get('isTablet')) {
    responsiveStyle = _.extend(_.clone(mobile), tablet);
  } else if (state.get('isDesktop')) {
    responsiveStyle = _.extend(_.clone(mobile), _.clone(tablet), desktop);
  }

  return responsiveStyle;
};
