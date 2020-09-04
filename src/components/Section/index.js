import React, {useRef} from 'react';
import pet from '~/assents/dog.jpg';
import tina from '~/assents/tina.jpg';
import drauzio from '~/assents/drauzio.jpeg';
import jorge from '~/assents/jorge.jpg';
import jafrey from '~/assents/jafrey.jpg';

import {
  Content,
  Text,
  ImagemPet,
  ImageContainer,
  TextContainer,
  ContainerPets,
} from './styles';

export default function Section() {
  return (
    <ContainerPets>
      <Content>
        <ImageContainer>
          <ImagemPet source={tina} />
          <TextContainer>
            <Text>Tina,4 Years</Text>
          </TextContainer>
        </ImageContainer>
        <ImageContainer>
          <ImagemPet source={drauzio} />
          <TextContainer>
            <Text>Drauzio, 1 Year</Text>
          </TextContainer>
        </ImageContainer>
        <ImageContainer>
          <ImagemPet source={jorge} />
          <TextContainer>
            <Text>Jorge, 4 Months</Text>
          </TextContainer>
        </ImageContainer>
        <ImageContainer>
          <ImagemPet source={jafrey} />
          <TextContainer>
            <Text>Jafrey, 2 Years</Text>
          </TextContainer>
        </ImageContainer>
        <ImageContainer>
          <ImagemPet source={tina} />
          <TextContainer>
            <Text>Tina,4 Years</Text>
          </TextContainer>
        </ImageContainer>

        <ImageContainer>
          <ImagemPet source={tina} />
          <TextContainer>
            <Text>Tina,4 Years</Text>
          </TextContainer>
        </ImageContainer>

        <ImageContainer>
          <ImagemPet source={tina} />
          <TextContainer>
            <Text>Tina,4 Years</Text>
          </TextContainer>
        </ImageContainer>

        <ImageContainer>
          <ImagemPet source={tina} />
          <TextContainer>
            <Text>Tina,4 Years</Text>
          </TextContainer>
        </ImageContainer>
      </Content>
    </ContainerPets>
  );
}
