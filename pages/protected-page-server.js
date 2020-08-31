//https://next-auth.js.org/tutorials/securing-pages-and-api-routes#using-getsession
import { useSession, getSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import { requirePageAuth } from '../lib/requirePageAuth';

//https://github.com/nextauthjs/next-auth-example
export default function protectedPage({ session }) {
  console.log(session);

  return (
    <>
      <h1>Protected Page</h1>
      <p>You can view this page because you are signed in.</p>
    </>
  );
}

/*
{
  user: {
    name: 'denny3391',
    email: 'denny.dharmawan91@gmail.com',
    image: 'https://api.adorable.io/avatars/285/abott@adorable.png'
  },
  expires: '2020-09-29T12:35:11.439Z'
}
*/
export const getServerSideProps = requirePageAuth((context, session) => {
  // console.log(context);
  // console.log(session);
  // fetch data here

  return {
    props: { session },
  };
});
