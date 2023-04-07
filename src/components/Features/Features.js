import { ReactComponent as AttractiveLayout } from '../../assets/attractiveLayout.svg';
import { ReactComponent as FreshDesign } from '../../assets/freshDesign.svg';
import { ReactComponent as Multipurpose } from '../../assets/multipurpose.svg';
import { ReactComponent as EasyCustomize } from '../../assets/easyCustomize.svg';
import Container from 'components/Container';
import { dataFeatures } from 'data/dataFeatures';
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
  const iconsArr = [
    <AttractiveLayout />,
    <FreshDesign />,
    <Multipurpose />,
    <EasyCustomize />,
  ];

  return (
    <StyledSection id="features">
      <Container>
        <Title>summarise the features</Title>
        <Text>summarise what your product is all about</Text>
        <FeaturesList>
          {dataFeatures.map(({ id, title, text }, idx) => (
            <FeaturesItem key={id}>
              <IconWrapper>{iconsArr[idx]}</IconWrapper>
              <SubTitle>{title}</SubTitle>
              <SubText>{text}</SubText>
            </FeaturesItem>
          ))}
        </FeaturesList>
      </Container>
    </StyledSection>
  );
};

export default Features;
