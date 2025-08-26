const About = () => {
  return (
    <>
      <div className="max-h-screen bg-secondary font-primary text-white px-1 lg:px-6 py-12 flex items-center justify-center">
        <div className="max-w-4xl bg-bgDark p-8 rounded-2xl shadow-lg space-y-6">
          <h1 className="text-4xl font-bold text-primary mb-4">About Us</h1>
          <p className="text-gray-300 text-lg">
            Welcome to{" "}
            <span className="text-primary  font-semibold">Melodies</span> —
            your one-stop destination for discovering, sharing, and enjoying
            music like never before.
          </p>
          <p className="text-gray-400">
            Our journey began with a simple idea: to make music more accessible,
            personalized, and beautiful. We’re a team of developers, designers,
            and music lovers building an experience that brings rhythm and
            technology together.
          </p>
          <p className="text-gray-400">
            we aim to keep you in tune with what you love. Our sleek, responsive
            interface ensures that your vibe is never interrupted — whether
            you're on mobile, tablet, or desktop.
          </p>
          <p className="text-gray-400">
            Join thousands of users who trust BeatHub to amplify their everyday
            mood, motivation, and memories. Because music isn’t just sound —
            it’s a lifestyle.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
