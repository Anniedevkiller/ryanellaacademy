import Link from "next/link"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F0EFE5]">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"></div>
        <div className="absolute inset-0 z-0 bg-[#333] flex items-center justify-center">
          <div className="w-full h-full bg-[#222] opacity-50 flex items-center justify-center">
            <div className="w-1/2 h-1/2 bg-[#d3b15a] opacity-20 rounded-full transform rotate-45"></div>
          </div>
        </div>
        <div className="container mx-auto px-4 z-20 relative">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-serif leading-tight">
              <span className="text-[#d3b15a]">Welcome</span> To
              <br />
              <span className="text-[#d3b15a]">Ryanella</span> Academy
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-xl">
              Unlock your fashion potential with our comprehensive programs focused on design excellence and
              industry-ready skills.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/gallery"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-md hover:bg-white/10 transition-all flex items-center justify-center"
              >
                View Gallery
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#F0EFE5] to-transparent z-10"></div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Instructors",
                description:
                  "Learn from industry professionals with years of experience in fashion design and business.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-[#d3b15a]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                ),
              },
              {
                title: "Hands-on Training",
                description: "Gain practical skills through our intensive workshops and real-world projects.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-[#d3b15a]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <line x1="20" y1="4" x2="8.12" y2="15.88"></line>
                    <line x1="14.47" y1="14.48" x2="20" y2="20"></line>
                    <line x1="8.12" y1="8.12" x2="12" y2="12"></line>
                  </svg>
                ),
              },
              {
                title: "Industry Recognition",
                description: "Our graduates are sought after by top fashion houses and design studios.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-[#d3b15a]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="8" r="7"></circle>
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                  </svg>
                ),
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-8 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all bg-white"
              >
                <div className="mb-4 p-3 bg-[#F0EFE5] inline-block rounded-full">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-[#F0EFE5]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 order-2 md:order-1">
              <div className="inline-block px-4 py-1 bg-[#d3b15a]/20 text-[#d3b15a] font-medium rounded-full mb-4">
                Our Story
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
                <span className="text-[#d3b15a]">About</span> Ryanella Academy
              </h2>
              <p className="text-lg mb-6 text-gray-700 leading-relaxed">
              At Ryanella Academy, we are dedicated to nurturing the
next generation of fashion designers who are passionate
about creativity, integrity, and hard work.
              </p>
              <p className="text-lg mb-8 text-gray-700 leading-relaxed">
              Our mission is simple: to train and shape professional
fashion designers within just 3-6 months through our
intensive programs.
              </p>
              <Link href="/about" className="text-[#d3b15a] font-semibold flex items-center hover:underline group">
                Learn more about our journey
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </Link>
            </div>
            <div className="md:w-1/2 relative h-96 w-full rounded-lg overflow-hidden shadow-xl order-1 md:order-2 mb-8 md:mb-0 bg-gradient-to-br from-[#d3b15a]/30 to-[#d3b15a]/70">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 bg-white/10 rounded-full"></div>
                <div className="absolute w-60 h-60 bg-white/5 rounded-full"></div>
                <div className="absolute w-80 h-80 bg-white/5 rounded-full"></div>
              </div>
              <div className="absolute bottom-6 left-6 bg-[#d3b15a] text-black px-4 py-2 rounded font-medium">
                Est. 2010
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-[#d3b15a]/20 text-[#d3b15a] font-medium rounded-full mb-4">
              What We Offer
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-serif">
              Our <span className="text-[#d3b15a]">Programs</span>
            </h2>
            <p className="text-lg mt-4 max-w-3xl mx-auto text-gray-600">
              Discover our comprehensive range of fashion programs designed to nurture your creativity and technical
              skills for a successful career in the fashion industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Foundation",
                description: "Ideal for complete beginners with zero knowledge in pattern drafting and use of a sewing machine.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-[#d3b15a]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                ),
                bgColor: "from-[#d3b15a]/10 to-[#d3b15a]/30",
              },
              {
                title: "Advance",
                description:
                  "Strictly for designers who are is very good in pattern drafting, can use an industrial machine, sew most styles excpect for African and English conture, draping, illustration, and sketching, beading and embellishments.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-[#d3b15a]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="8" r="7" />
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                  </svg>
                ),
                bgColor: "from-[#333]/10 to-[#333]/30",
              },
              {
                title: "Bridal",
                description:
                  "Advanced trsining for designers seeking expertise in bridal dresses, hip padding, waist snatching, corest making, draping and lace placement.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-[#d3b15a]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                ),
                bgColor: "from-[#d3b15a]/20 to-[#d3b15a]/40",
              },
            ].map((program, index) => (
              <div key={index} className="group">
                <div className={`relative h-64 mb-6 rounded-lg overflow-hidden bg-gradient-to-br ${program.bgColor}`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/10 rounded-full"></div>
                    <div className="absolute w-32 h-32 bg-white/5 rounded-full"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="bg-white/90 p-4 rounded-lg shadow-lg transform transition-transform duration-300 group-hover:-translate-y-2">
                      <div className="flex items-center mb-2">
                        <div className="mr-3">{program.icon}</div>
                        <h3 className="text-xl font-bold">{program.title}</h3>
                      </div>
                      <p className="text-gray-700 text-sm">{program.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/admission"
              className="px-8 py-4 bg-[#d3b15a] text-black font-semibold rounded-md hover:bg-[#c4a54e] transition-all inline-flex items-center group"
            >
              View All Programs
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#F0EFE5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-[#d3b15a]/20 text-[#d3b15a] font-medium rounded-full mb-4">
              Success Stories
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-serif">
              Student <span className="text-[#d3b15a]">Testimonials</span>
            </h2>
            <p className="text-lg mt-4 max-w-3xl mx-auto text-gray-600">
              Hear from our graduates who have transformed their passion into successful careers in the fashion
              industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Fashion Designer at Elegance Studios",
                quote:
                  "Ryanella Academy provided me with the perfect foundation to launch my career. The hands-on training and industry connections were invaluable.",
                bgColor: "bg-gradient-to-br from-[#d3b15a]/20 to-[#d3b15a]/40",
              },
              {
                name: "Michael Chen",
                role: "Founder of Chen Couture",
                quote:
                  "The technical skills I learned at Ryanella set me apart in the industry. The instructors' expertise and dedication to excellence shaped my approach to fashion.",
                bgColor: "bg-gradient-to-br from-[#333]/10 to-[#333]/30",
              },
              {
                name: "Aisha Patel",
                role: "Fashion Entrepreneur",
                quote:
                  "From pattern drafting to business strategy, Ryanella Academy equipped me with everything I needed to start my own successful fashion line.",
                bgColor: "bg-gradient-to-br from-[#d3b15a]/30 to-[#d3b15a]/50",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center mb-6">
                  <div className={`relative h-20 w-20 rounded-full overflow-hidden mb-4 ${testimonial.bgColor}`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-10 h-10 bg-white/20 rounded-full"></div>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="relative">
                  <svg
                    className="absolute top-0 left-0 h-8 w-8 text-[#d3b15a]/20 -translate-x-4 -translate-y-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="italic text-gray-700">{testimonial.quote}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#d3b15a] relative overflow-hidden">
        <div className="absolute inset-0 bg-[#d3b15a] opacity-90 z-0"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-serif">
            Ready to Start Your Fashion Journey?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto">
            Join Ryanella Academy and transform your passion for fashion into a thriving career. Applications for our
            next intake are now open.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-black text-white font-semibold rounded-md hover:bg-gray-900 transition-all flex items-center justify-center group"
            >
              Contact Us
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-wave-pattern bg-repeat-x"></div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter for the latest fashion trends, academy news, and exclusive event invitations.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d3b15a] focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#d3b15a] text-black font-semibold rounded-md hover:bg-[#c4a54e] transition-all whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
