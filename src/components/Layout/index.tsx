import React from 'react';

import { Container, Header, Title, Main } from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title animate={{x:100 }}>Emoji Picket</Title>
      </Header>
      <Main>
        {/* <ImageComponent/> */}
        {/* <KeyBordEmoji/> */}
      </Main>
    </Container>
  );
};

export default Layout;
