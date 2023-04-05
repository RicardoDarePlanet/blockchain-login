import Head from 'next/head';
import Image from 'next/image';
import Router from 'next/router';



const Home = () => {

  return (
    <>
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
