import React from 'react';
import smiles from '../../images/undraw_smiley_face_lmgm.svg'
import { Container,WrapperImage,Image,ImageContent } from './styles';

const ImageComponent: React.FC = () => {
  return <Container>
    <WrapperImage>
      <Image src={smiles}/>
      <ImageContent>
        <h3>Make a good emoji </h3>
        <p>its never been so eise Simple praticle and beuty</p>
      </ImageContent>
    </WrapperImage>

  </Container>;
}

export default ImageComponent;