import Link from "next/link";

import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

// Corrige la ruta según la estructura de tu proyecto

const HomePage = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-2">
          Welcome to GYM AI
        </h1>
        <p className="text-base md:text-lg mb-4">
          Your Personalized Workout Planning Tool
        </p>
      </div>

      <div className="mt-8 space-y-4 w-full flex items-center justify-center">
      {!session?.user ? <Link
          href="/signin"
          className="text-zinc-50 text-2xl px-6 py-4 mb-4 mt-3 font-semibold rounded-lg bg-appOrangeButton hover:shadow-inner transform hover:scale-110 hover:bg-opacity-50 transition ease-out duration-300"
        >
          Get Started
        </Link>: null}
        
      </div>
    </div>
  );
};

export default HomePage;
