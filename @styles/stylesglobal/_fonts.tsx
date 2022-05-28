import { Global, css } from '@emotion/react';
import { FC } from 'react';

const _NormalizerStyled: FC = () => (
  <Global
    styles={css`
      /* cyrillic-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 100;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUQjIg1_i6t8kCHKm45_QpRxC7mw9c.woff2)
          format('woff2');
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF,
          U+A640-A69F, U+FE2E-FE2F;
      }
      /* cyrillic */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 100;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUQjIg1_i6t8kCHKm45_QpRzS7mw9c.woff2)
          format('woff2');
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
      }
      /* vietnamese */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 100;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUQjIg1_i6t8kCHKm45_QpRxi7mw9c.woff2)
          format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
          U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 100;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUQjIg1_i6t8kCHKm45_QpRxy7mw9c.woff2)
          format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
          U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 100;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUQjIg1_i6t8kCHKm45_QpRyS7m.woff2)
          format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
          U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
          U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* cyrillic-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 200;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_aZA3gTD_u50.woff2)
          format('woff2');
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF,
          U+A640-A69F, U+FE2E-FE2F;
      }
      /* cyrillic */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 200;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_aZA3g3D_u50.woff2)
          format('woff2');
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
      }
      /* vietnamese */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 200;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_aZA3gbD_u50.woff2)
          format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
          U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 200;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_aZA3gfD_u50.woff2)
          format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
          U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 200;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_aZA3gnD_g.woff2)
          format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
          U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
          U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* cyrillic-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_cJD3gTD_u50.woff2)
          format('woff2');
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF,
          U+A640-A69F, U+FE2E-FE2F;
      }
      /* cyrillic */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_cJD3g3D_u50.woff2)
          format('woff2');
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
      }
      /* vietnamese */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_cJD3gbD_u50.woff2)
          format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
          U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_cJD3gfD_u50.woff2)
          format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
          U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_cJD3gnD_g.woff2)
          format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
          U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
          U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* cyrillic-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUSjIg1_i6t8kCHKm459WRhyzbi.woff2)
          format('woff2');
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF,
          U+A640-A69F, U+FE2E-FE2F;
      }
      /* cyrillic */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUSjIg1_i6t8kCHKm459W1hyzbi.woff2)
          format('woff2');
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
      }
      /* vietnamese */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUSjIg1_i6t8kCHKm459WZhyzbi.woff2)
          format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
          U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUSjIg1_i6t8kCHKm459Wdhyzbi.woff2)
          format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
          U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2)
          format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
          U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
          U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* cyrillic-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_ZpC3gTD_u50.woff2)
          format('woff2');
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF,
          U+A640-A69F, U+FE2E-FE2F;
      }
      /* cyrillic */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_ZpC3g3D_u50.woff2)
          format('woff2');
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
      }
      /* vietnamese */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_ZpC3gbD_u50.woff2)
          format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
          U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_ZpC3gfD_u50.woff2)
          format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
          U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_ZpC3gnD_g.woff2)
          format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
          U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
          U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* cyrillic-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_bZF3gTD_u50.woff2)
          format('woff2');
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF,
          U+A640-A69F, U+FE2E-FE2F;
      }
      /* cyrillic */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_bZF3g3D_u50.woff2)
          format('woff2');
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
      }
      /* vietnamese */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_bZF3gbD_u50.woff2)
          format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
          U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_bZF3gfD_u50.woff2)
          format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
          U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_bZF3gnD_g.woff2)
          format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
          U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
          U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* cyrillic-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_dJE3gTD_u50.woff2)
          format('woff2');
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF,
          U+A640-A69F, U+FE2E-FE2F;
      }
      /* cyrillic */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_dJE3g3D_u50.woff2)
          format('woff2');
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
      }
      /* vietnamese */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_dJE3gbD_u50.woff2)
          format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
          U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_dJE3gfD_u50.woff2)
          format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
          U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_dJE3gnD_g.woff2)
          format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
          U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
          U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* cyrillic-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 800;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_c5H3gTD_u50.woff2)
          format('woff2');
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF,
          U+A640-A69F, U+FE2E-FE2F;
      }
      /* cyrillic */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 800;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_c5H3g3D_u50.woff2)
          format('woff2');
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
      }
      /* vietnamese */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 800;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_c5H3gbD_u50.woff2)
          format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
          U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 800;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_c5H3gfD_u50.woff2)
          format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
          U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 800;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_c5H3gnD_g.woff2)
          format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
          U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
          U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* cyrillic-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 900;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_epG3gTD_u50.woff2)
          format('woff2');
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF,
          U+A640-A69F, U+FE2E-FE2F;
      }
      /* cyrillic */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 900;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_epG3g3D_u50.woff2)
          format('woff2');
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
      }
      /* vietnamese */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 900;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_epG3gbD_u50.woff2)
          format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
          U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 900;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_epG3gfD_u50.woff2)
          format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
          U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 900;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_epG3gnD_g.woff2)
          format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
          U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
          U+2212, U+2215, U+FEFF, U+FFFD;
      }

      .PinturaRadioGroup .PinturaRadioGroupOptions {
        display: flex;
        flex-direction: column;
      }
      .PinturaRadioGroup
        .PinturaRadioGroupOptionGroup
        + .PinturaRadioGroupOptionGroup {
        margin-top: 0.5em;
      }
      .PinturaRadioGroup[data-layout='row'] .PinturaRadioGroupOptions {
        flex-direction: row;
      }
      .PinturaRadioGroup label {
        -webkit-tap-highlight-color: transparent;
      }
      .PinturaDetailsPanel.PinturaSliderPanel {
        border-radius: var(--border-radius-round);
      }
      .PinturaPercentageLabel {
        font-variant-numeric: tabular-nums;
        min-width: 3em;
        text-align: center;
      }
      .PinturaSliderPanel .PinturaSlider {
        width: 10em;
        --knob-size: 0.75em;
        --knob-margin-left: 0.3125em;
        --knob-margin-right: 0.3125em;
      }
      .PinturaSliderPanel .PinturaSliderTrack {
        background-color: #eee;
      }
      .PinturaSliderPanel .PinturaSliderKnob {
        background-color: #111;
        box-shadow: 0 0.125em 0.25em rgba(0, 0, 0, 0.35),
          0 -0.125em 0.25em rgba(0, 0, 0, 0.1);
      }
      .pintura-editor,
      pintura-editor {
        --color-primary: #ffd843;
        --color-primary-dark: #ffc343;
        --color-primary-text: #000;
        --color-secondary: #03a9f4;
        --color-secondary-dark: #046bbf;
        --color-focus: 4, 107, 191;
        --color-focus-100: rgba(var(--color-focus), 1);
        --color-focus-50: rgba(var(--color-focus), 0.5);
        --color-focus-25: rgba(var(--color-focus), 0.25);
        --color-error: 255, 87, 34;
        --color-error-100: rgb(var(--color-error));
        --color-error-75: rgba(var(--color-error), 0.75);
        --color-error-50: rgba(var(--color-error), 0.5);
        --color-error-25: rgba(var(--color-error), 0.25);
        --color-foreground: 0, 0, 0;
        --color-background: 255, 255, 255;
        --color-preview-outline: var(--color-foreground);
        --color-foreground-100: rgba(var(--color-foreground), 1);
        --color-foreground-95: rgba(var(--color-foreground), 0.95);
        --color-foreground-90: rgba(var(--color-foreground), 0.9);
        --color-foreground-80: rgba(var(--color-foreground), 0.8);
        --color-foreground-70: rgba(var(--color-foreground), 0.7);
        --color-foreground-60: rgba(var(--color-foreground), 0.6);
        --color-foreground-50: rgba(var(--color-foreground), 0.5);
        --color-foreground-40: rgba(var(--color-foreground), 0.4);
        --color-foreground-30: rgba(var(--color-foreground), 0.3);
        --color-foreground-20: rgba(var(--color-foreground), 0.25);
        --color-foreground-15: rgba(var(--color-foreground), 0.2);
        --color-foreground-10: rgba(var(--color-foreground), 0.15);
        --color-foreground-5: rgba(var(--color-foreground), 0.075);
        --color-foreground-3: rgba(var(--color-foreground), 0.05);
        --color-foreground-1: rgba(var(--color-foreground), 0.02);
        --color-foreground-0: rgba(var(--color-foreground), 0);
        --color-background-100: rgba(var(--color-background), 1);
        --color-background-95: rgba(var(--color-background), 0.95);
        --color-background-90: rgba(var(--color-background), 0.9);
        --color-background-80: rgba(var(--color-background), 0.8);
        --color-background-70: rgba(var(--color-background), 0.7);
        --color-background-60: rgba(var(--color-background), 0.6);
        --color-background-50: rgba(var(--color-background), 0.5);
        --color-background-40: rgba(var(--color-background), 0.4);
        --color-background-30: rgba(var(--color-background), 0.3);
        --color-background-20: rgba(var(--color-background), 0.2);
        --color-background-15: rgba(var(--color-background), 0.15);
        --color-background-10: rgba(var(--color-background), 0.1);
        --color-background-5: rgba(var(--color-background), 0.05);
        --color-background-3: rgba(var(--color-background), 0.03);
        --color-background-1: rgba(var(--color-background), 0.01);
        --color-background-0: rgba(var(--color-background), 0);
        --button-cursor: pointer;
        --font-size: 16px;
        --font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
          'Segoe UI Symbol';
        --backdrop-filter-bright: brightness(110%) saturate(180%) blur(10px);
        --backdrop-filter-dark: brightness(90%) saturate(180%) blur(10px);
        --border-radius-round: 9999em;
        --border-radius: 0.625em;
        --filter-disabled: grayscale(95%) opacity(40%);
        --editor-inset-top: 0px;
        --editor-inset-bottom: 0px;
        --safe-area-inset-top: 0px;
        --safe-area-inset-bottom: 0px;
      }
      .pintura-editor,
      .PinturaRootWrapper,
      pintura-editor {
        display: block;
      }
      .PinturaRootWrapper {
        height: 100%;
      }
      .PinturaRoot {
        --nav-group-margin: 0.5em;
        --editor-calculated-inset-top: calc(
          var(--safe-area-inset-top) + var(--editor-inset-top)
        );
        --editor-calculated-inset-bottom: calc(
          var(--safe-area-inset-bottom) + var(--editor-inset-bottom)
        );
        box-sizing: border-box;
        width: var(--editor-width, 100%);
        height: var(--editor-height, 100%);
        padding-top: var(--editor-calculated-inset-top);
        padding-bottom: var(--editor-calculated-inset-bottom);
        max-width: var(
          --editor-max-width,
          var(--editor-max-width-default, none)
        );
        max-height: var(
          --editor-max-height,
          var(--editor-max-height-default, none)
        );
        position: relative;
        overflow: hidden;
        contain: strict;
        display: grid;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        line-height: normal;
        font-size: var(--font-size);
        font-family: var(--font-family);
        font-weight: 450;
        touch-action: manipulation;
        text-align: left;
        text-transform: none;
        text-rendering: optimizeLegibility;
        direction: ltr;
        color: var(--color-foreground-90);
        background-color: var(--color-background-100);
        outline-color: rgba(var(--color-preview-outline), 1);
        transition: background-color 1ms, outline-color 1ms,
          color 0.15s ease-in-out;
      }
      .PinturaRoot * {
        box-sizing: content-box;
      }
      .PinturaRoot button,
      .PinturaRoot fieldset,
      .PinturaRoot input,
      .PinturaRoot legend {
        padding: 0;
        margin: 0;
        border: none;
        background: transparent;
        color: inherit;
        font-size: inherit;
        font-family: inherit;
        line-height: inherit;
        width: auto;
        text-decoration: none;
      }
      .PinturaRoot button[disabled] {
        pointer-events: none;
      }
      .PinturaRoot canvas {
        display: block;
      }
      .PinturaRoot svg {
        display: inline-block;
        width: auto;
        height: auto;
      }
      .PinturaRoot p {
        margin: 0;
      }
      .PinturaRoot li,
      .PinturaRoot ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }
      .PinturaRoot a {
        color: inherit;
        text-decoration: none;
      }
      .PinturaRoot .implicit {
        border: 0;
        clip: rect(0 0 0 0);
        -webkit-clip-path: polygon(0 0, 0 0, 0 0);
        clip-path: polygon(0 0, 0 0, 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
        white-space: nowrap;
      }
      .PinturaRoot .PinturaStage {
        display: flex;
        align-self: stretch;
        flex: 1;
      }
      .PinturaRoot .PinturaStage[tabindex='-1'] {
        outline: none;
      }
      .PinturaRoot .PinturaRootPortal {
        position: absolute;
        left: 0;
        top: 0;
      }
      .PinturaRoot > .PinturaCanvas {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
        pointer-events: none;
      }
      .PinturaRoot > .PinturaCanvas:after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        pointer-events: none;
        background-repeat: no-repeat;
      }
      .PinturaRoot > .PinturaStatus {
        position: absolute;
        z-index: 99999;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        background-color: var(--color-background-90);
      }
      .PinturaRoot > .PinturaStatus > p {
        position: absolute;
        top: 50%;
        left: 50%;
        display: inline-flex;
        white-space: nowrap;
        align-items: center;
        transition: opacity 0.5s ease-out;
      }
      .PinturaRoot .PinturaStatusMessage {
        position: absolute;
        font-size: 0.875em;
      }
      .PinturaRoot .PinturaStatusAside {
        position: absolute;
        left: 0;
      }
      .PinturaRoot .PinturaStatusAside svg {
        width: 1.25em;
        height: 1.25em;
      }
      .PinturaRoot .PinturaStatusAside .PinturaProgressIndicator {
        margin-left: 0.5em;
      }
      .PinturaRoot .PinturaStatusAside .PinturaButton {
        outline: transparent;
        margin-left: 0.75em;
        font-size: 0.875em;
        border-radius: var(--border-radius-round);
        background-color: var(--color-foreground-5);
        padding: 0.25em;
        transition: background-color 0.1s ease-out, color 0.1s ease-out;
        -webkit-backdrop-filter: var(--backdrop-filter-dark);
        backdrop-filter: var(--backdrop-filter-dark);
      }
      .PinturaRoot
        .PinturaStatusAside
        .PinturaButton:not([disabled])[data-focus-visible] {
        background-color: var(--color-focus-50);
        box-shadow: inset 0 0 0 1px var(--color-focus-100);
      }
      .PinturaRoot .PinturaStatusAside .PinturaButton:not([disabled]):hover {
        background-color: var(--color-foreground-10);
      }
      .PinturaRoot .PinturaStatusIcon svg {
        font-size: 0.875em;
        margin-top: 0.25em;
        margin-left: 0.5em;
      }
      .PinturaRoot > .PinturaNav {
        position: relative;
        z-index: 3;
      }
      .PinturaRoot > .PinturaNav:empty() {
        display: none !important;
      }
      .PinturaRoot > .PinturaNav .PinturaButton {
        outline: transparent;
        transition: background-color 0.1s ease-out, color 0.1s ease-out;
      }
      .PinturaRoot > .PinturaNav .PinturaButton svg {
        width: 1em;
        transition: opacity 0.1s ease-out;
      }
      .PinturaRoot > .PinturaNav .PinturaButton > span {
        justify-content: center;
      }
      .PinturaRoot > .PinturaNav .PinturaButtonIconOnly .PinturaButtonInner,
      .PinturaRoot > .PinturaNav .PinturaDropdownIconOnly .PinturaButtonInner {
        width: 1.75em;
      }
      .PinturaRoot > .PinturaNav .PinturaButton .PinturaButtonInner {
        height: 1.75em;
      }
      .PinturaRoot
        > .PinturaNav
        .PinturaButton:not(.PinturaButtonIconOnly):not(.PinturaDropdownIconOnly) {
        padding-left: 0.75em;
        padding-right: 0.75em;
        box-shadow: inset 0 0 0 1px var(--color-foreground-5);
      }
      .PinturaRoot
        > .PinturaNav
        .PinturaButton:not(.PinturaButtonIconOnly):not(.PinturaDropdownIconOnly)
        .PinturaButtonLabel {
        font-size: 0.75em;
        line-height: 2;
      }
      .PinturaRoot > .PinturaNav .PinturaButton:only-of-type {
        border-radius: var(--border-radius-round);
      }
      .PinturaRoot > .PinturaNav .PinturaButton:only-of-type + * {
        margin-left: 0.5em;
      }
      .PinturaRoot > .PinturaNav .PinturaButton[disabled] svg {
        opacity: 0.25;
      }
      .PinturaRoot
        > .PinturaNav
        .PinturaButton:not(.PinturaButtonExport):not([disabled])[data-focus-visible] {
        background-color: var(--color-focus-50);
        box-shadow: inset 0 0 0 1px var(--color-focus-100);
      }
      .PinturaRoot
        > .PinturaNav
        .PinturaButton:not(.PinturaButtonExport):not([disabled]):hover {
        background-color: var(--color-foreground-10);
      }
      .PinturaRoot .PinturaButtonExport {
        color: var(--color-primary-text);
        background-color: var(--color-primary);
      }
      .PinturaRoot .PinturaButtonExport:hover {
        background-color: var(--color-primary-dark);
      }
      .PinturaRoot .PinturaButtonExport[data-focus-visible] {
        color: var(--color-primary-text);
        background-color: var(--color-primary);
        box-shadow: inset 0 0 0 1px var(--color-foreground-5),
          0 0 0 3px var(--color-focus-50);
        background-color: var(--color-primary-dark);
      }
      .PinturaRoot .PinturaButtonExport:not(.PinturaButtonIconOnly) {
        flex: 1;
        padding: 0 0.75em;
      }
      .PinturaRoot > .PinturaNavMain {
        display: flex;
        overflow: hidden;
      }
      .PinturaRoot > .PinturaNavMain [aria-selected='true'] button {
        -webkit-backdrop-filter: var(--backdrop-filter-dark);
        backdrop-filter: var(--backdrop-filter-dark);
        background-color: var(--color-foreground-10);
      }
      .PinturaRoot > .PinturaNavMain button svg {
        align-self: center;
        width: 1.5em;
      }
      .PinturaRoot > .PinturaNavMain button span,
      .PinturaRoot > .PinturaNavMain button svg {
        pointer-events: none;
      }
      .PinturaRoot > .PinturaNavMain button svg + span {
        margin-top: 0.75em;
      }
      .PinturaRoot > .PinturaNavMain button span {
        font-size: 0.875em;
      }
      .PinturaRoot > .PinturaNavMain button {
        box-shadow: inset 0 0 0 1px var(--color-foreground-5);
        transition: background-color 0.1s ease-out, color 0.1s ease-out,
          box-shadow 0.1s ease-out;
      }
      .PinturaRoot > .PinturaNavMain button:hover {
        box-shadow: inset 0 0 0 1px var(--color-foreground-10);
      }
      .PinturaRoot > .PinturaNavMain button[data-focus-visible] {
        background-color: var(--color-focus-50);
        box-shadow: inset 0 0 0 1px var(--color-focus-100);
      }
      .PinturaRoot > .PinturaNavTools {
        max-width: 100%;
        box-sizing: border-box;
        pointer-events: none;
      }
      .PinturaRoot > .PinturaNavTools:empty {
        display: none;
      }
      .PinturaRoot > .PinturaNavTools,
      .PinturaRoot > .PinturaNavTools .PinturaNavGroup,
      .PinturaRoot > .PinturaNavTools .PinturaNavSet {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .PinturaRoot > .PinturaNavTools .PinturaButton,
      .PinturaRoot > .PinturaNavTools .PinturaNavSet {
        pointer-events: all;
      }
      .PinturaRoot > .PinturaNavTools .PinturaButton[data-focus-visible] {
        background-color: var(--color-focus-50);
        box-shadow: inset 0 0 0 1px var(--color-focus-100);
      }
      .PinturaRoot .PinturaNavGroup {
        margin: 0 var(--nav-group-margin);
      }
      .PinturaRoot .PinturaNavGroup > * {
        border-radius: var(--border-radius-round);
      }
      .PinturaRoot .PinturaNavGroup > * + * {
        margin-left: 0.5em;
      }
      .PinturaRoot .PinturaNavGroup:first-of-type {
        margin-right: auto;
        margin-left: 0;
      }
      .PinturaRoot .PinturaNavGroup:last-of-type {
        margin-left: auto;
        margin-right: 0;
      }
      .PinturaRoot .PinturaNavSet {
        box-shadow: inset 0 0 0 1px var(--color-foreground-5);
      }
      .PinturaRoot .PinturaNavSet > :not(:only-child) {
        border: 1px solid var(--color-foreground-3);
        border-top: 0;
        border-bottom: 0;
      }
      .PinturaRoot .PinturaNavSet > :first-of-type:not(:only-child) {
        border-left: 0;
      }
      .PinturaRoot .PinturaNavSet > :last-child:not(:only-child) {
        border-right: 0;
      }
      .PinturaRoot .PinturaNavSet > * + * {
        margin-left: -1px;
      }
      .PinturaRoot .PinturaNavSet > .PinturaButton:hover,
      .PinturaRoot .PinturaNavSet > .PinturaButton[data-focus-visible] {
        position: relative;
        z-index: 1;
      }
      .PinturaRoot .PinturaNavSet > :only-child {
        border-radius: var(--border-radius-round);
      }
      .PinturaRoot
        .PinturaNavSet
        > :first-of-type:not(:only-child)
        .PinturaButtonInner {
        padding: 0 0.125em 0 0.25em;
      }
      .PinturaRoot .PinturaNavSet > :first-of-type:not(:only-child) {
        border-top-left-radius: var(--border-radius-round);
        border-bottom-left-radius: var(--border-radius-round);
      }
      .PinturaRoot
        .PinturaNavSet
        > :last-child:not(:only-child)
        .PinturaButtonInner {
        padding: 0 0.25em 0 0.125em;
      }
      .PinturaRoot .PinturaNavSet > :last-child:not(:only-child) {
        border-top-right-radius: var(--border-radius-round);
        border-bottom-right-radius: var(--border-radius-round);
      }
      .PinturaRoot[data-env~='overlay'] .PinturaNavSet {
        background-color: var(--color-background-50);
        -webkit-backdrop-filter: var(--backdrop-filter-bright);
        backdrop-filter: var(--backdrop-filter-bright);
        box-shadow: inset 0 0 0 1px var(--color-background-15),
          0 0.0625em 0.125em rgba(0, 0, 0, 0.25),
          0 0.125em 0.35em rgba(0, 0, 0, 0.35);
      }
      .PinturaRoot[data-env~='overlay']
        .PinturaNavSet
        .PinturaButton:not(.PinturaButtonExport):not([disabled]):hover,
      .PinturaRoot[data-env~='overlay'] .PinturaNavSet > * {
        border-color: var(--color-background-15);
      }
      .PinturaRoot[data-env~='overlay'] .PinturaNavGroup > .PinturaButton {
        box-shadow: 0 0.0625em 0.125em rgba(0, 0, 0, 0.25),
          0 0.125em 0.35em rgba(0, 0, 0, 0.35);
      }
      .PinturaRoot[data-env~='overlay'] .PinturaNavGroup .PinturaButtonExport {
        box-shadow: inset 0 0 0.125em rgba(0, 0, 0, 0.25),
          0 0.0625em 0.125em rgba(0, 0, 0, 0.25),
          0 0.125em 0.35em rgba(0, 0, 0, 0.35);
      }
      .PinturaRoot .PinturaNavGroupFloat {
        position: absolute;
        left: 0;
        right: 0;
        pointer-events: none;
      }
      .PinturaRoot .PinturaNavGroupFloat > * {
        pointer-events: all;
      }
      .PinturaRoot .PinturaUtilFooter .PinturaScrollable > div {
        padding-left: 1em;
        padding-right: 1em;
      }
      .PinturaRoot > .PinturaMain {
        max-width: 100vw;
      }
      .PinturaRoot:not([data-env~='has-toolbar']) .PinturaUtilHeader {
        padding-top: 0;
        padding-bottom: 1em;
        margin-bottom: -1em;
      }
      .PinturaRoot[data-env~='landscape'] {
        grid-template-rows: -webkit-min-content auto;
        grid-template-rows: min-content auto;
        grid-template-columns: auto;
      }
      .PinturaRoot[data-env~='landscape'] > .PinturaNavTools {
        grid-row: 1;
        grid-column: 1;
        padding: 1em 1em 0;
        z-index: 3;
      }
      .PinturaRoot[data-env~='landscape'] > .PinturaNavMain {
        align-items: center;
        justify-content: flex-end;
        position: absolute;
        left: 1em;
        top: calc(1em + var(--editor-calculated-inset-top));
        bottom: calc(1em + var(--editor-calculated-inset-bottom));
      }
      .PinturaRoot[data-env~='landscape'] > .PinturaNavMain .PinturaTabList {
        flex-direction: column;
      }
      .PinturaRoot[data-env~='landscape'] > .PinturaNavMain .PinturaTabList li {
        display: flex;
      }
      .PinturaRoot[data-env~='landscape']
        > .PinturaNavMain
        .PinturaTabList
        li
        + li {
        margin: 0.5em 0 0;
      }
      .PinturaRoot[data-env~='landscape'] > .PinturaNavMain button {
        flex: 1;
        width: 4em;
        height: 4em;
        border-radius: var(--border-radius);
        justify-content: center;
      }
      .PinturaRoot[data-env~='landscape'] > .PinturaNavMain button span {
        font-size: 0.6875em;
        margin-top: 0.5em;
      }
      .PinturaRoot[data-env~='landscape'] > .PinturaNavMain button svg {
        width: 1em;
        margin-top: 0.25em;
      }
      .PinturaRoot[data-env~='landscape'][data-env~='has-toolbar']
        > .PinturaNavMain {
        top: calc(4em + var(--editor-calculated-inset-top));
        bottom: calc(4em + var(--editor-calculated-inset-bottom));
      }
      .PinturaRoot[data-env~='landscape'][data-env~='has-limited-space']
        > .PinturaNavMain {
        align-items: flex-start;
        bottom: calc(1em + var(--editor-calculated-inset-bottom));
      }
      .PinturaRoot[data-env~='landscape'] > .PinturaMain {
        grid-row: 2;
        grid-column: 1;
      }
      .PinturaRoot[data-env~='landscape'][data-env~='has-navigation'] {
        grid-template-columns: 6em auto;
      }
      .PinturaRoot[data-env~='landscape'][data-env~='has-navigation']
        .PinturaNavGroupFloat {
        margin: 0 0 0 6em;
      }
      .PinturaRoot[data-env~='landscape'][data-env~='has-navigation']
        > .PinturaNavTools {
        grid-column: 1 / span 2;
      }
      .PinturaRoot[data-env~='landscape'][data-env~='has-navigation']
        > .PinturaMain {
        grid-column: 2;
      }
      .PinturaRoot[data-env~='portrait'] {
        grid-template-rows: -webkit-min-content auto -webkit-min-content;
        grid-template-rows: min-content auto min-content;
        grid-template-columns: auto;
      }
      .PinturaRoot[data-env~='portrait'] > * {
        grid-column: 1;
      }
      .PinturaRoot[data-env~='portrait'] > .PinturaNavTools {
        grid-row: 1;
        padding: 0.75em 0.75em 0;
      }
      .PinturaRoot[data-env~='portrait'] > .PinturaNavMain {
        grid-row: 3;
        margin-bottom: 0.75em;
        justify-content: center;
      }
      .PinturaRoot[data-env~='portrait'] > .PinturaNavMain .PinturaTabList {
        padding: 0 0.875em;
      }
      .PinturaRoot[data-env~='portrait'] > .PinturaNavMain li + li {
        margin-left: 0.5em;
      }
      .PinturaRoot[data-env~='portrait']
        > .PinturaNavMain[data-state~='overflows'] {
        overflow: visible;
      }
      .PinturaRoot[data-env~='portrait'] > .PinturaNavMain button {
        flex: 1;
        width: 4em;
        height: 4em;
        border-radius: var(--border-radius);
        justify-content: center;
      }
      .PinturaRoot[data-env~='portrait'] > .PinturaNavMain button span {
        font-size: 0.6875em;
        margin-top: 0.5em;
      }
      .PinturaRoot[data-env~='portrait'] > .PinturaNavMain button svg {
        width: 1em;
        margin-top: 0.25em;
      }
      .PinturaRoot[data-env~='portrait'] > .PinturaMain {
        grid-row: 2;
        grid-column: 1;
      }
      .PinturaRoot[data-env~='landscape'][data-env~='is-compact']
        > .PinturaNavMain
        button {
        flex: 1;
        flex-direction: row;
        width: auto;
        height: auto;
        border-radius: var(--border-radius);
        justify-content: flex-start;
        align-items: center;
        padding: 0.625em 0;
        width: 6em;
      }
      .PinturaRoot[data-env~='landscape'][data-env~='is-compact']
        > .PinturaNavMain
        button
        span {
        font-size: 0.6875em;
        margin: 0 0.625em 0 0;
        line-height: 0;
      }
      .PinturaRoot[data-env~='landscape'][data-env~='is-compact']
        > .PinturaNavMain
        button
        svg {
        margin: 0 0.5em 0 0.625em;
        width: 1em;
      }
      .PinturaRoot[data-env~='landscape'][data-env~='is-compact'][data-env~='has-navigation'] {
        grid-template-columns: 8em auto;
      }
      .PinturaRoot[data-env~='landscape'][data-env~='is-compact'][data-env~='has-navigation']
        .PinturaNavGroupFloat {
        margin: 0 0 0 8em;
      }
      .PinturaRoot[data-env~='portrait'][data-env~='is-compact']
        > .PinturaNavMain
        button {
        padding: 0;
        font-size: 0.625em;
        width: 4em;
        height: 4em;
        justify-content: center;
        border-radius: 9999em;
      }
      .PinturaRoot[data-env~='portrait'][data-env~='is-compact']
        > .PinturaNavMain
        button
        span {
        visibility: hidden;
        font-size: 0;
        margin: 0;
      }
      .PinturaRoot[data-env~='portrait'][data-env~='is-compact']
        > .PinturaNavMain
        button
        svg {
        margin-top: 0;
        width: 1.6em;
      }
      .PinturaRoot[data-env~='portrait'][data-env~='is-compact']
        > .PinturaNavMain
        button
        svg
        [stroke-width] {
        stroke-width: 0.15em;
      }
      .PinturaRoot[data-env~='portrait'][data-env~='narrow'] {
        --nav-group-margin: 0.25em;
        grid-template-rows: -webkit-min-content auto -webkit-min-content;
        grid-template-rows: min-content auto min-content;
        grid-template-columns: auto;
      }
      .PinturaRoot[data-env~='portrait'][data-env~='narrow'] > * {
        grid-column: 1;
      }
      .PinturaRoot[data-env~='portrait'][data-env~='narrow']
        .PinturaUtilFooter
        .PinturaControlList
        .PinturaControlListOption
        span,
      .PinturaRoot[data-env~='portrait'][data-env~='narrow']
        .PinturaUtilFooter
        .PinturaControlList
        [role='tab']
        span {
        font-size: 0.6875em;
      }
      .PinturaRoot[data-env~='portrait'][data-env~='narrow']
        .PinturaToolbar
        .PinturaToolbarInner
        > * {
        margin: 0 0.25em;
      }
      .PinturaRoot[data-env~='portrait'][data-env~='narrow'][data-env~='short']
        .PinturaNavGroupFloat {
        position: static;
      }
      .PinturaRoot[data-env~='overlay'] {
        grid-template-rows: auto !important;
        grid-template-columns: auto !important;
      }
      .PinturaRoot[data-env~='overlay'] .PinturaNav {
        z-index: 3;
      }
      .PinturaRoot[data-env~='overlay'] .PinturaMain {
        grid-row: 1;
        grid-column: 1;
      }
      .PinturaRoot[data-env~='overlay'] .PinturaUtilMain {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        padding: 0;
        z-index: -1;
      }
      .PinturaRoot[data-env~='overlay'] .PinturaUtilFooter,
      .PinturaRoot[data-env~='overlay'] .PinturaUtilHeader {
        position: absolute;
        left: 0;
        right: 0;
      }
      .PinturaRoot[data-env~='overlay'] .PinturaUtilHeader {
        top: 0;
      }
      .PinturaRoot[data-env~='overlay'] .PinturaUtilFooter {
        bottom: 0;
      }
      .PinturaRoot[data-env~='overlay'] .PinturaNavMain {
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        background: none;
      }
      .PinturaRoot[data-env~='overlay'] .PinturaNavTools {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
      }
      .PinturaRoot[data-env~='has-swipe-navigation'] .PinturaUtilMain {
        padding-left: 2em;
        padding-right: 2em;
      }
      .PinturaRoot[data-env*='is-disabled'],
      .PinturaRoot[data-env*='is-disabled'] * {
        pointer-events: none !important;
      }
      .PinturaRoot[data-env*='is-disabled'] {
        --color-primary: #b4b4b4;
        --color-primary-dark: #a0a0a0;
        --color-primary-text: #000;
        --color-secondary: #969696;
        --color-secondary-dark: #646464;
      }
      .PinturaRoot[data-env*='is-disabled'] .PinturaCanvas,
      .PinturaRoot[data-env*='is-disabled'] .PinturaColorPickerButton {
        filter: grayscale(100%);
      }
      .PinturaRoot .PinturaEditorOverlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 3;
        background: var(--color-background-50);
        pointer-events: none;
      }
      .PinturaDropdownPanel {
        overflow: hidden;
        border-radius: inherit;
      }
      .PinturaDropdownPanel .PinturaDropdownOption {
        transition: background-color 0.1s;
        border-radius: inherit;
      }
      .PinturaDropdownPanel .PinturaDropdownOption label {
        display: block;
        margin: 0;
        border-radius: inherit;
        white-space: nowrap;
      }
      .PinturaDropdownPanel .PinturaDropdownOption svg {
        margin-right: 0.25em;
        margin-left: -0.5em;
        min-width: 1.5em;
      }
      .PinturaDropdownPanel .PinturaDropdownOption [slot] {
        display: flex;
        align-items: center;
        padding: 0.325em 0.75em;
      }
      .PinturaDropdownPanel .PinturaDropdownOptionLabel {
        font-size: 0.75em;
        line-height: 1.75;
        padding: 0 0.325em;
        margin-left: -0.325em;
      }
      .PinturaDropdownPanel .PinturaDropdownOptionGroup > span {
        display: block;
        padding: 0.75em 1em;
        text-transform: uppercase;
        font-size: 0.75em;
        color: rgba(0, 0, 0, 0.75);
      }
      .PinturaDropdownPanel [data-disabled='true'] {
        color: #999;
      }
      .PinturaDropdownPanel
        [data-selected='false']:not([data-disabled='true']):hover {
        background-color: rgba(0, 0, 0, 0.15);
      }
      .PinturaDropdownPanel [data-selected='true'] {
        color: #fff;
        background: #000;
      }
      .PinturaDropdownPanel
        [data-focus-visible]
        + label
        .PinturaDropdownOptionLabel {
        background-color: var(--color-focus-50);
        box-shadow: inset 0 0 0 1px var(--color-focus-100);
        border-radius: 0.25em;
      }
      .PinturaDropdownOption label {
        margin: 0;
      }
      .PinturaColorPickerPanel {
        padding: 0.5em;
        max-width: 14em;
        overflow: visible;
        touch-action: none;
      }
      .PinturaColorPickerPanel .PinturaColorPickerButton {
        outline: transparent;
      }
      .PinturaColorPickerPanel .PinturaColorPickerButton[data-focus-visible] {
        box-shadow: inset 0 0 0 1px var(--color-foreground-70);
      }
      .PinturaColorPickerPanel .PinturaColorPreview {
        width: 1.25em;
        height: 1.25em;
        border-radius: 0.25em;
      }
      .PinturaColorPickerPanel .PinturaColorPreview span {
        border-radius: 0.2em;
        box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.25);
      }
      .PinturaColorPickerPanel .PinturaColorPresets legend {
        color: #777;
        margin: 0 0 0.25em 0.3125em;
        font-size: 0.75em;
      }
      .PinturaColorPickerPanel
        .PinturaColorPresetsGrid
        .PinturaRadioGroupOptions {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
      }
      .PinturaColorPickerPanel .PinturaColorPresetsGrid .PinturaDropdownOption {
        display: block;
        padding: 0.25em;
      }
      .PinturaColorPickerPanel
        .PinturaColorPresetsGrid
        .PinturaDropdownOption
        label,
      .PinturaColorPickerPanel
        .PinturaColorPresetsGrid
        .PinturaDropdownOption
        label
        span {
        display: block;
        cursor: var(--button-cursor);
      }
      .PinturaColorPickerPanel
        .PinturaColorPresetsGrid
        input[data-focus-visible]
        + label
        .PinturaColorPreview:after {
        position: absolute;
        left: -0.3125em;
        right: -0.3125em;
        top: -0.3125em;
        bottom: -0.3125em;
        border-radius: inherit;
        pointer-events: none;
        content: '';
        background-color: var(--color-focus-50);
        box-shadow: inset 0 0 0 1px var(--color-focus-100);
      }
      .PinturaColorPickerPanel .PinturaSlider {
        margin-left: -0.325em;
        margin-right: -0.325em;
      }
      .PinturaColorPickerPanel .PinturaPicker {
        width: 100%;
        padding-bottom: 0.5em;
      }
      .PinturaColorPickerPanel .PinturaPicker .PinturaPickerKnob,
      .PinturaColorPickerPanel .PinturaPicker .PinturaSliderKnob {
        border-radius: 9999em;
        box-shadow: inset 0 0.06125em 0.06125em rgba(0, 0, 0, 0.1),
          0 0 0 0.125em #fff, 0 0.1875em 0.25em rgba(0, 0, 0, 0.35),
          0 -0.125em 0.25em rgba(0, 0, 0, 0.1);
      }
      .PinturaColorPickerPanel .PinturaPicker .PinturaPickerKnob {
        pointer-events: none;
        position: absolute;
        z-index: 1;
        left: 0;
        top: 0;
        margin-left: -0.625em;
        margin-top: -0.625em;
        width: 1.25em;
        height: 1.25em;
        visibility: visible;
        outline: none;
      }
      .PinturaColorPickerPanel
        .PinturaPicker
        .PinturaPickerKnob[data-focus-visible]:after {
        position: absolute;
        left: -0.3125em;
        right: -0.3125em;
        top: -0.3125em;
        bottom: -0.3125em;
        border-radius: inherit;
        pointer-events: none;
        content: '';
        background-color: var(--color-focus-50);
        box-shadow: inset 0 0 0 1px var(--color-focus-100);
      }
      .PinturaColorPickerPanel .PinturaPicker .PinturaPickerKnobController {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        visibility: hidden;
      }
      .PinturaColorPickerPanel .PinturaPicker .PinturaSaturationPicker {
        position: relative;
        border-radius: var(--border-radius) var(--border-radius) 0 0;
        margin: -0.5em -0.5em 0.5em;
        height: 7em;
        background-image: linear-gradient(180deg, transparent, #000),
          linear-gradient(90deg, #fff, transparent);
      }
      .PinturaColorPickerPanel
        .PinturaPicker
        .PinturaHuePicker
        .PinturaSliderTrack {
        background-image: linear-gradient(
          90deg,
          red,
          #ff0,
          #0f0,
          #0ff,
          #00f,
          #f0f,
          red
        );
      }
      .PinturaColorPickerPanel
        .PinturaPicker
        .PinturaOpacityPicker
        .PinturaSliderTrack:before {
        position: absolute;
        content: '';
        display: block;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        border-radius: inherit;
        background-color: #fff;
        background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='8' height='8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h4v4H0zm4 4h4v4H4z' fill='%23E5E5E5'/%3E%3C/svg%3E");
      }
      .PinturaColorPickerPanel .PinturaPicker .PinturaOpacityPicker {
        margin-top: 0.5em;
      }
      .PinturaPanel[data-util='filter'] .PinturaScrollable {
        width: 100%;
        max-width: 40em;
        min-height: 5.5em;
      }
      .PinturaPanel[data-util='filter']
        [data-layout='row']
        > .PinturaRadioGroupOptions
        > li {
        margin: 0 0.5em;
      }
      .PinturaPanel[data-util='filter']
        [data-layout='row']
        > .PinturaRadioGroupOptions
        > li:first-of-type {
        margin-left: 0;
      }
      .PinturaPanel[data-util='filter']
        [data-layout='row']
        > .PinturaRadioGroupOptions
        > li:last-child {
        margin-right: 0;
      }
      .PinturaPanel[data-util='filter'] .PinturaRadioGroupOptionGroupLabel {
        width: 1px;
        height: 1px;
        position: absolute;
        font-size: 0;
        pointer-events: none;
      }
      .PinturaPanel[data-util='filter'] .PinturaFilterPreview {
        border-radius: 0;
        transition: border-radius 1ms;
      }
      .PinturaPanel[data-util='filter'] .PinturaFilterOption {
        border-radius: 0;
      }
      .PinturaPanel[data-util='filter']
        .PinturaRadioGroupOptions
        .PinturaRadioGroupOption:first-of-type
        .PinturaFilterPreview {
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
      }
      .PinturaPanel[data-util='filter']
        .PinturaRadioGroupOptions
        .PinturaRadioGroupOption:first-of-type
        .PinturaFilterOption {
        border-bottom-left-radius: var(--border-radius);
      }
      .PinturaPanel[data-util='filter']
        .PinturaRadioGroupOptions
        .PinturaRadioGroupOption:last-of-type
        .PinturaFilterPreview {
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
      }
      .PinturaPanel[data-util='filter']
        .PinturaRadioGroupOptions
        .PinturaRadioGroupOption:last-of-type
        .PinturaFilterOption {
        border-bottom-right-radius: var(--border-radius);
      }
      .PinturaPanel[data-util='filter'] .PinturaRadioGroupOptionGroup {
        display: flex;
        flex-direction: column-reverse;
      }
      .PinturaPanel[data-util='filter'] .PinturaFilterOption {
        cursor: var(--button-cursor);
        margin-bottom: 1em;
      }
      .PinturaPanel[data-util='filter'] .PinturaFilterOption span {
        display: block;
        text-align: center;
        padding: 0 0.3125em;
        line-height: 1.75;
        max-width: 100%;
        font-size: 0.625em;
        font-weight: 400;
        margin-left: 1px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .PinturaPanel[data-util='filter'] .PinturaFilterPreview:before {
        transition: background-color 0.1s, color 0.1s;
      }
      .PinturaPanel[data-util='filter']
        [data-selected='true']
        .PinturaFilterOption
        .PinturaFilterPreview {
        position: relative;
        z-index: 1;
      }
      .PinturaPanel[data-util='filter']
        [data-selected='true']
        .PinturaFilterOption
        .PinturaFilterPreview:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0.35;
        border-radius: inherit;
        background-color: var(--color-primary);
      }
      .PinturaPanel[data-util='filter']
        [data-focus-visible]
        + label
        > .PinturaFilterOption
        span {
        background-color: var(--color-focus-50);
        box-shadow: inset 0 0 0 1px var(--color-focus-100);
        border-radius: 0.25em;
      }
      .PinturaPanel[data-util='filter'] .PinturaFilterOption,
      .PinturaPanel[data-util='filter'] .PinturaFilterPreview {
        width: 3.75em;
        height: 4.5em;
      }
      .PinturaRoot[data-env~='is-compact']
        .PinturaPanel[data-util='filter']
        .PinturaUtilFooter
        > div {
        padding: 0;
      }
      .PinturaRoot[data-env~='is-compact']
        .PinturaPanel[data-util='filter']
        .PinturaFilterOption,
      .PinturaRoot[data-env~='is-compact']
        .PinturaPanel[data-util='filter']
        .PinturaFilterPreview {
        width: 2.875em;
        height: 3.5em;
      }
      .PinturaRoot[data-env~='is-compact']
        .PinturaPanel[data-util='filter']
        .PinturaFilterOption
        span {
        font-size: 0.5em;
      }
      .PinturaRoot[data-env~='is-compact']
        .PinturaPanel[data-util='filter']
        .PinturaScrollable {
        min-height: 4.5em;
      }
      .PinturaPanel[data-util='frame'] .PinturaShapeStyleEditor {
        min-height: 3.375em;
      }
      .PinturaPanel[data-util='frame'] .PinturaRadioGroupOption {
        margin: 1em 1em 0 0;
        padding: 0.125em;
        border: 1px dashed var(--color-foreground-15);
        color: var(--color-foreground-70);
      }
      .PinturaPanel[data-util='frame'] .PinturaRadioGroupOption span {
        color: var(--color-foreground-90);
      }
      .PinturaPanel[data-util='frame'] .PinturaRadioGroupOption label {
        font-size: 0.75em;
      }
      .PinturaPanel[data-util='frame'] .PinturaRadioGroupOption img,
      .PinturaPanel[data-util='frame'] .PinturaRadioGroupOption svg {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        -o-object-fit: contain;
        object-fit: contain;
      }
      .PinturaPanel[data-util='frame'] [data-selected='true'] {
        border-color: var(--color-primary);
        color: var(--color-primary);
      }
      .PinturaPanel[data-util='frame'] [data-selected='true'] span {
        color: var(--color-foreground-90);
      }
      .PinturaPanel[data-util='frame']
        [data-layout='row']
        > .PinturaRadioGroupOptions
        > li {
        margin: 0 0.5em;
      }
      .PinturaPanel[data-util='frame']
        [data-layout='row']
        > .PinturaRadioGroupOptions
        > li:first-of-type {
        margin-left: 0;
      }
      .PinturaPanel[data-util='frame']
        [data-layout='row']
        > .PinturaRadioGroupOptions
        > li:last-child {
        margin-right: 0;
      }
      .PinturaPanel[data-util='frame'] .PinturaRadioGroupOptionGroupLabel {
        width: 1px;
        height: 1px;
        position: absolute;
        font-size: 0;
      }
      .PinturaPanel[data-util='frame'] .PinturaRadioGroupOptionGroup {
        display: flex;
        flex-direction: column-reverse;
      }
      .PinturaPanel[data-util='frame'] .PinturaRadioGroupOption {
        cursor: var(--button-cursor);
        margin-bottom: 1em;
      }
      .PinturaPanel[data-util='frame'] .PinturaRadioGroupOption span {
        display: block;
        text-align: center;
        padding: 0 1.5em;
        font-size: 0.625em;
        font-weight: 400;
      }
      .PinturaPanel[data-util='frame']
        [data-focus-visible]
        + label
        > .PinturaRadioGroupOption
        span {
        background-color: var(--color-focus-50);
        box-shadow: inset 0 0 0 1px var(--color-focus-100);
        border-radius: 0.25em;
      }
      .PinturaPanel[data-util='frame'] .PinturaRadioGroupOption {
        position: relative;
        width: 3em;
        height: 4em;
      }
      .PinturaPanel[data-util='frame'] .PinturaRadioGroupOption div {
        position: absolute;
        outline-color: currentColor;
        border-color: currentColor;
      }
      .PinturaPanel[data-util='frame'] .PinturaRadioGroupOption div[slot] {
        overflow: hidden;
        left: -1px;
        top: -1px;
        bottom: -1px;
        right: -1px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .PinturaRoot[data-env~='is-compact']
        .PinturaPanel[data-util='frame']
        .PinturaUtilFooter
        > div {
        padding: 0;
      }
      .PinturaRoot[data-env~='is-compact']
        .PinturaPanel[data-util='frame']
        .PinturaRadioGroupOption {
        width: 2.25em;
        height: 3em;
      }
      .PinturaRoot[data-env~='is-compact']
        .PinturaPanel[data-util='frame']
        .PinturaRadioGroupOption
        span {
        font-size: 0.5em;
      }
      .PinturaPanel[data-util='crop'] .PinturaStage {
        touch-action: none;
      }
      .PinturaPanel[data-util='crop'] .PinturaImageInfo {
        position: absolute;
        right: 1em;
        bottom: 1em;
      }
      .PinturaPanel[data-util='crop'] .PinturaButtonCenter {
        --size: 3em;
        position: absolute;
        left: 0;
        top: 0;
        width: var(--size);
        height: var(--size);
        z-index: 1;
        line-height: 0;
        margin-top: calc(var(--size) * (-0.5));
        margin-left: calc(var(--size) * (-0.5));
        overflow: hidden;
        color: #000;
        background: hsla(0, 0%, 100%, 0.8);
        border-radius: 50%;
        -webkit-backdrop-filter: var(--backdrop-filter-bright);
        backdrop-filter: var(--backdrop-filter-bright);
        outline: none;
      }
      .PinturaPanel[data-util='crop'] .PinturaButtonCenter[data-focus-visible] {
        background-color: var(--color-focus-50);
        box-shadow: inset 0 0 0 1px var(--color-focus-100);
      }
      .PinturaRoot[data-env~='short']
        .PinturaPanel[data-util='crop']
        .PinturaUtilFooter {
        padding-bottom: 0.5em;
      }
      .PinturaPanel[data-util='resize'] form {
        display: flex;
        justify-content: center;
        padding: 0 1em;
      }
      .PinturaPanel[data-util='resize'] .PinturaFormInner {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .PinturaPanel[data-util='resize'] .PinturaFormInner > button {
        position: absolute;
        left: 100%;
        margin-left: 1em;
      }
      .PinturaPanel[data-util='resize'] .PinturaFieldsetInner {
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      .PinturaPanel[data-util='resize'] .PinturaResizeLabel {
        font-size: 0.75em;
      }
      .PinturaPanel[data-util='resize'] .PinturaDropdownButton {
        margin-left: 0.5em;
        margin-right: 0.5em;
        -webkit-backdrop-filter: var(--backdrop-filter-dark);
        backdrop-filter: var(--backdrop-filter-dark);
        background-color: var(--color-foreground-5);
        border-radius: var(--border-radius-round);
        box-shadow: inset 0 0 0 1px var(--color-foreground-5);
        transition: background-color 0.1s;
      }
      .PinturaPanel[data-util='resize'] .PinturaDropdownButton:hover {
        background-color: var(--color-foreground-10);
      }
      .PinturaPanel[data-util='resize']
        .PinturaDropdownButton
        .PinturaButtonLabel {
        display: block;
        line-height: 2.65;
        padding: 0 1em;
        font-variant-numeric: tabular-nums;
        font-size: 0.75em;
        font-weight: 400;
      }
      .PinturaPanel[data-util='resize']
        .PinturaDropdownButton
        .PinturaButtonLabel:after {
        content: '▼';
        font-size: 0.6875em;
        margin-left: 0.75em;
        position: relative;
        top: -0.125em;
        margin-right: -0.25em;
        pointer-events: none;
      }
      .PinturaPanel[data-util='resize'] input[type='checkbox'] + label {
        padding: 0 0.125em;
        outline: transparent;
        display: block;
        cursor: pointer;
      }
      .PinturaPanel[data-util='resize']
        input[type='checkbox'][data-focus-visible]
        + label {
        background-color: var(--color-focus-50);
        box-shadow: inset 0 0 0 1px var(--color-focus-100);
      }
      .PinturaInputDimension {
        display: inline-flex;
        align-items: center;
        position: relative;
      }
      .PinturaInputDimension label {
        position: absolute;
        right: 0.625em;
        font-size: 0.75em;
        text-transform: uppercase;
        pointer-events: none;
        color: var(--color-foreground-20);
        z-index: 1;
      }
      .PinturaInputDimension button,
      .PinturaInputDimension input,
      .PinturaInputDimension label {
        font-size: 0.75em;
        font-weight: 400;
      }
      .PinturaInputDimension button,
      .PinturaInputDimension input {
        -webkit-appearance: none;
        appearance: none;
        -moz-appearance: textfield;
        box-sizing: border-box;
        font-variant-numeric: tabular-nums;
        padding: 0.625em 0 0.625em 0.625em;
        width: 100%;
        max-width: 7em;
        outline: transparent;
        border-radius: var(--border-radius);
        box-shadow: none;
        border: 1px solid var(--color-foreground-20);
        transition: background-color 0.1s ease-in-out, color 0.1s ease-in-out,
          border-color 0.1s ease-in-out;
      }
      .PinturaInputDimension button::-moz-selection,
      .PinturaInputDimension input::-moz-selection {
        background-color: var(--color-foreground-20);
      }
      .PinturaInputDimension button::selection,
      .PinturaInputDimension input::selection {
        background-color: var(--color-foreground-20);
      }
      .PinturaInputDimension button:hover,
      .PinturaInputDimension input:hover {
        border-color: var(--color-foreground-30);
      }
      .PinturaInputDimension button:focus,
      .PinturaInputDimension input:focus {
        border-color: var(--color-focus-100);
      }
      .PinturaInputDimension input {
        -webkit-backdrop-filter: var(--backdrop-filter-dark);
        backdrop-filter: var(--backdrop-filter-dark);
        background-color: var(--color-foreground-5);
      }
      .PinturaInputDimension input:-moz-placeholder-shown {
        border-style: dashed;
      }
      .PinturaInputDimension input:-ms-input-placeholder {
        border-style: dashed;
      }
      .PinturaInputDimension input:placeholder-shown {
        border-style: dashed;
      }
      .PinturaInputDimension input::-moz-placeholder {
        color: var(--color-foreground-30);
      }
      .PinturaInputDimension input:-ms-input-placeholder {
        color: var(--color-foreground-30);
      }
      .PinturaInputDimension input::placeholder {
        color: var(--color-foreground-30);
      }
      .PinturaInputDimension input[data-state='invalid'] {
        border-color: var(--color-error-75);
        box-shadow: inset 0 0 0.25em var(--color-error-25),
          0 0 0.25em var(--color-error-50);
      }
      .PinturaInputDimension button {
        width: 10em;
        min-height: 2.65em;
      }
      .PinturaInputDimension input::-webkit-inner-spin-button,
      .PinturaInputDimension input::-webkit-outer-spin-button {
        -webkit-appearance: none;
      }
      .PinturaInputDimension input::-ms-clear {
        display: none;
      }
      .PinturaModal {
        --safe-area-inset-top: env(safe-area-inset-top);
        --safe-area-inset-bottom: env(safe-area-inset-bottom);
        --editor-modal-border-radius: 0;
        --editor-modal-overlay-opacity: 0.95;
        --editor-modal-shadow: 0 1em 2em -1em rgba(0, 0, 0, 0.25),
          0 1.5em 1.5em -2em rgba(0, 0, 0, 0.5);
        --editor-modal-outline: inset 0 0 0 1px var(--color-foreground-3);
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100vh;
        z-index: 2147483646;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(
          var(--color-background),
          var(
            --editor-modal-overlay-opacity,
            var(--editor-modal-overlay-opacity-default, 0.95)
          )
        );
      }
      .PinturaModal > .PinturaRoot[data-env~='is-centered'] {
        box-shadow: var(--editor-modal-shadow);
        border-radius: var(--editor-modal-border-radius);
      }
      .PinturaModal > .PinturaRoot[data-env~='is-centered']:after {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        pointer-events: none;
        border-radius: inherit;
        content: '';
        box-shadow: var(--editor-modal-outline);
        z-index: 2147483646;
      }
      .PinturaModal[style*='--viewport-pad-footer:1'] {
        box-sizing: border-box;
        padding-bottom: 44px;
      }
      .PinturaModal + .PinturaModal {
        --editor-modal-overlay-opacity-default: 0.75;
      }
      .PinturaModal + .PinturaModal .PinturaRoot:not([data-env~='is-compact']) {
        --editor-max-width-default: calc(100vw - 8em);
        --editor-max-height-default: calc(100vh - 8em);
      }
      .PinturaCanvas canvas {
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
      }
      .PinturaDetailsPanel {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2147483647;
        width: -webkit-max-content;
        width: -moz-max-content;
        width: max-content;
        cursor: auto;
        outline: transparent;
        box-shadow: 0 0.125em 0.25em rgba(0, 0, 0, 0.25),
          0 0.125em 0.75em rgba(0, 0, 0, 0.15),
          0 0.125em 0.125em rgba(0, 0, 0, 0.1);
        border-radius: var(--border-radius);
        color: #111;
        background: #fff;
      }
      .PinturaDetailsPanelTip {
        position: absolute;
        width: 0.5em;
        height: 0.5em;
        margin-left: -0.25em;
        margin-top: -0.25em;
        background: #fff;
        z-index: -1;
      }
      .PinturaScrollable {
        --scrollable-feather-start-opacity: 0;
        --scrollable-feather-end-opacity: 0;
        --scrollable-feather-size: 2em;
        contain: paint;
        overflow: hidden;
      }
      .PinturaScrollable:focus {
        outline: transparent;
      }
      .PinturaScrollable > div {
        position: relative;
        display: inline-flex;
        vertical-align: top;
      }
      .PinturaScrollable {
        touch-action: none;
      }
      .PinturaScrollable[data-direction='x'] {
        max-width: 100%;
        --mask-angle: 90deg;
      }
      .PinturaScrollable[data-direction='y'] {
        max-height: 100%;
        --mask-angle: 180deg;
      }
      .PinturaScrollable[data-state~='overflows'] {
        -webkit-mask: linear-gradient(
          var(--mask-angle),
          rgba(0, 0, 0, var(--scrollable-feather-start-opacity)),
          #000 var(--scrollable-feather-size),
          #000 calc(100% - var(--scrollable-feather-size)),
          rgba(0, 0, 0, var(--scrollable-feather-end-opacity))
        );
        mask: linear-gradient(
          var(--mask-angle),
          rgba(0, 0, 0, var(--scrollable-feather-start-opacity)),
          #000 var(--scrollable-feather-size),
          #000 calc(100% - var(--scrollable-feather-size)),
          rgba(0, 0, 0, var(--scrollable-feather-end-opacity))
        );
      }
      .PinturaScrollable[data-state~='scrolling'] > div * {
        pointer-events: none;
      }
      .PinturaTabPanels {
        position: relative;
        flex: 1;
      }
      .PinturaTabPanel {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
      }
      .PinturaTabPanel:not([hidden]) {
        z-index: 2;
        outline: transparent;
      }
      .PinturaTabPanel[hidden] {
        display: block !important;
        z-index: 1;
        pointer-events: none;
      }
      .PinturaTabPanel[data-inert='true'] {
        visibility: hidden;
      }
      .PinturaTabPanel[data-inert='true'] [data-inert] {
        visibility: hidden !important;
      }
      .PinturaTabList {
        display: flex;
        justify-content: center;
      }
      .PinturaTabList button {
        display: flex;
        align-items: center;
        flex-direction: column;
        outline: transparent;
        cursor: var(--button-cursor);
        -webkit-tap-highlight-color: transparent;
      }
      .PinturaTabList button > * {
        transition: filter 0.2s ease-out;
      }
      .PinturaTabList button[disabled] > * {
        filter: var(--filter-disabled);
      }
      .PinturaPanel {
        position: relative;
        z-index: 1;
        height: 100%;
        display: flex;
        flex: 1;
        flex-direction: column;
        contain: layout size;
      }
      .PinturaProgressIndicator {
        position: relative;
        display: block;
        width: 1.25em;
        height: 1.25em;
      }
      .PinturaProgressIndicator .PinturaProgressIndicatorFill {
        stroke-dashoffset: 0;
      }
      .PinturaProgressIndicator[data-status='busy'] svg {
        -webkit-animation: image_editor_spin 1s linear infinite;
        animation: image_editor_spin 1s linear infinite;
      }
      .PinturaProgressIndicator[data-status='busy']
        .PinturaProgressIndicatorFill {
        stroke-dashoffset: -26.5;
        stroke-dasharray: 26.5 53;
        transition: stroke-dashoffset 0.5s linear, stroke-dasharray 0.5s linear;
      }
      @-webkit-keyframes image_editor_spin {
        0% {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(1turn);
        }
      }
      @keyframes image_editor_spin {
        0% {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(1turn);
        }
      }
      @media only screen and (-webkit-min-device-pixel-ratio: 3) {
        .PinturaRoot[data-env~='is-ios'] .PinturaProgressIndicator svg {
          transform-origin: 49% 49%;
        }
      }
      .PinturaButton {
        white-space: nowrap;
        flex-shrink: 0;
        -webkit-tap-highlight-color: transparent;
        cursor: var(--button-cursor);
      }
      .PinturaButton > span {
        display: inline-flex;
        align-items: center;
        vertical-align: top;
        min-height: 1em;
      }
      .PinturaButton svg + .PinturaButtonLabel {
        margin-left: 0.5em;
      }
      .PinturaButton[disabled] {
        cursor: default;
      }
      .PinturaButton:not(.PinturaButtonIconOnly) svg:first-of-type {
        margin-left: -0.25em;
      }
      .PinturaColorPreview {
        --color: transparent;
        color: var(--color);
        position: relative;
        pointer-events: none;
        background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='8' height='8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h4v4H0zm4 4h4v4H4z' fill='%23E5E5E5'/%3E%3C/svg%3E");
      }
      .PinturaColorPreview span {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background-color: var(--color);
        border-radius: inherit;
      }
      .PinturaSlider {
        position: relative;
        --track-offset-x: 0.5em;
        --track-offset-y: 0.5em;
        --track-size: 1.5em;
        --knob-size: 1em;
        --knob-margin-top: 0em;
        --knob-margin-right: 0em;
        --knob-margin-bottom: 0em;
        --knob-margin-left: 0em;
        display: flex;
        align-items: center;
        touch-action: none;
      }
      .PinturaSlider[data-direction='y'] {
        flex-direction: column;
      }
      .PinturaSlider .PinturaSliderControl {
        position: relative;
        flex: 1;
      }
      .PinturaSlider > button {
        position: relative;
        z-index: 1;
        width: var(--track-size);
        height: var(--track-size);
        overflow: hidden;
        cursor: pointer;
        flex-shrink: none;
      }
      .PinturaSlider > button svg {
        width: 1.25em;
        height: 1.25em;
        margin: 0.125em;
        stroke-width: 0.125em;
        stroke: #aaa;
      }
      .PinturaSlider > button:first-of-type {
        order: 2;
        padding-right: 0.125em;
        margin-left: -0.325em;
      }
      .PinturaSlider > button:last-of-type {
        order: 1;
        padding-left: 0.125em;
        margin-right: -0.325em;
      }
      .PinturaSlider > .PinturaSliderControl {
        order: 2;
      }
      .PinturaSlider .PinturaSliderKnob {
        left: 0;
        top: 50%;
        border-radius: 9999em;
        visibility: visible;
        background-color: #333;
        width: var(--knob-size);
        height: var(--knob-size);
        margin-left: calc(var(--knob-size) * -0.5);
        margin-top: calc(var(--knob-size) * -0.5);
      }
      .PinturaSlider .PinturaSliderKnob,
      .PinturaSlider .PinturaSliderKnobController,
      .PinturaSlider .PinturaSliderTrack {
        pointer-events: none;
        position: absolute;
      }
      .PinturaSlider .PinturaSliderTrack {
        top: var(--track-offset-y);
        bottom: var(--track-offset-y);
        left: var(--track-offset-x);
        right: var(--track-offset-x);
      }
      .PinturaSlider .PinturaSliderKnobController {
        visibility: hidden;
        top: calc(var(--track-offset-y) + var(--knob-margin-top));
        bottom: calc(var(--track-offset-y) + var(--knob-margin-bottom));
        left: calc(var(--track-offset-x) + var(--knob-margin-left));
        right: calc(var(--track-offset-x) + var(--knob-margin-right));
      }
      .PinturaSlider .PinturaSliderTrack {
        border-radius: 9999em;
      }
      .PinturaSlider[data-direction='x'] input[type='range'] {
        height: var(--track-size);
        margin-left: 0.5em;
        width: calc(100% - 1em);
      }
      .PinturaSlider[data-direction='y'] input[type='range'] {
        width: var(--track-size);
        margin-top: 0.5em;
        height: calc(100% - 1em);
      }
      .PinturaSlider input[type='range'] {
        -webkit-appearance: none;
        display: block;
      }
      .PinturaSlider input[type='range']::-webkit-slider-runnable-track {
        background: transparent;
      }
      .PinturaSlider input[type='range']::-webkit-slider-thumb {
        -webkit-appearance: none;
        line-height: 0;
        margin: 0;
        padding: 0;
        border: none;
      }
      .PinturaSlider input[type='range']::-moz-range-thumb {
        line-height: 0;
        margin: 0;
        padding: 0;
        border: none;
      }
      .PinturaSlider input[type='range']::-ms-thumb {
        line-height: 0;
        margin: 0;
        padding: 0;
        border: none;
      }
      .PinturaSlider input[type='range']::-ms-ticks-before,
      .PinturaSlider input[type='range']::-ms-tooltip {
        display: none;
      }
      .PinturaSlider input[type='range']::-ms-ticks-after {
        display: none;
      }
      .PinturaSlider input[type='range']::-ms-track {
        color: transparent;
        border: none;
        background: transparent;
      }
      .PinturaSlider input[type='range']::-ms-fill-lower,
      .PinturaSlider input[type='range']::-ms-fill-upper {
        background: transparent;
      }
      .PinturaSlider input[type='range']:focus {
        outline: transparent;
      }
      .PinturaSlider
        input[type='range'][data-focus-visible]
        ~ .PinturaSliderKnobController
        .PinturaSliderKnob:after {
        position: absolute;
        left: -0.3125em;
        right: -0.3125em;
        top: -0.3125em;
        bottom: -0.3125em;
        border-radius: inherit;
        content: '';
        background-color: var(--color-focus-50);
        box-shadow: inset 0 0 0 1px var(--color-focus-100);
        pointer-events: none;
      }
      .PinturaRangeInput {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 24em;
        height: 3.5em;
        margin: auto;
        max-width: 90%;
        touch-action: none;
        --range-input-feather-left: 2em;
        --range-input-feather-right: 2em;
        --range-input-mask-from: 0%;
        --range-input-mask-to: 100%;
        --range-input-mask-color: rgba(0, 0, 0, 0.25);
        --range-input-line-color: var(--color-foreground-15);
        outline: transparent;
      }
      .PinturaRangeInput[data-focus-visible]:after {
        background-color: var(--color-focus-50);
        box-shadow: inset 0 0 0 1px var(--color-focus-100);
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: calc(50% - 1em);
        height: 2em;
        border-radius: 0.25em;
      }
      .PinturaRangeInputInner {
        position: relative;
        overflow: hidden;
        height: 100%;
        width: 100%;
        contain: strict;
        -webkit-mask: linear-gradient(
          90deg,
          transparent 0,
          #000 var(--range-input-feather-left),
          #000 calc(50% - 3em),
          transparent 50%,
          #000 calc(50% + 3em),
          #000 calc(100% - var(--range-input-feather-right)),
          transparent
        );
        mask: linear-gradient(
          90deg,
          transparent 0,
          #000 var(--range-input-feather-left),
          #000 calc(50% - 3em),
          transparent 50%,
          #000 calc(50% + 3em),
          #000 calc(100% - var(--range-input-feather-right)),
          transparent
        );
      }
      .PinturaRangeInputMeter {
        height: 100%;
      }
      .PinturaRangeInput .PinturaRangeInputMeter svg {
        display: block;
        pointer-events: none;
        fill: currentColor;
      }
      .PinturaRangeInput > .PinturaRangeInputValue {
        position: absolute;
        z-index: 1;
        pointer-events: none;
        top: calc(50% - 0.6875em);
        left: calc(50% - 1.75em);
        width: 3.5em;
        height: 1.5em;
        overflow: hidden;
        contain: strict;
        text-align: center;
        font-size: 0.75em;
        font-variant-numeric: tabular-nums;
        font-feature-settings: 'tnum';
        font-family: Tahoma, Geneva, Verdana, sans-serif;
      }
      .PinturaRangeInput > .PinturaRangeInputReset {
        position: absolute;
        left: calc(50% - 1.0625em);
        top: 0;
        margin-top: 0.125em;
        padding: 0;
        z-index: 1;
        width: 2em;
        overflow: hidden;
        color: transparent !important;
        transition: opacity 0.25s;
        opacity: 0.35;
        outline: transparent;
        cursor: var(--button-cursor);
      }
      .PinturaRangeInput > .PinturaRangeInputReset:hover {
        opacity: 0.5;
      }
      .PinturaRangeInput > .PinturaRangeInputReset[data-focus-visible] {
        opacity: 1;
      }
      .PinturaRangeInput > .PinturaRangeInputReset[data-focus-visible]:before {
        content: '';
        pointer-events: none;
        position: absolute;
        left: calc(50% - 0.5em);
        top: calc(50% - 0.5em);
        height: 1em;
        width: 1em;
        z-index: 2;
        border-radius: 0.25em;
        background-color: var(--color-focus-50);
        box-shadow: inset 0 0 0 1px var(--color-focus-100);
      }
      .PinturaRangeInput > .PinturaRangeInputReset[disabled] {
        opacity: 0.15;
      }
      .PinturaRangeInput > .PinturaRangeInputReset:after {
        content: '';
        position: absolute;
        left: 50%;
        top: 20%;
        width: 1px;
        height: 60%;
        background: var(--color-foreground-100);
      }
      .PinturaRangeInputInner[data-value-limited] svg {
        -webkit-mask: linear-gradient(
          90deg,
          var(--range-input-mask-color) var(--range-mask-from),
          #000 var(--range-mask-from),
          #000 var(--range-mask-to),
          var(--range-input-mask-color) var(--range-mask-to)
        );
        mask: linear-gradient(
          90deg,
          var(--range-input-mask-color) var(--range-mask-from),
          #000 var(--range-mask-from),
          #000 var(--range-mask-to),
          var(--range-input-mask-color) var(--range-mask-to)
        );
      }
      .PinturaRangeInputInner[data-value-limited] svg rect {
        x: var(--range-mask-from);
        width: calc(var(--range-mask-to) - var(--range-mask-from));
        fill: var(--range-input-line-color);
      }
      .PinturaUtilMain {
        padding: 1em;
        min-height: 1px;
      }
      .PinturaUtilMain,
      .PinturaUtilMain > [slot] {
        flex: 1;
        display: flex;
        flex-direction: column;
      }
      .PinturaUtilMain > [slot] {
        align-items: center;
      }
      .PinturaUtilFooter {
        padding: 0 0 1em;
      }
      .PinturaUtilFooter > [slot]:empty {
        height: 1em;
      }
      .PinturaUtilFooter > [slot] {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: stretch;
      }
      .PinturaUtilFooter .PinturaRangeInput {
        margin-top: -0.25em;
      }
      .PinturaUtilFooter > [slot] > .PinturaControlList,
      .PinturaUtilFooter > [slot] > .PinturaControlListScroller {
        order: 1;
        margin-bottom: -0.1875em;
      }
      .PinturaUtilFooter
        .PinturaControlList
        [role='tab'][aria-selected='true']
        button {
        -webkit-backdrop-filter: var(--backdrop-filter-dark);
        backdrop-filter: var(--backdrop-filter-dark);
        background-color: var(--color-foreground-10);
        box-shadow: inset 0 0 0 1px var(--color-foreground-5);
      }
      .PinturaUtilFooter .PinturaControlList .PinturaControlListOption label,
      .PinturaUtilFooter .PinturaControlList [role='tab'] button {
        flex-direction: row;
        line-height: 1;
        padding: 0 0.75em;
        min-height: 1.75em;
        border-radius: var(--border-radius-round);
        transition: background-color 0.1s ease-out, color 0.1s ease-out,
          filter 0.2s ease-out;
        box-shadow: inset 0 0 0 1px var(--color-foreground-0);
        cursor: var(--button-cursor);
      }
      .PinturaUtilFooter
        .PinturaControlList
        .PinturaControlListOption
        label
        span,
      .PinturaUtilFooter .PinturaControlList [role='tab'] button span {
        font-size: 0.75em;
        font-weight: 400;
      }
      .PinturaUtilFooter
        .PinturaControlList
        .PinturaControlListOption
        label
        svg,
      .PinturaUtilFooter .PinturaControlList [role='tab'] button svg {
        width: 0.875em;
        font-size: 0.875em;
      }
      .PinturaUtilFooter
        .PinturaControlList
        .PinturaControlListOption
        label
        svg:not(:only-child),
      .PinturaUtilFooter
        .PinturaControlList
        [role='tab']
        button
        svg:not(:only-child) {
        margin-left: -0.25em;
        margin-right: 0.375em;
      }
      .PinturaUtilFooter
        .PinturaControlList
        .PinturaControlListOption
        label:hover,
      .PinturaUtilFooter .PinturaControlList [role='tab'] button:hover {
        box-shadow: inset 0 0 0 1px var(--color-foreground-10);
      }
      .PinturaUtilFooter
        .PinturaControlList
        .PinturaControlListOption
        label[data-focus-visible],
      .PinturaUtilFooter
        .PinturaControlList
        [role='tab']
        button[data-focus-visible] {
        background-color: var(--color-focus-50);
        box-shadow: inset 0 0 0 1px var(--color-focus-100);
      }
      .PinturaUtilFooter .PinturaControlListOption [slot],
      .PinturaUtilFooter .PinturaControlListOption label {
        display: flex;
        flex-direction: row;
        align-items: center;
      }
      .PinturaUtilFooter .PinturaControlListOption[data-selected='true'] label {
        background-color: var(--color-foreground-10);
        box-shadow: inset 0 0 0 1px var(--color-foreground-5);
      }
      .PinturaUtilFooter
        .PinturaControlListOption
        input[data-focus-visible]
        + label {
        background-color: var(--color-focus-50);
        box-shadow: inset 0 0 0 1px var(--color-focus-100);
      }
      .PinturaUtilFooter .PinturaControlListOption input[disabled] + label {
        filter: var(--filter-disabled);
      }
      .PinturaUtilFooter
        .PinturaControlList
        .PinturaControlListOption
        + .PinturaControlListOption,
      .PinturaUtilFooter .PinturaControlList > li + li {
        margin-left: 0.5em;
      }
      .PinturaUtilFooter .PinturaControlPanels {
        position: relative;
        width: 100%;
        max-width: 30em;
        min-height: 3.375em;
        margin: 0 auto;
        flex: auto;
      }
      .PinturaUtilFooter .PinturaControlPanel {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        visibility: visible;
        opacity: 1;
      }
      .PinturaUtilFooter .PinturaControlPanel[hidden] {
        display: block !important;
        visibility: hidden;
        transition-delay: 0s;
        pointer-events: none;
        opacity: 0;
      }
      .PinturaUtilFooter .PinturaControlList[data-layout='compact'] > * + * {
        margin-left: -1px;
      }
      .PinturaUtilFooter
        .PinturaControlList[data-layout='compact']
        > [role='tab']
        button {
        padding-left: 0.625em;
        padding-right: 0.625em;
        border-radius: 0;
        box-shadow: inset 0 0 0 1px var(--color-foreground-5);
      }
      .PinturaUtilFooter
        .PinturaControlList[data-layout='compact']
        > [role='tab']:only-child
        button {
        border-radius: var(--border-radius-round);
      }
      .PinturaUtilFooter
        .PinturaControlList[data-layout='compact']
        > [role='tab']:first-of-type:not(:only-child)
        button {
        padding-left: 0.75em;
        border-top-left-radius: var(--border-radius-round);
        border-bottom-left-radius: var(--border-radius-round);
      }
      .PinturaUtilFooter
        .PinturaControlList[data-layout='compact']
        > [role='tab']:last-child:not(:only-child)
        button {
        padding-right: 0.75em;
        border-top-right-radius: var(--border-radius-round);
        border-bottom-right-radius: var(--border-radius-round);
      }
      .PinturaRoot[data-env~='is-animated']
        .PinturaUtilFooter
        .PinturaControlPanel {
        transition: opacity 0.3s ease-in-out, visibility 0.3s linear;
        transition-delay: 0.1s;
      }
      .PinturaRoot[data-env~='overlay'] .PinturaUtilFooter {
        margin-bottom: 0.75em;
      }
      .PinturaRoot[data-env~='overlay']
        .PinturaUtilFooter
        .PinturaControlPanels {
        min-height: 1.375em;
        max-width: 20em;
      }
      .PinturaRoot[data-env~='overlay'] .PinturaUtilFooter .PinturaControlList {
        margin-top: 1em;
      }
      .PinturaRoot[data-env~='overlay']
        .PinturaUtilFooter
        .PinturaControlList
        > li
        + li {
        margin-left: 0;
      }
      .PinturaRoot[data-env~='overlay']
        .PinturaUtilFooter
        .PinturaControlList
        li[role='tab']
        span {
        font-size: 0.75em;
      }
      .PinturaRoot[data-env~='overlay']
        .PinturaUtilFooter
        .PinturaControlList
        li[role='tab']
        button {
        border-radius: 0;
        background-color: var(--color-background-50);
        -webkit-backdrop-filter: var(--backdrop-filter-bright);
        backdrop-filter: var(--backdrop-filter-bright);
        box-shadow: inset 0 0 0 1px var(--color-background-15),
          0 0.0625em 0.125em rgba(0, 0, 0, 0.25),
          0 0.125em 0.35em rgba(0, 0, 0, 0.35);
      }
      .PinturaRoot[data-env~='overlay']
        .PinturaUtilFooter
        .PinturaControlList
        li[role='tab']:first-of-type
        button {
        padding-left: 0.875em;
        border-top-left-radius: var(--border-radius-round);
        border-bottom-left-radius: var(--border-radius-round);
      }
      .PinturaRoot[data-env~='overlay']
        .PinturaUtilFooter
        .PinturaControlList
        li[role='tab']:last-child
        button {
        padding-right: 0.875em;
        border-top-right-radius: var(--border-radius-round);
        border-bottom-right-radius: var(--border-radius-round);
      }
      .PinturaRoot[data-env~='overlay']
        .PinturaUtilFooter
        .PinturaControlList
        li:not([aria-selected='true'])
        span {
        color: var(--color-foreground-40);
      }
      .PinturaRoot[data-env~='overlay']
        .PinturaUtilFooter
        .PinturaControlPanels {
        background-color: var(--color-background-50);
        -webkit-backdrop-filter: var(--backdrop-filter-bright);
        backdrop-filter: var(--backdrop-filter-bright);
        border-radius: var(--border-radius-round);
        box-shadow: inset 0 0 0 1px var(--color-background-15),
          0 0.0625em 0.125em rgba(0, 0, 0, 0.25),
          0 0.125em 0.35em rgba(0, 0, 0, 0.35);
      }
      .PinturaRoot[data-env~='overlay'] .PinturaUtilFooter .PinturaRangeInput {
        height: 1.5em;
        margin-top: 0;
      }
      .PinturaRoot[data-env~='overlay']
        .PinturaUtilFooter
        .PinturaRangeInputReset {
        opacity: 0;
      }
      .PinturaImageInfo {
        pointer-events: none;
      }
      .PinturaImageInfo p {
        width: 8em;
        height: 1.25em;
        contain: strict;
        overflow: hidden;
        font-variant-numeric: tabular-nums;
        font-feature-settings: 'tnum';
        font-family: Tahoma, Geneva, Verdana, sans-serif;
        text-align: right;
        line-height: 1;
        font-size: 0.75em;
      }
      .PinturaShapeStyleEditor {
        position: relative;
        width: 100%;
        min-height: 2.75em;
      }
      .PinturaShapeStyles {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
      }
      .PinturaShapeStyles:not([data-state~='overflows']) {
        display: flex;
        justify-content: center;
      }
      .PinturaShapeStyleList {
        display: flex;
      }
      .PinturaShapeStyleList .PinturaButton,
      .PinturaShapeStyleList .PinturaInput {
        outline: transparent;
      }
      .PinturaShapeStyleList .PinturaInput {
        padding: 0 0 0 0.625em;
        font-size: 0.75em;
        line-height: 2.25;
      }
      .PinturaShapeStyleList .PinturaShapeStyleLabel {
        line-height: 1.75;
        font-size: 0.625em;
        font-weight: 300;
        padding: 0 0.75em;
        text-transform: lowercase;
        pointer-events: none;
        text-align: center;
        color: var(--color-foreground-50);
        white-space: nowrap;
      }
      .PinturaShapeStyleList > .PinturaShapeStyle {
        border-radius: var(--border-radius-round);
      }
      .PinturaShapeStyleList > .PinturaShapeStyle + .PinturaShapeStyle {
        margin-left: 1em;
      }
      .PinturaShapeStyle {
        display: flex;
        flex-direction: column;
        align-items: stretch;
      }
      .PinturaShapeStyle .PinturaDetailsButton {
        border-radius: inherit;
      }
      .PinturaShapeStyle > .PinturaButton:hover,
      .PinturaShapeStyle > .PinturaButton[data-focus-visible] {
        position: relative;
        z-index: 1;
      }
      .PinturaShapeStyle > .PinturaColorPickerButton .PinturaButtonLabel {
        display: block;
        border-radius: inherit;
      }
      .PinturaShapeStyle > .PinturaColorPickerButton {
        display: flex;
        justify-content: center;
      }
      .PinturaShapeStyle .PinturaColorPreview {
        border-radius: inherit;
        width: 1.5em;
        height: 1.5em;
        background-color: #fff;
        background-size: 4px;
        border: 1px solid var(--color-background-100);
        margin-top: -1px;
      }
      .PinturaShapeStyle .PinturaColorPreview span {
        border-radius: inherit;
        box-shadow: inset 0 0 0 1px var(--color-foreground-5);
      }
      .PinturaShapeStyle [data-focus-visible] .PinturaColorPreview span:before {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        border-radius: inherit;
        background-color: var(--color-focus-50);
        box-shadow: inset 0 0 0 1px var(--color-focus-100);
        content: '';
        z-index: 1;
      }
      .PinturaShapeStyle
        > .PinturaColorPickerButtonStroke
        .PinturaColorPreview
        span:after {
        position: absolute;
        left: 6px;
        top: 6px;
        right: 6px;
        bottom: 6px;
        background: var(--color-background-100);
        border-radius: inherit;
        box-shadow: 0 0 0 1px var(--color-foreground-5);
        content: '';
      }
      .PinturaShapeStyle > .PinturaDropdownButton .PinturaButtonLabel,
      .PinturaShapeStyle > .PinturaRadioGroup .PinturaButtonLabel,
      .PinturaShapeStyle > .PinturaRadioGroupOption label,
      .PinturaShapeStyle > .PinturaSliderButton .PinturaButtonLabel {
        display: block;
        line-height: 2.25;
        padding: 0 1em;
        font-size: 0.6875em;
      }
      .PinturaShapeStyle
        > .PinturaButton:not(.PinturaColorPickerButton)[data-focus-visible] {
        background-color: var(--color-focus-50);
        box-shadow: inset 0 0 0 1px var(--color-focus-100);
      }
      .PinturaShapeStyle .PinturaInputField {
        text-align: right;
        padding: 0 0.75em;
        width: 3em;
        height: 2em;
        box-shadow: inset 0 0 0 1px var(--color-foreground-5);
        border-radius: var(--border-radius);
      }
      .PinturaShapeStyle > .PinturaDropdownButton {
        box-shadow: inset 0 0 0 1px var(--color-foreground-5);
        transition: background-color 0.1s;
      }
      .PinturaShapeStyle > .PinturaDropdownButton:hover {
        background-color: var(--color-foreground-10);
      }
      .PinturaShapeStyle > .PinturaDropdownButton .PinturaButtonLabel:after {
        content: '▼';
        font-size: 0.6875em;
        margin-left: 0.75em;
        position: relative;
        top: -0.125em;
        margin-right: -0.25em;
        pointer-events: none;
      }
      .PinturaShapeStyle > .PinturaRadioGroup > .PinturaRadioGroupOptions {
        flex-direction: row;
      }
      .PinturaShapeStyle
        > .PinturaRadioGroup
        > .PinturaRadioGroupOptions
        label {
        cursor: var(--button-cursor);
        display: flex;
        height: 1.5em;
        align-items: center;
        padding: 0 0.25em;
        box-shadow: inset 0 0 0 1px var(--color-foreground-5);
        transition: background-color 0.1s;
      }
      .PinturaShapeStyle
        > .PinturaRadioGroup
        > .PinturaRadioGroupOptions
        label:hover {
        background-color: var(--color-foreground-20);
      }
      .PinturaShapeStyle > .PinturaRadioGroup > .PinturaRadioGroupOptions svg {
        width: 1.125em;
        height: 1.125em;
      }
      .PinturaShapeStyle
        > .PinturaRadioGroup
        > .PinturaRadioGroupOptions
        .PinturaRadioGroupOption:first-of-type
        label {
        padding-left: 0.5em;
        border-top-left-radius: var(--border-radius-round);
        border-bottom-left-radius: var(--border-radius-round);
      }
      .PinturaShapeStyle
        > .PinturaRadioGroup
        > .PinturaRadioGroupOptions
        .PinturaRadioGroupOption:last-of-type
        label {
        padding-right: 0.5em;
        border-top-right-radius: var(--border-radius-round);
        border-bottom-right-radius: var(--border-radius-round);
      }
      .PinturaShapeStyle
        > .PinturaRadioGroup
        > .PinturaRadioGroupOptions
        [data-selected='true']
        label {
        background-color: var(--color-foreground-10);
      }
      .PinturaToolbar {
        display: flex;
        justify-content: center;
        margin-left: 1em;
        margin-right: 1em;
        padding-top: 1em;
      }
      .PinturaToolbar .PinturaToolbarInner {
        display: inline-flex;
      }
      .PinturaToolbar[data-layout='compact'] .PinturaToolbarContentWide,
      .PinturaToolbar[data-overflow='overflow'] .PinturaToolbarContentOptional {
        display: none;
      }
      .PinturaToolbar .PinturaButton {
        border-radius: var(--border-radius-round);
        outline: transparent;
        padding: 0.3125em 0.75em;
        transition: background-color 0.1s ease-out, color 0.1s ease-out,
          box-shadow 0.1s ease-out;
        line-height: 1.1;
      }
      .PinturaToolbar .PinturaButton:hover {
        box-shadow: inset 0 0 0 1px var(--color-foreground-5);
      }
      .PinturaToolbar .PinturaButton[data-focus-visible] {
        background-color: var(--color-focus-50);
        box-shadow: inset 0 0 0 1px var(--color-focus-100);
      }
      .PinturaToolbar .PinturaButton .PinturaButtonIcon {
        width: 1em;
      }
      .PinturaToolbar .PinturaButtonLabel {
        font-size: 0.75em;
      }
      .PinturaToolbar .PinturaDetailsPanel {
        z-index: 3;
      }
      .PinturaToolbar .PinturaToolbarInner > * {
        margin: 0 0.5em;
      }
      .PinturaRectManipulator {
        --size: 1.25em;
        position: absolute;
        left: 0;
        top: 0;
        outline: none;
        touch-action: none;
      }
      .PinturaRectManipulator:not([data-shape='edge']) {
        width: var(--size);
        height: var(--size);
        z-index: 2;
      }
      .PinturaRectManipulator:not([data-shape='edge']):after {
        position: absolute;
        left: -0.5em;
        right: -0.5em;
        top: -0.5em;
        bottom: -0.5em;
        border-radius: inherit;
        content: '';
      }
      .PinturaRectManipulator:not([data-shape='edge'])[data-focus-visible]:after {
        background-color: var(--color-focus-50);
        box-shadow: inset 0 0 0 1px var(--color-focus-100);
      }
      .PinturaRectManipulator[data-shape~='circle'] {
        margin-left: calc(var(--size) * (-0.5));
        margin-top: calc(var(--size) * (-0.5));
        line-height: var(--size);
        border-radius: 50%;
        background-color: var(--color-foreground-100);
        box-shadow: 0 0 2px var(--color-background-50);
      }
      .PinturaRectManipulator[data-shape='hook'] {
        border: 3px solid var(--color-foreground-100);
      }
      .PinturaRectManipulator[data-shape='hook'][data-direction*='t'] {
        margin-top: -3px;
        border-bottom: 0;
      }
      .PinturaRectManipulator[data-shape='hook'][data-direction*='r'] {
        border-left: 0;
        margin-left: calc(var(--size) * (-1));
      }
      .PinturaRectManipulator[data-shape='hook'][data-direction*='b'] {
        margin-top: calc(var(--size) * (-1));
        border-top: 0;
      }
      .PinturaRectManipulator[data-shape='hook'][data-direction*='l'] {
        border-right: 0;
        margin-left: -3px;
      }
      .PinturaRectManipulator[data-shape~='edge'] {
        height: 1px;
        width: 1px;
        z-index: 1;
      }
      .PinturaRectManipulator[data-shape~='edge'][data-focus-visible] {
        background-color: var(--color-focus-50);
      }
      .PinturaRectManipulator[data-direction='b'],
      .PinturaRectManipulator[data-direction='t'] {
        cursor: ns-resize;
        height: var(--size);
        margin-top: calc(var(--size) * (-0.5));
        transform-origin: 0 center;
      }
      .PinturaRectManipulator[data-direction='l'],
      .PinturaRectManipulator[data-direction='r'] {
        cursor: ew-resize;
        width: var(--size);
        margin-left: calc(var(--size) * (-0.5));
        transform-origin: center 0;
      }
      .PinturaRectManipulator[data-direction='bl'],
      .PinturaRectManipulator[data-direction='tr'] {
        cursor: nesw-resize;
      }
      .PinturaRectManipulator[data-direction='br'],
      .PinturaRectManipulator[data-direction='tl'] {
        cursor: nwse-resize;
      }
      .PinturaRoot[data-env~='pointer-coarse']
        .PinturaRectManipulator[data-shape='edge']:active {
        background-color: var(--color-foreground-5);
      }
      .PinturaRoot[data-env~='pointer-coarse']
        .PinturaRectManipulator:not([data-shape='edge']):after {
        left: -1em;
        right: -1em;
        top: -1em;
        bottom: -1em;
      }
      .PinturaRoot[data-env~='pointer-coarse']
        .PinturaRectManipulator:not([data-shape='edge']):active:after {
        background-color: var(--color-foreground-5);
      }
      .PinturaShapePresetsPalette {
        width: calc(100% - 2em);
        text-align: center;
      }
      .PinturaShapePresetsPalette .PinturaShapePresetSelect {
        vertical-align: top;
        display: inline-block;
      }
      .PinturaShapePresetsPalette
        .PinturaScrollable:not([data-state~='overflows']) {
        display: flex;
        justify-content: center;
      }
      .PinturaShapePresetsPalette .PinturaButton + .PinturaButton {
        margin-left: 0.5em;
      }
      .PinturaShapePresetsPalette .PinturaButton {
        flex-direction: row;
        line-height: 1.1;
        padding: 0.3125em 0.75em;
        border-radius: var(--border-radius-round);
        box-shadow: inset 0 0 0 1px var(--color-foreground-5);
        cursor: var(--button-cursor);
        transition: background-color 0.1s ease-out, color 0.1s ease-out,
          box-shadow 0.1s ease-out;
        outline: none;
      }
      .PinturaShapePresetsPalette .PinturaButton .PinturaButtonIcon {
        width: 1em;
      }
      .PinturaShapePresetsPalette .PinturaButton .PinturaButtonLabel {
        font-size: 0.75em;
      }
      .PinturaShapePresetsPalette .PinturaButton:hover {
        box-shadow: inset 0 0 0 1px var(--color-foreground-10);
      }
      .PinturaShapePresetsPalette .PinturaButton[data-focus-visible] {
        background-color: var(--color-focus-50);
        box-shadow: inset 0 0 0 1px var(--color-focus-100);
      }
      .PinturaShapePresetsPalette .PinturaShapePresetsFlat > * + *,
      .PinturaShapePresetsPalette .PinturaShapePresetsGroups > * + * {
        margin-left: 0.5em;
      }
      .PinturaShapePresetsGroups {
        display: flex;
        order: 2;
        margin-bottom: -0.1875em;
      }
      .PinturaShapePresetsGrouped {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .PinturaShapePresetsFlat {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .PinturaShapeList {
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.1s ease-in-out;
        position: absolute;
        top: 1em;
        left: 1em;
        width: -webkit-max-content;
        width: -moz-max-content;
        width: max-content;
        z-index: 1;
        border-radius: var(--border-radius);
        color: var(--color-foreground-100);
        background: var(--color-background-70);
        box-shadow: 0 0 0 1px var(--color-foreground-5);
      }
      .PinturaShapeList li + li {
        margin-top: -0.3125em;
      }
      .PinturaShapeList[data-visible='true'] {
        opacity: 1;
      }
      .PinturaShapeList .PinturaColorPreview {
        width: 0.75em;
        height: 0.75em;
        margin-right: 0.25em;
        border-radius: 0.25em;
      }
      .PinturaShapeList .PinturaShapeListItem {
        display: flex;
        align-items: center;
        padding: 0.25em 0.5em;
        outline: none;
      }
      .PinturaShapeList .PinturaShapeListItem > span {
        font-size: 0.75em;
        line-height: 1.75;
        padding: 0 0.325em;
        margin-left: -0.325em;
      }
      .PinturaShapeList .PinturaShapeListItem[data-focus-visible] > span {
        background-color: var(--color-focus-50);
        box-shadow: inset 0 0 0 1px var(--color-focus-100);
      }
      .PinturaShapeList[data-visible='true'] .PinturaShapeListItem {
        pointer-events: all;
      }
      .PinturaShapeEditor {
        height: 100%;
        width: 100%;
        outline: none;
        touch-action: none;
      }
      .PinturaShapeControls {
        position: absolute !important;
        left: 0;
        top: 0;
        z-index: 3;
        pointer-events: none;
        display: flex;
        align-items: center;
      }
      .PinturaShapeControlsGroup {
        pointer-events: all;
      }
      .PinturaShapeControlsGroup,
      .PinturaShapeControlsGroup .PinturaSlider {
        color: #eee;
        background: #333;
        box-shadow: 0 0.125em 0.25em rgba(0, 0, 0, 0.25);
        border-radius: 0.25em;
      }
      .PinturaShapeControlsGroup,
      .PinturaShapeControlsGroup .PinturaShapeControlsGroupToggle {
        display: inline-flex;
        min-height: 1.75em;
      }
      .PinturaShapeControlsGroup + .PinturaShapeControlsGroup {
        margin-left: 0.5em;
      }
      .PinturaShapeControlsGroup .PinturaShapeControlsGroupToggle {
        position: relative;
      }
      .PinturaShapeControlsGroup .PinturaButton {
        outline: transparent;
      }
      .PinturaShapeControlsGroup .PinturaButton[data-focus-visible] {
        background-color: var(--color-focus-50);
        box-shadow: inset 0 0 0 1px var(--color-focus-100);
      }
      .PinturaShapeControlsGroup > .PinturaButton {
        display: block;
        font-weight: 700;
        transition: background-color 0.1s;
        outline: transparent;
      }
      .PinturaShapeControlsGroup > .PinturaButton:hover {
        background-color: hsla(0, 0%, 100%, 0.15);
      }
      .PinturaShapeControlsGroup > .PinturaButton .PinturaButtonLabel {
        display: block;
        font-size: 0.6875em;
        padding: 0 0.75em;
        line-height: 1.7em;
      }
      .PinturaShapeControlsGroup .PinturaButtonIconOnly {
        width: 1.75em;
        transition: background-color 0.1s;
      }
      .PinturaShapeControlsGroup .PinturaButtonIconOnly:hover {
        background-color: hsla(0, 0%, 100%, 0.15);
      }
      .PinturaShapeControlsGroup > button:first-of-type {
        border-radius: 0.25em 0 0 0.25em;
      }
      .PinturaShapeControlsGroup > button:last-of-type {
        border-radius: 0 0.25em 0.25em 0;
      }
      .PinturaShapeControlsGroup > button:only-of-type {
        border-radius: 0.25em;
      }
      .PinturaShapeControlsGroup > * + * {
        border-left: 1px solid rgba(0, 0, 0, 0.5);
      }
      .PinturaShapeControlsGroup svg {
        pointer-events: none;
      }
      .PinturaInputForm {
        opacity: 0;
        cursor: auto;
        z-index: 2147483647;
      }
      .PinturaInputForm:not([data-layout='stick']) {
        position: absolute;
        bottom: 6.5em;
        width: 30em;
        left: calc(50% - 15em);
        box-shadow: 0 0.25em 0.5em -0.5em rgba(0, 0, 0, 0.75),
          inset 0 0 0 1px var(--color-foreground-10);
        border-radius: var(--border-radius);
        background-color: var(--color-background-95);
      }
      @media (max-width: 34em) {
        .PinturaInputForm:not([data-layout='stick']) {
          left: 2em;
          right: 2em;
          width: auto;
        }
      }
      .PinturaInputForm[data-layout='stick'] {
        transition: opacity 0.15s ease 0.25s;
        position: absolute;
        left: 0;
        right: 0;
        outline: 1px solid var(--color-foreground-15);
        background-color: var(--color-background-100);
      }
      .PinturaInputForm[data-layout='stick'] > .PinturaInputFormInner {
        background-color: var(--color-foreground-3);
      }
      .PinturaInputFormInner > .PinturaButton {
        color: var(--color-foreground-100);
        border-radius: 9999em;
        box-shadow: inset 0 0 0 1px var(--color-foreground-5);
      }
      .PinturaInputFormInner > .PinturaButton:first-of-type {
        left: 1em;
      }
      .PinturaInputFormInner > .PinturaButton:last-of-type {
        right: 1rem;
        color: var(--color-primary-text);
        background: var(--color-primary);
        box-shadow: inset 0 0 0 1px var(--color-foreground-10);
      }
      .PinturaInputFormInner
        > .PinturaButton:not(.PinturaButtonIconOnly)
        .PinturaButtonInner {
        padding: 0 0.875em 0 0.625em;
      }
      .PinturaInputFormInner > .PinturaButton .PinturaButtonIcon {
        width: 0.875em;
        height: 0.875em;
      }
      .PinturaInputFormInner > .PinturaButton.PinturaButtonIconOnly {
        width: 1.875em;
        height: 1.875em;
      }
      .PinturaInputFormInner > .PinturaButton .PinturaButtonLabel {
        font-size: 0.875em;
      }
      .PinturaInputFormInner > .PinturaButton .PinturaButtonInner {
        line-height: 2;
        display: flex;
        justify-content: center;
      }
      .PinturaInputFormInner {
        padding-top: 1em;
        padding-bottom: 3.5em;
      }
      .PinturaInputFormInner > .PinturaButton {
        position: absolute;
        bottom: 1em;
      }
      .PinturaInputFormFields textarea:only-child {
        width: 100%;
        padding: 0 1em 0.5em;
        height: 5em;
        display: block;
        background: transparent;
        -webkit-mask: linear-gradient(0deg, transparent, #000 1em);
        mask: linear-gradient(0deg, transparent, #000 1em);
      }
      .PinturaInputFormFields textarea:only-child::-webkit-scrollbar {
        width: 1em;
        cursor: pointer;
      }
      .PinturaInputFormFields textarea:only-child::-webkit-scrollbar-track {
        background: none;
      }
      .PinturaInputFormFields textarea:only-child::-webkit-scrollbar-thumb {
        cursor: pointer;
        background-clip: padding-box;
        background-color: var(--color-foreground-70);
        border-radius: 9999em;
        border: 0.25em solid transparent;
      }
      .PinturaInputForm input,
      .PinturaInputForm textarea {
        box-sizing: border-box;
        resize: none;
        border: none;
        font-size: 1rem;
        outline: transparent;
        color: var(--color-foreground-100);
      }
      .PinturaInputForm input {
        background-color: var(--color-background-100);
      }
      .PinturaShapePresetsList {
        display: flex;
        align-items: center;
      }
      .PinturaShapePresetsList text {
        font-family: monospace;
      }
      .PinturaShapePresetsList .PinturaShapePreset {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .PinturaShapePresetsList .PinturaShapePreset img,
      .PinturaShapePresetsList .PinturaShapePreset svg {
        display: block;
        width: 1.75em;
        height: 1.75em;
        -o-object-fit: cover;
        object-fit: cover;
        border-radius: 0.3125em;
      }
      .PinturaShapePresetsList .PinturaShapePreset .PinturaDragButton {
        padding: 0.3125em;
        border-radius: var(--border-radius);
        box-shadow: inset 0 0 0 1px var(--color-foreground-5);
      }
      .PinturaShapePresetsList .PinturaShapePreset .PinturaDragButton:hover {
        background-color: var(--color-foreground-10);
      }
      .PinturaShapePresetsList .PinturaShapePreset + .PinturaShapePreset {
        margin-left: 0.5em;
      }
      .PinturaShapeManipulator {
        position: absolute;
        left: 0;
        top: 0;
        outline: none;
        touch-action: none;
        --size: 0.75em;
      }
      .PinturaShapeManipulator:not([data-control='edge']) {
        margin-left: calc(var(--size) * (-0.5));
        margin-top: calc(var(--size) * (-0.5));
        line-height: var(--size);
        width: var(--size);
        height: var(--size);
        border-radius: 9999em;
      }
      .PinturaShapeManipulator:not([data-control='edge']):after {
        position: absolute;
        left: -0.5em;
        right: -0.5em;
        top: -0.5em;
        bottom: -0.5em;
        content: '';
      }
      .PinturaShapeManipulator:not([data-control='edge'])[data-focus-visible]:after {
        border-radius: inherit;
        background-color: var(--color-focus-50);
        box-shadow: inset 0 0 0 1px var(--color-focus-100);
      }
      .PinturaShapeManipulator[data-control='point'] {
        background: linear-gradient(
          90deg,
          var(--color-secondary-dark),
          var(--color-secondary)
        );
        box-shadow: 0 0 0 2px #fff, 0 0 4px #000;
        z-index: 3;
      }
      .PinturaShapeManipulator[data-control='edge'] {
        margin-top: calc(var(--size) * (-0.5));
        height: var(--size);
        width: 1px;
        z-index: 1;
        transform-origin: 0 calc(var(--size) * 0.5);
      }
      .PinturaShapeManipulator[data-control='edge'][data-focus-visible] {
        background-color: var(--color-focus-50);
      }
      .PinturaShapeManipulator[data-control='rotate'] {
        border-radius: 9999em;
        background: linear-gradient(90deg, #fff, #ddd);
        box-shadow: 0 0 0 2px var(--color-secondary-dark), 0 0 4px #000;
        z-index: 2;
        cursor: move;
      }
      .PinturaDragButton {
        cursor: var(--button-cursor);
        outline: transparent;
      }
      .PinturaDragButton > * {
        pointer-events: none;
      }
      .PinturaDragButton {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-touch-callout: none;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        transition: filter 0.2s ease-out;
      }
      .PinturaDragButton[disabled] {
        filter: var(--filter-disabled);
      }
    `}
  />
);

export default _NormalizerStyled;
