import Head from "next/head";
import Image from "next/image";

export default function Home() {
  
  return (
    <div className="min-h-screen bg-[#283C8F] flex flex-col items-center justify-center p-4">
      <Head>
        <title>Coming Soon - SoClean Tissue</title>
        <meta name="description" content="Our website is coming soon!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center text-center">
        <Image
          src="/soclean.svg"
          alt="SoClean logo"
          width={800}
          height={300}
          priority
          className="mb-8 rounded-lg"
        />

        <h1 className="text-3xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 animate-pulse">
          Coming Soon!
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl">
          We're working hard to bring you something amazing. Stay tuned for updates!
        </p>

        <div className="text-gray-400 text-sm">
        </div>
      </main>

      <footer className="absolute bottom-4 text-gray-300 text-sm">
        &copy; {new Date().getFullYear()} BN Paper Co., Ltd. All rights reserved.
      </footer>
    </div>
  );
}
