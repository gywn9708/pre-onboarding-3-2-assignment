import { DiReact } from 'react-icons/di';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();
  const isAuth = router.route === '/login' || router.route === '/register';
  return (
    <header className="w-full max-w-1/2 h-20 flex justify-center items-center mb-2 px-2">
      <div className=" h-full text-blue-400 mr-2 flex justify-center items-center">
        <DiReact className="w-full h-2/3" />
      </div>
      <h1
        className={`${
          isAuth ? 'text-4xl' : 'text-2xl'
        } font-bold text-blue-400 `}
      >
        Preface
      </h1>
    </header>
  );
}
