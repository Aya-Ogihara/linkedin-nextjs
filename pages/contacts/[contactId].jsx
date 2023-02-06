import { GoBack } from '@/components/GoBack';
import { useRouter } from 'next/router';
import contacts from '../api/contact';

const ContactId = () => {
  const router = useRouter();
  const id = router.query.contactId;
  const contact = contacts.find((contact) => contact.id === id);

  return (
    <main className='main'>
      <GoBack />
      <h1>Name: {contact.name}</h1>
      <p>Country: {contact.country}</p>
    </main>
  );
};

export default ContactId;
