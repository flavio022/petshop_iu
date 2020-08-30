import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background: #040bdb;
`;
export const Header = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding-top: 30px;
  background: #040bdb;
  width: 100%;
  margin-bottom: 20px;
  padding-left: 20px;
`;
export const TextContainer = styled.View`
  justify-content: center;
  align-items: center;
`;
export const Text = styled.Text`
  font-size: 15px;
  color: #fff;
`;
export const TextLocation = styled.Text`
  font-size: 20px;
  color: #fff;
`;
export const UserAvatar = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 28px;
`;

export const SectionContainer = styled.View`
  background: #f2f2f2;
  flex: 1;
  width: 100%;
  align-items: center;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

export const Icon = styled(MaterialIcons)`
  margin-left: 16px;
`;
