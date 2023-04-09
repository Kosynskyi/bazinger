import { useState } from 'react';
import { useMedia } from 'react-use';
import ReactPlayer from 'react-player/youtube';
import Container from 'components/Container';
import Modal from 'components/Modal';
import ImageLazyComponent from 'components/LazyBackgroundImg';
import VideoBackgroundImg from 'assets/background_video_1x.jpg';
import VideoBackgroundImg2x from 'assets/background_video_2x@2x.jpg';
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
  const [isOpenModal, setIsOpenModal] = useState(false);
  const isWide = useMedia('(min-width: 768px)');

  const openModal = () => {
    setIsOpenModal(prev => !prev);
  };

  const closeModal = () => {
    setIsOpenModal(prev => !prev);
  };

  return (
    <StyledSection id="video">
      <ImageLazyComponent
        srcSetJpg={VideoBackgroundImg}
        srcSetJpg2x={VideoBackgroundImg2x}
        src={VideoBackgroundImg}
        width="1480"
        alt="video background"
      />
      <Container>
        {isOpenModal && (
          <Modal closeModal={closeModal}>
            <ReactPlayer
              url="https://youtu.be/Xx3O_dpt90c"
              controls={true}
              width={isWide ? '640px' : '80vw'}
              height={isWide ? '360px' : '240px'}
            />
          </Modal>
        )}
        <VideoWrapper>
          <ButtonPlay
            type="button"
            onClick={() => openModal()}
            aria-label="button open player"
          >
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
