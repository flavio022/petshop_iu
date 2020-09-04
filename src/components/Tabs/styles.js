import {Animated} from 'react-native';

import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  height: 240px;
  background: #d9d9d9;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
  margin-top: -30px;
`;

export const TabsContainer = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: {
    paddingLeft: 10,
    paddingTop: 15,
    paddingRight: 20,
  },
  showsHorizontalScrollIndicator: false,
})``;

export const TabsItem = styled.TouchableOpacity`
  width: 100px;
  height: 100px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 25px;
  margin-left: 10px;
  padding-top: 20px;
  padding-left: 10px;
  justify-content: space-between;
  align-items: center;
  ${props =>
    props.isFocused &&
    css`
      background: #01ffd0;
    `}
`;

export const ImageSelection = styled.Image`
  width: 50px;
  height: 50px;
`;
export const TabText = styled.Text`
  font-size: 13px;
  color: black;
  text-align: center;
  padding-top: 30px;
`;

export const Text = styled.Text`
  font-size: 20px;
  margin-left: 30px;
`;
