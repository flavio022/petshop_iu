import React, {useRef} from 'react';
import dogBackground from '~/assents/dog.jpg';
import Button from '~/components/Button';
import {StatusBar} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {ImageBackground, FormView, Text, ViewText} from './styles';
export default function SigIn() {
  const navigation = useNavigation();

  const formRef = useRef(null);

  function handleSubmit() {
    navigation.navigate('Dashboard', {});
  }
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />

      <ImageBackground source={dogBackground}>
        <ViewText>
          <Text>Don't Shop, adopt.</Text>
        </ViewText>
        <FormView>
          <Button texto="Login/Sign Up" onPress={handleSubmit} />
        </FormView>
      </ImageBackground>
    </>
  );
}
