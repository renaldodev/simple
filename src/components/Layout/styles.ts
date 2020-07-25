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
  font-weight:200;
  text-transform:uppercase;
`;

export const Main = styled(motion.div)<IProps>`
  display:flex;
  
`;

export const Wrapper = styled(motion.div)<IProps>`
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
`;
