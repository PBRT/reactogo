import Slideout from 'slideout';

export const slideoutInst = () => new Slideout({
  'panel': document.getElementById('panel'),
  'menu': document.getElementById('menu'),
  'padding': UI.sideMenuWidth,
  'tolerance': 70,
  'side': 'right',
});
