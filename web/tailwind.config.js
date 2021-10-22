module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    rotate: {
      '-180': '-180deg',
       '-90': '-90deg',
      '-45': '-45deg',
       '0': '0',
       '45': '45deg',
       '90': '90deg',
      '135': '135deg',
       '180': '180deg',
      '270': '270deg',
    },
    scale: {
        '0': '0',
        '25': '.25',
        '50': '.5',
        '60': '.6',
        '75': '.75',
        '90': '.9',
        '95': '.95',
        '100': '1',
        '105': '1.05',
        '110': '1.1',
        '125': '1.25',
        '150': '1.5',
      },
    screens: {
      'xsm': '414px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'iPadPro11': '1194px',
      'xl': '1280px',
      'dxl': '1365px',
      '2xl': '1440px',
      '3xl': '1680px',
      '4xl': '1920px',
      '5xl': '2560px'
    },
    fontFamily: {
      'serif': ['Literata', 'serif']
    },
    fontSize: {
      headerTextAdress: ['20px', '16px'],
      xlHeaderTextAdress: ['13px', '10px'],
      menuGroups: ['20px', '56px'],
      nav: ['16px', '19px'],
      openNavTextMobile: ['30px', '30px'],
      addressTextInContactUsMobile: ['30px', '36px'],
      addressTextInContactUsDesktop: ['40px', '48px'],
      openNavTextDesktop: ['50px', '50px'],
      introTextDesk: ['40px', '64px'],
      mobileIntroTextDesk: ['30px', '48px'],
      dxlIntroTextDesk: ['28px', '44px'],
      buttonJumbotron: ['16px', '54px'],
      dxlButtonJumbotron: ['16px', '37px'],
      lgButtonJumbotron: ['16px', '29px'],
      bodytextAdress: ['20px', '32px'],
      lgBodytextAdress: ['11px', '17px'],
      formText: ['16px', '35px'],
      aboutText: ['16px', '32px'],
      dxlAboutText: ['16px', '22px'],
      twoXlAboutText: ['16px', '27px'],
      threeXlAboutText: ['16px', '30px'],
      socialCardText: ['20px', '30px'],
      lgSocialCardText: ['13px', '17px'],
      dxlSocialCardText: ['15px', '20px'],
      twoXlSocialCardText: ['17px', '22px'],
      cookiesPolicyLink: ['14px', '22px'],
      headerForBreakfastAndLunch: ['40px', '112px'],
      textBreakfastAndLunch: ['20px', '36px']
    },
    boxShadow: {
      socialCard: '10px 10px 40px rgba(0, 0, 0, 0.1)',
      mapContactUs: '20px 20px 60px rgba(0, 0, 0, 0.25)',
    },
    extend: {
      colors: {
        'light-grayish-orange': '#EEEAE3',
        'white-coffee': '#E5DED3',
        'soft-amber': '#CABDA8',
        'dusty-creme': '#CABDAB',
        'porter-paints-ash': '#E5DED5',
        'spring-wood': '#E5DED6',
        'dark-grey': '#A9A9A9',
        'romance': '#F2EFE9',
        'btn-color-hover': '#CABDA8',
        'textarea-contact': '#F6F7F9'
      },
      spacing: {
        '68': '17rem',
        '76': '19rem',
        '84': '21rem',
        '88': '22rem',
        '92': '23rem',
        '96': '24rem',
        '100': '25rem',
        '104': '26rem',
        '108': '27rem',
        '112': '28rem',
        '116': '29rem',
        '120': '30rem',
        '124': '31rem',
        '128': '32rem',
        '132': '33rem',
        '136': '34rem',
        '140': '35rem',
        '144': '36rem',
        '148': '37rem',
        '152': '38rem',
        '156': '39rem',
        '160': '40rem',
        '164': '41rem',
        '168': '42rem',
        '172': '43rem',
        '176': '44rem',
        '180': '45rem',
        '184': '46rem',
        '188': '47rem',
        '192': '48rem',
        '196': '49rem',
        '200': '50rem',
        '208': '52rem',
        '212': '53rem',
        '220': '55rem',
        '224': '56rem',
        '228': '57rem',
        '232': '58rem',
        '236': '59rem',
        '240': '60rem',
        '264': '66rem'
      }
    },
  },
  variants: {
    borderWidth: ['responsive', 'hover', 'focus', 'active'],
    borderColor: ['responsive', 'hover', 'focus', 'active', 'group-focus', 'group-hover'],
    textOpacity: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    textColor: ['responsive', 'hover', 'focus',  'group-focus', 'group-hover'],
    fontWeight: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active', 'group-focus', 'group-hover'],
    backgroundOpacity: ['responsive', 'hover', 'focus', 'active', 'group-focus', 'group-hover'],
    extend: {
      rotate: ['group-focus'],
      translate: ['group-focus'],
      transitionDuration: ['focus', 'group-focus'],
      transitionProperty: ['focus', 'group-focus'],
      opacity: ['group-focus'],
      transform: [ 'focus', 'group-focus'],
    }
  },
  plugins: [],
}
