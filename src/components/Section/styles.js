import styled from 'styled-components/native';

export const ContainerPets = styled.ScrollView.attrs({
  horizontal: false,
  contentContainerStyle: {},
  showsHorizontalScrollIndicator: false,
})``;

export const Content = styled.View`
  background: #d9d9d9;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`;

export const Text = styled.Text`
  color: #33384d;
  font-family: Georgia;
`;

export const ImagemPet = styled.Image`
  width: 160px;
  height: 180px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`;

export const ImageContainer = styled.View`
  margin: 10px;
  border-radius: 25px;
`;

export const TextContainer = styled.View`
  background: #cccdd2;
  width: 160px;
  height: 20px;
  align-items: center;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
`;
