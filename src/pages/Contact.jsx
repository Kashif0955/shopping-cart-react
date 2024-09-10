import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="mt-12">
      <div className="container mx-auto px-4">
        {/* Iframe Container */}
        <div className="mb-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.4418279745196!2d67.06466557586826!3d24.882906544358068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33faf17e3e713%3A0xc9e0560b08909aa2!2sSMIT%20Head%20Office%20Bahadurabad!5e0!3m2!1sen!2s!4v1725990426920!5m2!1sen!2s"
            className="h-[72vh] w-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Contact Form and Information */}
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 bg-white p-8 rounded-lg shadow-md">
            <div className="mb-12">
              <h4 className="text-primary font-semibold text-sm tracking-wide mb-4">INFORMATION</h4>
              <h1 className="text-light-black font-semibold text-4xl tracking-wide mb-2">Contact Us</h1>
              <span className="text-light-black text-sm">
                As you might expect of a company that began as a high-end interiors contractor, we pay strict attention.
              </span>
              <div className="mt-8">
                <h3 className="text-light-black text-2xl font-semibold my-4">USA</h3>
                <p className="text-light-black text-sm">
                  195 E Parker Square Dr, Parker, CO 801
                  <br />
                  +43 982-314-0958
                </p>
              </div>
              <div>
                <h3 className="text-light-black text-2xl font-semibold my-4">Pakistan</h3>
                <p className="text-light-black text-sm">
                SMIT Head Office Bahadurabad.
                  <br />
                  411014
                </p>
              </div>
            </div>
          </div>

          <form
            action="https://formspree.io/f/xzbowpjq"
            method="POST"
            className="flex-1 bg-white p-8 rounded-lg shadow-md"
          >
            <div className="flex flex-col gap-8">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                required
                className="w-full p-4 border border-grey text-grey text-sm"
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
                className="w-full p-4 border border-grey text-grey text-sm"
              />
              <textarea
                name="message"
                id="message"
                cols="52"
                rows="7"
                placeholder="Message"
                required
                className="w-full p-4 border border-grey text-grey text-sm resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full py-4 px-6 text-white font-medium bg-black border-none text-sm tracking-wider cursor-pointer"
              >
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
