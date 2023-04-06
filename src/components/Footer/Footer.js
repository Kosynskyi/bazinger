import Container from 'components/Container';
import { StyledFooter, FooterWrapper, Text } from './Footer.styled';

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FooterWrapper>
          <Text>Copyright &copy; 2013 | bazinger | All Rights Reserved</Text>
          <Text>Terms of Service | Privacy Policy</Text>
        </FooterWrapper>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
