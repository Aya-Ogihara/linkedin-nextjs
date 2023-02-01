import { useRouter } from 'next/router';
import contacts from '../api/contact';

const ContactId = () => {
  const router = useRouter();
  const id = router.query.contactId;
  const contact = contacts.find((contact) => contact.id === id);

  return (
    <main className='main'>
      <a href='#' onClick={() => router.back()}>
        Back
      </a>
      <h1>Name: {contact.name}</h1>
      <p>Country: {contact.country}</p>
    </main>
  );
};

export default ContactId;
