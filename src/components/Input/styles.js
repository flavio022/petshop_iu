import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  width: 360px;
  height: 55px;
  background: #cccdd2;
  border-radius: 10px;
  margin-bottom: 8px;
  border-width: 1px;
  border-color: #77828c;
  flex-direction: row;
  align-items: center;
  margin: 3px auto 10px auto;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #fff;
  font-size: 16px;
`;

export const Icon = styled(MaterialIcons)`
  margin-left: 10px;
`;
