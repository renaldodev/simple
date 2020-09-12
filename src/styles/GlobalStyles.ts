import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,500;1,600;1,700;1,800;1,900&display=swap');

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}


html{
  min-height:100vh;
  width:100%
}

body{
  font-family: 'Montserrat', sans-serif;
  background-color:#FBD5BB;
  color:#100F0E;
}
`;