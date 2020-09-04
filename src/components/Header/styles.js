import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  align-items: center;
`;

export const Content = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 30px;
  background: black;
  width: 100%;
`;

export const BackView = styled.TouchableOpacity`
  padding-right: 30px;
  padding-bottom: 30px;
  justify-content: center;
`;

export const Icon = styled(MaterialIcons)`
  padding-top: 0px;
`;
export const ContainerLocation = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
export const TextContainer = styled.View`
  justify-content: center;
  align-items: center;
  padding-bottom: 25px;
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
  left: 15px;
  top: 5px;
`;
