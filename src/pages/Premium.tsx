import Navbar from "../components/Navbar";

const Premium = () => {
  return (
    <>
      <Navbar />
      <div className="max-h-screen bg-inherit text-white px-1 lg:px-6 py-12 flex items-center justify-center">
        <div className="max-w-4xl bg-bgDark p-10 rounded-2xl shadow-lg space-y-8 text-center">
          <h1 className="text-4xl font-bold text-primary">Go Premium</h1>
          <p className="text-gray-300 text-lg">
            Unlock the full potential of your music experience with our upcoming Premium plan.
          </p>
          <p className="text-gray-500">
            Enjoy exclusive features, ad-free listening, offline access, and more.
            We're working on something amazing for our premium users — stay tuned!
          </p>

          <button
            disabled
            className="mt-4 px-6 py-3 bg-primary text-white rounded-lg cursor-not-allowed opacity-70"
          >
            Coming Soon
          </button>
        </div>
      </div>
    </>
  );
};

export default Premium;
