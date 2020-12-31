const smartgrid = require('smart-grid')

const settings = {
  outputStyle: 'scss',
  columns: 12,
  offset: '20px',
  mobileFirst: false,
  container: {
    maxWidth: '1480px',
    fields: '20px'
  },
  breakPoints: {
    md: {
      width: '1366px',
      fields: '15px'
    },
    mdx: {
      width: '1280px',
      fields: '15px'
    },
    tablet: {
      width: '1024px',
      fields: '15px'
    },
    tabletx: {
      width: '768px',
      fields: '15px'
    },
    phone: {
      width: '480px',
      fields: '10px'
    },
    iphone: {
      width: '320px',
      fields: '10px'
    }
  }
}

smartgrid('./theme/', settings)
