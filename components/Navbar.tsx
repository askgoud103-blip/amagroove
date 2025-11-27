"use client";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-start">

      {/* Left Side: Logo */}
      <div className="flex flex-col items-start gap-1">
        <h1 className="text-2xl font-bold text-[var(--gold)] tracking-wide drop-shadow-lg">
          Amagroove
        </h1>

        <video
          className="w-20 rounded-lg shadow-lg border-2 border-[var(--gold)]"
          autoPlay loop muted playsInline
        >
          <source src="/hero1.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Right Side: Nav Links */}
      <ul className="flex gap-6 text-lg font-medium items-center mt-2 
                     max-md:flex-col max-md:items-end max-md:bg-black/60 
                     max-md:p-4 max-md:rounded-xl max-md:gap-2">

        <li><a href="/" className="hover:text-[var(--gold)]">Home</a></li>
        <li><a href="/about" className="hover:text-[var(--gold)]">About</a></li>
        <li><a href="/performances" className="hover:text-[var(--gold)]">Performances</a></li>
        <li><a href="/videos" className="hover:text-[var(--gold)]">Videos</a></li>
        <li><a href="/gallery" className="hover:text-[var(--gold)]">Gallery</a></li>
        <li><a href="/events" className="hover:text-[var(--gold)]">Events</a></li>
        <li><a href="/contact" className="hover:text-[var(--gold)]">Contact</a></li>
      </ul>

    </nav>
  );
}

