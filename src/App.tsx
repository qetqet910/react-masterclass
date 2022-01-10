import Router from "./routes/Router";
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { ReactQueryDevtools } from 'react-query/devtools'
import { darktheme, lighttheme } from "./theme";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "./atoms"

const Global = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
padding: 0;
border: 0;
font - size: 100 %;
font: inherit;
vertical - align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line - height: 1;
}
ol, ul {
  list - style: none;
}
blockquote, q {
  quotes: none;
}
blockquote: before, blockquote: after,
  q: before, q:after {
  content: '';
  content: none;
}
table {
  border - collapse: collapse;
  border - spacing: 0;
}
*{
  margin: 0px;
  padding: 0px;
  list-style: none;
  text-decoration: none;
  box-style: border;
  ::-webkit-scrollbar{
      display: none;
  }
}
body{
  font-family: 'Source Sans Pro', sans-serif;
  background: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.textColor};
  overflow-x: hidden;
}
a{
  color: black;
}
`

function App() {
  const isDark = useRecoilValue(isDarkAtom)
  return (
    <>
      <ThemeProvider theme={isDark ? darktheme : lighttheme}>
        <Global />
        <Router />
        <ReactQueryDevtools initialIsOpen={true} />
      </ThemeProvider>
    </>
  )
}

export default App;
