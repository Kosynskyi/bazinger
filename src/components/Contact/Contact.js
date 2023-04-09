import { useForm } from 'react-hook-form';
import Container from 'components/Container';
import ImageLazyComponent from 'components/LazyBackgroundImg';
import MapBackgroundImg from 'assets/map_1x.jpg';
import MapBackgroundImg2x from 'assets/map_2x@2x.jpg';
import {
  StyledSection,
  FormWrapper,
  Title,
  StyledForm,
  StyledInput,
  StyledTextArea,
  StyledButton,
} from './Contact.styled';

const Contact = () => {
  const { register, handleSubmit, reset } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = data => {
    console.log(data); //just show what we receive
    reset();
  };

  return (
    <StyledSection id="contact">
      <ImageLazyComponent
        srcSetJpg={MapBackgroundImg}
        srcSetJpg2x={MapBackgroundImg2x}
        src={MapBackgroundImg}
        alt="map background"
      />
      <Container>
        <FormWrapper>
          <Title>Contact</Title>
          <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <StyledInput
              type="text"
              name="name"
              placeholder="Your name"
              {...register('name')}
            />
            <StyledInput
              type="mail"
              name="email"
              placeholder="Your email"
              {...register('email')}
            />
            <StyledInput
              type="text"
              name="subject"
              placeholder="Subject"
              {...register('subject')}
            />
            <StyledTextArea
              name="message"
              placeholder="Message"
              {...register('message')}
            ></StyledTextArea>
            <StyledButton type="submit" aria-label="button send form">
              Send
            </StyledButton>
          </StyledForm>
        </FormWrapper>
      </Container>
    </StyledSection>
  );
};

export default Contact;
