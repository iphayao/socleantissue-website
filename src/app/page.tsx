import Head from "next/head";
import Image from "next/image";

export default function Home() {
  
  return (
    <div className="min-h-screen bg-[#283C8F] flex flex-col items-center justify-center p-4">
      <main className="flex flex-col items-center justify-center text-center">
        <Image
          src="/soclean.svg"
          alt="SoClean logo"
          width={800}
          height={300}
          priority
          className="mb-8 rounded-lg"
        />

        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-xl animate-pulse">
          Coming Soon!
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
