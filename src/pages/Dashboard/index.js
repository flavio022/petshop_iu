import React, {useRef} from 'react';
import {StatusBar} from 'react-native';
import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import Section from '~/components/Section';

import {useNavigation} from '@react-navigation/native';
import {Container} from './styles';
export default function Dashboard() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <Container>
        <Header />
        <Tabs />
        <Section />
      </Container>
    </>
  );
}
