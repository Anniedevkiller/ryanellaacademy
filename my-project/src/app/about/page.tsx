

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F0EFE5]">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gray-800">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60 z-10"></div>
        <div className="absolute inset-0 z-0 bg-[#222]">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#d3b15a] opacity-20 rounded-full"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-[#d3b15a] opacity-10 rounded-full"></div>
        </div>
        <div className="container mx-auto px-4 z-20 relative">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="inline-block px-4 py-1 bg-[#d3b15a]/20 text-[#d3b15a] font-medium rounded-full mb-4">
              Our Story
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif">
              About <span className="text-[#d3b15a]">Ryanella Academy</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              Empowering the next generation of fashion innovators through excellence in education, creativity, and
              craftsmanship.
            </p>
          </div>
        </div>
      </section>
      </main>
  )
}