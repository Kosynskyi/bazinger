import { useForm } from 'react-hook-form';
import Container from 'components/Container';
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
            <StyledButton type="submit">Send</StyledButton>
          </StyledForm>
        </FormWrapper>
      </Container>
    </StyledSection>
  );
};

export default Contact;
