import React from "react";

const ADDRESS = "Jawahar Nagar, Reddiarpalayam, Puducherry 605005";

export default function Contact() {
  return (
    <main className="bg-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800">Contact Us</h1>
          <p className="mt-2 text-gray-600">We're happy to hear about your project — send us a message or drop by.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form column (left on large, full width on mobile) */}
          <div className="lg:col-span-2">
            <div className="bg-white shadow-lg rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Send a message</h2>

              <form className="space-y-4" aria-label="Contact form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="sr-only">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name*"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-md bg-gray-50 focus:ring-2 focus:ring-orange-300 outline-none"
                  />
                  <label className="sr-only">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email*"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-md bg-gray-50 focus:ring-2 focus:ring-orange-300 outline-none"
                  />
                </div>

                <div>
                  <label className="sr-only">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone*"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-md bg-gray-50 focus:ring-2 focus:ring-orange-300 outline-none"
                  />
                </div>

                <div>
                  <label className="sr-only">Message</label>
                  <textarea
                    name="message"
                    rows="6"
                    placeholder="Tell us about your project *"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-md bg-gray-50 resize-none focus:ring-2 focus:ring-orange-300 outline-none"
                  />
                </div>

                <div className="flex items-center gap-4">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg shadow-md hover:scale-[0.99] transition-transform"
                  >
                    SUBMIT
                  </button>
                  <p className="text-sm text-gray-500">We'll get back to you within 48 hours.</p>
                </div>
              </form>
            </div>
          </div>

          {/* Right column: map + contact cards */}
          <aside className="space-y-6">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              {/* Responsive Google Map iframe */}
              <iframe
                title="Office location"
                className="w-full h-56 sm:h-64 border-0"
                loading="lazy"
                src={`https://maps.google.com/maps?q=Jawahar%20Nagar%20Reddiarpalayam%20Puducherry&t=&z=13&ie=UTF8&iwloc=&output=embed`}
              />
            </div>

            <div className="bg-white shadow rounded-2xl p-4">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-md bg-orange-50 text-orange-600">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.1 2 5 5.1 5 9c0 5.3 7 13 7 13s7-7.7 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-sm text-gray-600">9, 1st Cross Rd, Jawahar Nagar, Reddiarpalayam, Puducherry, 605005</p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-md bg-orange-50 text-orange-600">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.1-.2 1.1.5 2.3.8 3.6.8.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.1 21 3 13.9 3 5c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.7 3.6.1.3.1.6-.2 1.1l-2.2 2.2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">Call</h4>
                  <p className="text-sm text-gray-600">(+91) 96264 24777 / (+91) 96884 24777</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-md bg-orange-50 text-orange-600">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-sm text-gray-600">gulfrajbuilders@gmail.com</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
