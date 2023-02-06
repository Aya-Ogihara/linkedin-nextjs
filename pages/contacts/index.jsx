import { GoBack } from '@/components/GoBack';
import Link from 'next/link';
import { useRouter } from 'next/router';
import contacts from '../api/contact';

const Contacts = () => {
  const router = useRouter();

  return (
    <main className='main'>
      <GoBack />
      <h1>Contact page</h1>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <Link href={`/contacts/${contact.id}`}>{contact.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Contacts;
