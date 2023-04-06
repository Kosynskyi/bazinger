import Container from 'components/Container';
import screenShot1_1x from '../../assets/screen1_1x.png';
import screenShot1_2x from '../../assets/screen1_2x@2x.png';
import screenShot2_1x from '../../assets/screen2_1x.png';
import screenShot2_2x from '../../assets/screen2_2x@2x.png';
import { ReactComponent as AddScreenShot } from '../../assets/add-icon.svg';

import {
  StyledSection,
  Title,
  Text,
  GalleryList,
  GalleryItem,
  GalletySubTitle,
  SubText,
  PictureWrapper,
  Picture,
  SubTextWrapper,
  ButtonAdd,
} from './Gallery.styled';

const Gallery = () => {
  return (
    <StyledSection id="gallery">
      <Container>
        <Title>show the gallery</Title>
        <Text>summarise what your product is all about</Text>
        <GalleryList>
          <GalleryItem>
            <PictureWrapper>
              <Picture>
                <source srcSet={`${screenShot1_1x} 1x, ${screenShot1_2x} 2x`} />
                <img
                  src={screenShot1_1x}
                  alt="screen shots 1"
                  width="270"
                  loading="lazy"
                />
              </Picture>
              <ButtonAdd>
                <AddScreenShot />
              </ButtonAdd>
              <GalletySubTitle>screen shot #1</GalletySubTitle>
            </PictureWrapper>
            <SubTextWrapper>
              <SubText>
                Nunc cursus libero purus ac congue arcu cursus ut sed vitae
                pulvinar massa idporta nequetiam elerisque mi id faucibus
                iaculis vitae pulvinar.
              </SubText>
            </SubTextWrapper>
          </GalleryItem>
          <GalleryItem>
            <PictureWrapper>
              <Picture>
                <source srcSet={`${screenShot2_1x} 1x, ${screenShot2_2x} 2x`} />
                <img
                  src={screenShot2_1x}
                  alt="screen shots 2"
                  width="270"
                  loading="lazy"
                />
              </Picture>
              <GalletySubTitle>screen shot #2</GalletySubTitle>
            </PictureWrapper>
            <SubTextWrapper>
              <SubText>
                Nunc cursus libero purus ac congue arcu cursus ut sed vitae
                pulvinar massa idporta nequetiam elerisque mi id faucibus
                iaculis vitae pulvinar.
              </SubText>
            </SubTextWrapper>
          </GalleryItem>
          <GalleryItem>
            <PictureWrapper>
              <Picture>
                <source srcSet={`${screenShot2_1x} 1x, ${screenShot2_2x} 2x`} />
                <img
                  src={screenShot2_1x}
                  alt="screen shots 3"
                  width="270"
                  loading="lazy"
                />
              </Picture>
              <GalletySubTitle>screen shot #3</GalletySubTitle>
            </PictureWrapper>
            <SubTextWrapper>
              <SubText>
                Nunc cursus libero purus ac congue arcu cursus ut sed vitae
                pulvinar massa idporta nequetiam elerisque mi id faucibus
                iaculis vitae pulvinar.
              </SubText>
            </SubTextWrapper>
          </GalleryItem>
          <GalleryItem>
            <PictureWrapper>
              <Picture>
                <source srcSet={`${screenShot2_1x} 1x, ${screenShot2_2x} 2x`} />
                <img
                  src={screenShot2_1x}
                  alt="screen shots 4"
                  width="270"
                  loading="lazy"
                />
              </Picture>
              <GalletySubTitle>screen shot #4</GalletySubTitle>
            </PictureWrapper>

            <SubTextWrapper>
              <SubText>
                Nunc cursus libero purus ac congue arcu cursus ut sed vitae
                pulvinar massa idporta nequetiam elerisque mi id faucibus
                iaculis vitae pulvinar.
              </SubText>
            </SubTextWrapper>
          </GalleryItem>
        </GalleryList>
      </Container>
    </StyledSection>
  );
};

export default Gallery;
