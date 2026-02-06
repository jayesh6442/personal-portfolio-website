import Link from "next/link";
import GradientBackground from "./components/GradientBackground";

export default function NotFound() {
  return (
    <div className="min-h-screen relative overflow-hidden text-white">
      <GradientBackground />
      <main className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-16 py-12">
        <section className="w-full max-w-2xl rounded-2xl border border-white/15 bg-[#2d1b4e]/45 backdrop-blur-sm p-6 sm:p-8 md:p-10 text-center shadow-xl shadow-black/20">
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#ffb08a] font-semibold mb-3 font-sans">
            404 Error
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-sans leading-tight text-white mb-4">
            Page Not Found
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed mb-8 font-sans">
            The page you are trying to open does not exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/"
              className="w-full sm:w-auto bg-[#ff6b35] hover:bg-[#ff7a4a] text-white px-6 py-2.5 sm:py-3 rounded-lg font-medium transition-all duration-200 shadow-lg shadow-orange-500/20 font-sans text-sm sm:text-base"
            >
              Back to Home
            </Link>
            <Link
              href="/#projects"
              className="w-full sm:w-auto border border-[#ff6b35]/70 text-white hover:bg-[#ff6b35]/10 px-6 py-2.5 sm:py-3 rounded-lg font-medium transition-all duration-200 font-sans text-sm sm:text-base"
            >
              View Projects
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
