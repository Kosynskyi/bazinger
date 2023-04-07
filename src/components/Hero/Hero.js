import { useState } from 'react';
import Container from 'components/Container';
import { ReactComponent as Apple } from '../../assets/apple.svg';
import { ReactComponent as Android } from '../../assets/android.svg';
import { ReactComponent as ArrowLeft } from '../../assets/arrowLeft.svg';
import { ReactComponent as ArrowRight } from '../../assets/arrowRight.svg';

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
  ButtonSliderLeft,
  ButtonSliderRight,
  SlideIndicatorList,
  SlideIndicatorItem,
  SlideIndicator,
} from './Hero.styled';

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);

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
    <StyledSection>
      <Container>
        <HeroWrapper>
          <MainTitle>Bazinger</MainTitle>
          <Title>
            Simple, Beautiful <TitleSpan>and Amazing</TitleSpan>
          </Title>
          <Text>{dataHero[activeSlide].text}</Text>
          <ButtonWrapper>
            <StyledButton type="button">DOWNLOAD</StyledButton>
            <StyledButton type="button">LEARN MORE</StyledButton>
          </ButtonWrapper>
          <AvailableStoreWrapper>
            <AvailableText>Available on:</AvailableText>
            <StoreLinkWrapper>
              <StoreLink href="https://www.apple.com">
                <Apple />
              </StoreLink>
              <StoreLink href="https://play.google.com/store/apps?hl=ru&gl=US&pli=1">
                <Android />
              </StoreLink>
            </StoreLinkWrapper>
          </AvailableStoreWrapper>
        </HeroWrapper>
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
              ></SlideIndicator>
            </SlideIndicatorItem>
          ))}
        </SlideIndicatorList>

        <ButtonSliderLeft type="button" onClick={() => prevSlide()}>
          <ArrowLeft />
        </ButtonSliderLeft>
        <ButtonSliderRight type="button" onClick={() => nextSlide()}>
          <ArrowRight />
        </ButtonSliderRight>
      </Container>
    </StyledSection>
  );
};

export default Hero;

// {
//   "id": 2,
//   "text": "Slide 2. Слайдер робочий. Можемо перемикатись боковими кнопками та індикаторами знизу. Я вирішив змінювати лише текст для наглядності, оскільки в кнопки можна динамічно додавати посилання на app store чи google store для кожного слайду і так само робити будь-які інші дії, які могли би бути в кнопках download та learn more"
// },
// {
//   "id": 3,
//   "text": "Slide 3. А заголовок simple, beautiful and amazing - я не змінюю свідомо, зважаючи на те, що це тоже бути слоган цього сайту"
// }
