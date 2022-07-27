import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Source Sans Pro';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: local('Source Sans Pro Light'), local('Source-Sans-Pro-Light'),
            url('/fonts/source-sans-pro-v21-latin-300.woff2') format('woff2')
      }
    
      @font-face {
        font-family: 'Source Sans Pro';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: local('Source Sans Pro Regular'), local('Source-Sans-Pro-Regular'),
            url('/fonts/source-sans-pro-v21-latin-regular.woff2') format('woff2')
      }
    
      @font-face {
        font-family: 'Source Sans Pro';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: local('Source Sans Pro SemiBold'), local('Source-Sans-Pro-SemiBold'),
            url('/fonts/source-sans-pro-v21-latin-600.woff2') format('woff2')
      }
    
      @font-face {
        font-family: 'Source Sans Pro';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: local('Source Sans Pro Bold'), local('Source-Sans-Pro-Bold'),
            url('/fonts/source-sans-pro-v21-latin-700.woff2') format('woff2')
      }
    
      @font-face {
        font-family: 'Source Sans Pro';
        font-style: normal;
        font-weight: 900;
        font-display: swap;
        src: local('Source Sans Pro Black'), local('Source-Sans-Pro-Black'),
            url('/fonts/source-sans-pro-v21-latin-900.woff2') format('woff2')
      }
    `}
  />
)

export default Fonts
