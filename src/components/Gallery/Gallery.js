import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
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
  GallerySubTitle,
  SubText,
  PictureWrapper,
  SubTextWrapper,
  ButtonAdd,
} from './Gallery.styled';

const Gallery = () => {
  const subText =
    'Nunc cursus libero purus ac congue arcu cursus ut sed vitae pulvinar massa idporta nequetiam elerisque mi id faucibus iaculis vitae pulvinar.';

  return (
    <StyledSection id="gallery">
      <Container>
        <Title>show the gallery</Title>
        <Text>summarise what your product is all about</Text>
        <GalleryList>
          <GalleryItem>
            <PictureWrapper>
              <picture>
                <source srcSet={`${screenShot1_1x} 1x, ${screenShot1_2x} 2x`} />
                <LazyLoadImage
                  src={screenShot1_1x}
                  alt="screen shot 1"
                  width="270"
                  effect="blur"
                />
              </picture>
              <ButtonAdd type="button" aria-label="button add screen shot">
                <AddScreenShot />
              </ButtonAdd>
              <GallerySubTitle>screen shot #1</GallerySubTitle>
            </PictureWrapper>
            <SubTextWrapper>
              <SubText>{subText}</SubText>
            </SubTextWrapper>
          </GalleryItem>
          <GalleryItem>
            <PictureWrapper>
              <picture>
                <source srcSet={`${screenShot2_1x} 1x, ${screenShot2_2x} 2x`} />
                <LazyLoadImage
                  src={screenShot2_1x}
                  alt="screen shot 2"
                  width="270"
                  effect="blur"
                />
              </picture>
              <GallerySubTitle>screen shot #2</GallerySubTitle>
            </PictureWrapper>
            <SubTextWrapper>
              <SubText>{subText}</SubText>
            </SubTextWrapper>
          </GalleryItem>
          <GalleryItem>
            <PictureWrapper>
              <picture>
                <source srcSet={`${screenShot2_1x} 1x, ${screenShot2_2x} 2x`} />
                <LazyLoadImage
                  src={screenShot2_1x}
                  alt="screen shot 3"
                  width="270"
                  effect="blur"
                />
              </picture>
              <GallerySubTitle>screen shot #3</GallerySubTitle>
            </PictureWrapper>
            <SubTextWrapper>
              <SubText>{subText}</SubText>
            </SubTextWrapper>
          </GalleryItem>
          <GalleryItem>
            <PictureWrapper>
              <picture>
                <source srcSet={`${screenShot2_1x} 1x, ${screenShot2_2x} 2x`} />
                <LazyLoadImage
                  src={screenShot2_1x}
                  alt="screen shot 4"
                  width="270"
                  effect="blur"
                />
              </picture>
              <GallerySubTitle>screen shot #4</GallerySubTitle>
            </PictureWrapper>
            <SubTextWrapper>
              <SubText>{subText}</SubText>
            </SubTextWrapper>
          </GalleryItem>
        </GalleryList>
      </Container>
    </StyledSection>
  );
};

export default Gallery;
