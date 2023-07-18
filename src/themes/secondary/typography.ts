import WebFont from 'webfontloader';
// local

WebFont.load({
  google: {
    families: ['Work Sans:400,500,600', 'Poppins:400,500,600'],
  },
  custom: {
    families: ['SF Pro Text'],
    urls: ['../fonts/SFProText-Regular.ttf'],
  },
});

export const typography = {
  fontFamily: "'SF Pro Text' , 'Work Sans', 'sans-serif'",
};
