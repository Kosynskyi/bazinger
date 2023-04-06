import Container from 'components/Container';
import { ReactComponent as Apple } from '../../assets/apple.svg';
import { ReactComponent as Android } from '../../assets/android.svg';
import { ReactComponent as ArrowLeft } from '../../assets/arrowLeft.svg';
import { ReactComponent as ArrowRight } from '../../assets/arrowRight.svg';

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
  ButtonSlider,
} from './Hero.styled';

const Hero = () => {
  return (
    <StyledSection>
      <Container>
        <HeroWrapper>
          <MainTitle>Bazinger</MainTitle>
          <Title>
            Simple, Beautiful <TitleSpan>and Amazing</TitleSpan>
          </Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget
            nunc vitae tellus luctus ullamcorper. Nam porttitor ullamcorper
            felis at convallis. Aenean ornare vestibulum nisi fringilla lacinia.
            Nullam pulvinar sollicitudin velit id laoreet. Quisque non rhoncus
            sem.
          </Text>
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

        <ButtonSlider type="button">
          <ArrowLeft />
        </ButtonSlider>
        <ButtonSlider type="button">
          <ArrowRight />
        </ButtonSlider>
      </Container>
    </StyledSection>
  );
};

export default Hero;
