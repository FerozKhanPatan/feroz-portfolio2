const Contact = () => {
  return (
    <section className="py-16 px-4 text-center" id="contact">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact Me</h2>
      <p className="text-gray-400 text-lg mb-6">
        Interested in collaborating or just want to say hi? My inbox is always open.
      </p>
      <a
        href="mailto:faerouz@tutamail.com"
        className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl transition-all"
      >
        Say Hello
      </a>

      <div className="flex justify-center mt-8 gap-6 text-2xl">
        <a
          href="https://github.com/feroz365"
          target="_blank"
          rel="noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
        >
          <i className="fab fa-github"></i> {/* Optional icon setup */}
        </a>
        <a
          href="https://www.linkedin.com/in/feroz365"
          target="_blank"
          rel="noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </section>
  );
};

export default Contact;