import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Router from 'next/router';



const Navbar = () => {

  return (
    <>
      <Head>
        <title>Blockchain</title>
      </Head>

      <header className="flex items-center justify-between bg-gray-800 text-white py-4 px-6">

        <div className="flex items-center">
          <Image className="h-150" src="/favicon.ico" alt="Logo" width={150} height={150} />
          <h1 className="ml-4 font-bold text-xl">Blockchain</h1>
        </div>

        <div className="max-w-screen-md w-full flex justify-end px-4">
          <form>
            <input
              type="text"
              placeholder="Buscar..."
              className="py-2 px-4 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button
              type="submit"
              className="py-2 px-4 ml-2 mx-2 rounded-md bg-blue-600 text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              Buscar
            </button>
            <Link href="/register" replace>
              <button>Register</button>
            </Link>

          </form> 
        </div>
      </header>
    </>
  );
};

export default Navbar
