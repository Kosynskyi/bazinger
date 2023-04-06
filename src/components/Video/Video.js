import Container from 'components/Container';
import { ReactComponent as PlayIcon } from '../../assets/play-icon.svg';
import {
  StyledSection,
  VideoWrapper,
  ButtonPlay,
  Title,
  TitleSpan,
  Text,
} from './Video.styled';

const Video = () => {
  return (
    <StyledSection>
      <Container>
        <VideoWrapper>
          <ButtonPlay>
            <PlayIcon />
          </ButtonPlay>
          <Title>
            Watch the best Technology in <TitleSpan>Action</TitleSpan>
          </Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget
            nunc vitae tellus luctus ullamcorper. Nam porttitor ullamcorper
            felis at convallis. Aenean ornare vestibulum nisi fringilla lacinia.
            Nullam pulvinar sollicitudin velit id laoreet. Quisque non rhoncus
            sem.
          </Text>
        </VideoWrapper>
      </Container>
    </StyledSection>
  );
};

export default Video;
