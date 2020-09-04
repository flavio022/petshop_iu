import React, {useRef} from 'react';

import {
  Container,
  Content,
  Icon,
  ContainerLocation,
  TextContainer,
  Text,
  TextLocation,
  UserAvatar,
  BackView,
} from './styles';
import {useNavigation} from '@react-navigation/native';
import avatar from '~/assents/avatar.png';

export default function Header() {
  const navigation = useNavigation();

  function handleSubmit() {
    navigation.navigate('Signin', {});
  }
  return (
    <Container>
      <Content>
        <BackView onPress={handleSubmit}>
          <Icon name={'chevron-left'} size={35} color={'#fff'} />
        </BackView>
        <ContainerLocation>
          <Icon name={'place'} size={25} color={'#696969'} />
          <TextContainer>
            <Text>Location</Text>
            <TextLocation>São Paulo, Brasil</TextLocation>
          </TextContainer>
        </ContainerLocation>

        <UserAvatar source={avatar} />
      </Content>
    </Container>
  );
}
