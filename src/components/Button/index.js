import React from 'react';
import {Container, ButtonText} from './styles';
const Button = ({texto, ...rest}) => {
  {
    console.log(texto);
  }
  return (
    <Container {...rest}>
      <ButtonText>{texto}</ButtonText>
    </Container>
  );
};

export default Button;
