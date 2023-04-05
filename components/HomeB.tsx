import Head from 'next/head';
import Image from 'next/image';

const Home = () => {
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
            <button className="bg-white text-gray-800 font-medium py-2 px-4 rounded">
              Log in
            </button>
          </form>
        </div>

      </header>
      <main className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-medium text-gray-900">NFT´s</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">

            <div className="bg-white shadow-lg rounded-lg">
              <div className="h-48 bg-gray-400 rounded-t-lg overflow-hidden">
                <Image src="/card-image-1.jpg" alt="Card Image" layout="fill" objectFit="cover" />
              </div>
              <div className="px-4 py-4">
                <h3 className="text-lg font-medium text-gray-900">NFT 1</h3>
                <p className="mt-2 text-gray-600">Card Description</p>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg">
              <div className="h-48 bg-gray-400 rounded-t-lg overflow-hidden">
                <Image src="/card-image-2.jpg" alt="Card Image" layout="fill" objectFit="cover" />
              </div>
              <div className="px-4 py-4">
                <h3 className="text-lg font-medium text-gray-900">NFT 2</h3>
                <p className="mt-2 text-gray-600">Card Description</p>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg">
              <div className="h-48 bg-gray-400 rounded-t-lg overflow-hidden">
                <Image src="/card-image-3.jpg" alt="Card Image" layout="fill" objectFit="cover" />
              </div>
              <div className="px-4 py-4">
                <h3 className="text-lg font-medium text-gray-900">NFT 3</h3>
                <p className="mt-2 text-gray-600">Card Description</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home
