import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 360px;
  height: 60px;
  background: #f2f2f2;
  border-radius: 15px;
  margin-top: 8px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: 'Arial';
  color: #0d0d0d;
  font-size: 16px;
`;
