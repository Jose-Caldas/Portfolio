import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
  --white: #fbfcff;
  --blue: #331cbf;
  --blue100:#8f83d1;
  --gray: #45475d;
  --gray100: #c2c4d9;
  --gray200: #a9aab6;
  --gray300: #eae9f2;
  --red: #f56a6a;
  --green:#90ee90
 
}

*{
    margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* font-family: 'Arimo', sans-serif; */
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto , sans-serif
}
body{
  background: #bdc3c7;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #2c3e50, #bdc3c7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  }
  



p{
  text-align:center;
  color:var(--gray200)
}



ul,
li {
  list-style: none;
}
input {
  outline: none;
}

button {
  border: none;
  outline: none;
  cursor: pointer;
  /* background: none; */
 
 
 
}

`;
