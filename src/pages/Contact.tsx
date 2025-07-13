import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <>
    <Navbar/>
    <div className="max-h-screen bg-[#181818] text-white px-1 lg:px-6 py-12 flex items-center justify-center w-full">
      <div className="w-full max-w-4xl bg-[#1f1f1f] rounded-2xl shadow-lg p-8 md:p-12">
        <h2 className="text-4xl font-bold mb-6 text-[#62d962]">Contact Us</h2>
        <p className="text-gray-400 mb-10">
          Got a question or feedback? We'd love to hear from you!
        </p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="mb-2 text-sm">Full Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="px-4 py-2 rounded-lg bg-[#2a2a2a] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#62d962]"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-sm">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="px-4 py-2 rounded-lg bg-[#2a2a2a] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#62d962]"
            />
          </div>

          <div className="md:col-span-2 flex flex-col">
            <label className="mb-2 text-sm">Message</label>
            <textarea
              rows={5}
              placeholder="Type your message..."
              className="px-4 py-2 rounded-lg bg-[#2a2a2a] border border-gray-700 resize-none focus:outline-none focus:ring-2 focus:ring-[#62d962]"
            ></textarea>
          </div>

          <div className="md:col-span-2 text-right">
            <button
              type="submit"
              className="bg-[#62d962] hover:scale-90 cursor-pointer transition px-6 py-2 rounded-lg font-semibold"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div></>
  );
};

export default Contact;
