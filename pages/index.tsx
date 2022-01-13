import type { GetStaticPropsContext, NextPage } from 'next';
import Head from 'next/head';
import { Accent } from 'common/accent';
import { Card, Contact } from 'molecules/card';
import ProfileImg from '../public/profile.jpg';

export async function getStaticProps(_: GetStaticPropsContext) {
  const contacts: Contact[] = [
    {
      accent: Accent.BLUE,
      icon: 'facebook',
      label: 'Facebook',
      href: 'https://www.facebook.com/akos.imre.16',
    },
    {
      accent: Accent.PINK,
      icon: 'instagram',
      label: 'Instagram',
      href: 'https://www.instagram.com/1mre4kos/',
    },
    {
      accent: Accent.GREEN,
      icon: 'linkedin',
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/imr34kos/',
    },
    {
      accent: Accent.ORANGE,
      icon: 'stackoverflow',
      label: 'StackOverflow',
      href: 'https://stackoverflow.com/users/5650927/imrea',
    },
  ];

  const props: NextPageProps = {
    // profile: ProfileImg.src,
    name: 'Ákos Imre',
    position: 'lead software engineer',
    company: 'EPAM',
    contacts,
  };

  return { props };
}

type NextPageProps = {
  name: string;
  position: string;
  company: string;
  contacts: Contact[];
};

const Home: NextPage<NextPageProps> = ({
  name,
  position,
  company,
  contacts,
}) => {
  return (
    <main className="h-full">
      <Head>
        <title>imrea.hu</title>
        <meta name="description" content="Homepage for Ákos Imre" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Card
        profile={ProfileImg.src}
        name={name}
        position={position}
        company={company}
        contacts={contacts}
      />
    </main>
  );
};

export default Home;
