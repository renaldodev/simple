import styled from 'styled-components';
import { motion } from 'framer-motion';
import React from 'react';

interface IProps extends React.HTMLProps<HTMLDivElement> {}
interface IPropsH1Element extends React.HTMLProps<HTMLHeadingElement> {}

export const Container = styled(motion.div)``;

export const Header = styled(motion.div)<IProps>`
    width:100%;
    height:80px;
    background-color:#FBD5BB;
    padding:20px 25px;
    display:flex;
    align-items:center;
`;

export const Title = styled(motion.h1)<IPropsH1Element>`
  font-weight:900;
`;

export const Main = styled(motion.div)<IProps>`
  display:flex;
  width:100%;
  min-height:100vh;
  clip-path: polygon(100% 100%, 0 100%, 0 30%, 50% 0, 100% 30%);
  background-color:#F8F7F5;  
`;

export const Wrapper = styled(motion.div)<IProps>`
  max-width: 1000px;
  width: 100%;
  margin: 150px auto 0;
  display:flex;
  padding:50px;
  justify-content:space-between;
`;

export const Footer =styled(motion.div)`
 width:100%;
 height:200px;
 display:flex;
 flex-direction:column;
 align-items:center;
 justify-content:center;
 background-color:#F8F7F5; 
 border-top:0.5px solid #5F5F5B;
`;
