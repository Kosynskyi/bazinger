import { useState } from 'react';
import { useMedia } from 'react-use';
import Container from 'components/Container';
import ButtonSlider from 'components/ButtonSlider';
import ImageLazyComponent from 'components/LazyBackgroundImg';
import HeroBackgroundImg from 'assets/hero_1x.jpg';
import HeroBackgroundImg2x from 'assets/hero_2x@2x.jpg';
import { ReactComponent as Apple } from 'assets/apple.svg';
import { ReactComponent as Android } from 'assets/android.svg';
import { ReactComponent as ArrowLeft } from 'assets/arrowLeft.svg';
import { ReactComponent as ArrowRight } from 'assets/arrowRight.svg';

import dataHero from 'data/dataHero.json';
import {
  StyledSection,
  HeroWrapper,
  MainTitle,
  Title,
  TitleSpan,
  Text,
  ButtonWrapper,
  StyledButton,
  AvailableStoreWrapper,
  AvailableText,
  StoreLinkWrapper,
  StoreLink,
  ButtonSliderWrapper,
  SlideIndicatorList,
  SlideIndicatorItem,
  SlideIndicator,
} from './Hero.styled';

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const isNarrow = useMedia('(min-width: 1360px)');

  const nextSlide = () => {
    setActiveSlide(prev => (prev + 1 > dataHero.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide(prev => (prev - 1 < 0 ? dataHero.length - 1 : prev - 1));
  };

  const buttonSlider = idx => {
    setActiveSlide(idx);
  };

  return (
    <StyledSection id="home">
      <ImageLazyComponent
        srcSetJpg={HeroBackgroundImg}
        srcSetJpg2x={HeroBackgroundImg2x}
        src={HeroBackgroundImg}
        alt="hero background"
      />
      <Container>
        <HeroWrapper>
          <MainTitle>Bazinger</MainTitle>
          <Title>
            Simple, Beautiful <TitleSpan>and Amazing</TitleSpan>
          </Title>
          <Text>{dataHero[activeSlide].text}</Text>
          <ButtonWrapper>
            <StyledButton type="button" aria-label="button download">
              DOWNLOAD
            </StyledButton>
            <StyledButton type="button" aria-label="button learn more">
              LEARN MORE
            </StyledButton>
          </ButtonWrapper>
          <AvailableStoreWrapper>
            <AvailableText>Available on:</AvailableText>
            <StoreLinkWrapper>
              <StoreLink
                href="https://www.apple.com"
                rel="noopener noreferrer"
                aria-label="apple store"
              >
                <Apple />
              </StoreLink>
              <StoreLink
                href="https://play.google.com/store/apps?hl=ru&gl=US&pli=1"
                rel="noopener noreferrer"
                aria-label="google store"
              >
                <Android />
              </StoreLink>
            </StoreLinkWrapper>
          </AvailableStoreWrapper>
        </HeroWrapper>
        <ButtonSliderWrapper style={{ marginBottom: isNarrow && '0' }}>
          <ButtonSlider
            style={{
              position: isNarrow && 'absolute',
              top: isNarrow && '40px',
              left: isNarrow && '-70px',
            }}
            onChange={prevSlide}
            aria-label="button left"
          >
            <ArrowLeft />
          </ButtonSlider>
          <ButtonSlider
            style={{
              position: isNarrow && 'absolute',
              top: isNarrow && '40px',
              right: isNarrow && '-70px',
            }}
            onChange={nextSlide}
            aria-label="button right"
          >
            <ArrowRight />
          </ButtonSlider>
        </ButtonSliderWrapper>
        <SlideIndicatorList>
          {dataHero.map(({ id }, idx) => (
            <SlideIndicatorItem key={id}>
              <SlideIndicator
                type="button"
                style={{
                  backgroundColor: activeSlide === idx && 'rgb(75,202,255)',
                  border: activeSlide === idx && '1px solid rgb(75,202,255)',
                }}
                onClick={() => buttonSlider(idx)}
                aria-label={`${id + 1} slide`}
              ></SlideIndicator>
            </SlideIndicatorItem>
          ))}
        </SlideIndicatorList>
      </Container>
    </StyledSection>
  );
};

export default Hero;
