import React, { useState, useRef, useEffect } from 'react';

import { Container } from './styles';

interface IProps extends React.HTMLProps<HTMLButtonElement> {
  element?: React.ReactNode;
}

const Button: React.FC<IProps> = ({ children }) => {
  const [active, setActive] = useState<boolean>(false);
  const refNome = useRef<HTMLButtonElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('clickou');
  };

  useEffect(() => {
    refNome.current?.click();
    console.log(refNome.current?.getBoundingClientRect());
    
  }, []);
  return (
    <Container
      ref={refNome}
      onClick={(e) => handleClick(e)}
      animate={{ x: 100, rotate: 360}}

      transition={{
        x:{ease:'easeOut',duration:0.33},
        rotate:{delay:0.42}
      }}
    >
      {children}
      {active ? ' is active' : ''}
    </Container>
  );
};

export default Button;
