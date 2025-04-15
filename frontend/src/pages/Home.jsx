import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />

      <main className="flex flex-col justify-center items-center text-center px-4 py-32">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          Learn Sign Language <br /> with AI-powered Feedback
        </h1>

        <p className="mt-6 text-lg text-gray-400 max-w-xl">
          SYN helps you practice ASL in real-time with instant corrections. Right in your browser.
        </p>
      </main>
    </div>
  );
}












