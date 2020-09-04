import React, {useState, useCallback} from 'react';

import {
  Container,
  TabsContainer,
  TabsItem,
  ImageSelection,
  TabText,
  Text,
} from './styles';
import Input from '~/components/Input';

import cat from '~/assents/png/023-cat.png';
import dog from '~/assents/png/044-dog.png';
import bird from '~/assents/png/020-bird.png';
import mouse from '~/assents/png/001-mouse.png';
import fish from '~/assents/png/049-clownfish.png';

export default function Tabs() {
  const [isFocused, setIsFocused] = useState(false);

  const handlerImageFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  return (
    <Container>
      <TabsContainer>
        <TabsItem>
          <ImageSelection source={cat} />
          <TabText>Cat</TabText>
        </TabsItem>

        <TabsItem onPress={handlerImageFocus} isFocused={isFocused}>
          <ImageSelection source={dog} />
          <TabText>Dog</TabText>
        </TabsItem>

        <TabsItem>
          <ImageSelection source={mouse} />
          <TabText>Mouse</TabText>
        </TabsItem>
        <TabsItem>
          <ImageSelection source={bird} />
          <TabText>Bird</TabText>
        </TabsItem>
        <TabsItem>
          <ImageSelection source={fish} />
          <TabText>Fish</TabText>
        </TabsItem>
      </TabsContainer>
      <Text>Search for a pet</Text>
      <Input icon="search" />
    </Container>
  );
}
