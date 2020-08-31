//https://next-auth.js.org/tutorials/securing-pages-and-api-routes#using-getsession
import { useSession, getSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import { requirePageAuth } from '../lib/requirePageAuth';

//https://github.com/nextauthjs/next-auth-example
export default function protectedPageClient() {
  const router = useRouter();
  const [session, loading] = useSession();

  if (!loading && !session) {
    // return <p>Access Denied</p>;
    router.push('/');
  }

  if (loading) return null;

  return (
    <>
      <h1>Protected Page</h1>
      <p>You can view this page because you are signed in.</p>
    </>
  );
}
