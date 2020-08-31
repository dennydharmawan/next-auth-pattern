import { getSession } from 'next-auth/client';

export const requirePageAuth = (inner) => {
  return async (context) => {
    const session = await getSession(context);

    if (!session) {
      context.res.writeHead(307, { Location: '/' });
      context.res.end();

      return { props: {} };
    }

    return inner ? inner(context, session) : { props: { session } };
  };
};
