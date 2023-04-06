import { ReactComponent as AttractiveLayout } from '../../assets/attractiveLayout.svg';
import { ReactComponent as FreshDesign } from '../../assets/freshDesign.svg';
import { ReactComponent as Multipurpose } from '../../assets/multipurpose.svg';
import { ReactComponent as EasyCustomize } from '../../assets/easyCustomize.svg';
import Container from 'components/Container';
import {
  StyledSection,
  Title,
  Text,
  FeaturesList,
  IconWrapper,
  FeaturesItem,
  SubTitle,
  SubText,
} from './Features.styled';

const Features = () => {
  return (
    <StyledSection id="features">
      <Container>
        <Title>summarise the features</Title>
        <Text>summarise what your product is all about</Text>
        <FeaturesList>
          <FeaturesItem>
            <IconWrapper>
              <AttractiveLayout />
            </IconWrapper>
            <SubTitle>Attractive Layout</SubTitle>
            <SubText>
              Nunc cursus libero purus ac congue arcu cursus ut sed vitae
              pulvinar massa idporta nequetiam elerisque mi id faucibus iaculis
              vitae pulvinar.
            </SubText>
          </FeaturesItem>
          <FeaturesItem>
            <IconWrapper>
              <FreshDesign />
            </IconWrapper>

            <SubTitle>Fresh Design</SubTitle>
            <SubText>
              Nunc cursus libero purus ac congue arcu cursus ut sed vitae
              pulvinar massa idporta nequetiam elerisque mi id faucibus iaculis
              vitae pulvinar.
            </SubText>
          </FeaturesItem>
          <FeaturesItem>
            <IconWrapper>
              <Multipurpose />
            </IconWrapper>
            <SubTitle>multipurpose</SubTitle>
            <SubText>
              Nunc cursus libero purus ac congue arcu cursus ut sed vitae
              pulvinar massa idporta nequetiam elerisque mi id faucibus iaculis
              vitae pulvinar.
            </SubText>
          </FeaturesItem>
          <FeaturesItem>
            <IconWrapper>
              <EasyCustomize />
            </IconWrapper>
            <SubTitle>Easy to customize</SubTitle>
            <SubText>
              Nunc cursus libero purus ac congue arcu cursus ut sed vitae
              pulvinar massa idporta nequetiam elerisque mi id faucibus iaculis
              vitae pulvinar.
            </SubText>
          </FeaturesItem>
        </FeaturesList>
      </Container>
    </StyledSection>
  );
};

export default Features;
