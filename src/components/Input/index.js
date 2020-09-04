import React from 'react';
import {Container, TextInput, Icon} from './styles';

const Input = ({icon}) => {
  return (
    <Container>
      <Icon name={icon} size={20} />
    </Container>
  );
};

export default Input;
