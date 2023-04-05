import { useForm } from 'react-hook-form';

const Contact = () => {
  const { register, handleSubmit, reset } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = data => {
    console.log(data); //just show what we receive
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          {...register('name')}
        />
        <input
          type="mail"
          name="email"
          placeholder="Your email"
          {...register('email')}
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          {...register('subject')}
        />
        <textarea
          name="message"
          placeholder="Message"
          {...register('message')}
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </>
  );
};

export default Contact;
