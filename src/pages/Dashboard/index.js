import React, {useRef} from 'react';
import {StatusBar} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {
  Container,
  Header,
  TextContainer,
  Text,
  TextLocation,
  UserAvatar,
  SectionContainer,
  Icon,
} from './styles';
export default function Dashboard() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#040bdb" />

      <Container>
        <Header>
          <Icon name={'place'} size={25} color={'#696969'}></Icon>
          <TextContainer>
            <Text>Location</Text>
            <TextLocation>São Paulo, Brasil</TextLocation>
          </TextContainer>
          <UserAvatar
            source={{
              uri:
                'https://media-exp1.licdn.com/dms/image/C4D03AQHZm7vwH49Jxg/profile-displayphoto-shrink_100_100/0?e=1601510400&v=beta&t=dycyOog8YNaGDFwWpSZGK9-gowig42THLzyd6CmIQ1Q',
            }}
          />
        </Header>

        <SectionContainer>
          <Text>eae</Text>
        </SectionContainer>
      </Container>
    </>
  );
}
