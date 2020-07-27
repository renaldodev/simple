import React from 'react';
import ImageComponent from '../ImageComponent';
import KeyboardEmoji from '../KeyboardEmoji';
import { Container, Header, Title, Main, Wrapper ,Footer} from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title animate={{ x: 100 }}>Pick emoji up</Title>
      </Header>
      <Main>
        <Wrapper>
          <ImageComponent />
          <KeyboardEmoji />
        </Wrapper>
      </Main>
      <Footer>
        <p>developed by <a href="https://twitter.com/renaldodev" target="blank">@renaldodev</a></p>
        <p>copyright {new Date().getFullYear()}</p>
      </Footer>
    </Container>
  );
};

export default Layout;
