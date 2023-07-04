import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSession } from 'next-auth/client'; // import useSession hook from NextAuth

export default function Home() {
  const [session, loading] = useSession(); // Use NextAuth's useSession hook
  const router = useRouter();

  useEffect(() => {
    if (!loading && !session) { // If not loading and no session, redirect to login
      router.push('/login');
    }
  }, [session, loading, router]); // Add loading to the dependency array

  if (!session) { // If no session, show loading
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Welcome to the homepage, {session.user.name}</h1>
      {/* Rest of your homepage components */}
    </div>
  );
}
