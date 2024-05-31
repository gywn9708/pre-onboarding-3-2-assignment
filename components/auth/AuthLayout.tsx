import { useRouter } from 'next/router';
import Footer from '../Footer';

import AuthForm from './AuthForm';
import Header from '../Header';

const SIGN_IN_URL = '/login';
const SIGN_UP_URL = '/register';

export default function AuthLayout() {
  const { pathname } = useRouter();
  const isLogin = pathname === SIGN_IN_URL;
  return (
    <div className="w-screen flex items-center justify-center h-screen bg-slate-200 ">
      <section className="flex flex-col items-center justify-center h-screen  w-2/3">
        <Header />
        <AuthForm
          name={isLogin ? 'Login' : 'Register'}
          isLogin={isLogin}
          url={isLogin ? SIGN_UP_URL : SIGN_IN_URL}
        />
        <Footer />
      </section>
    </div>
  );
}
