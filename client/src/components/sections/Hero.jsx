const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-dark text-light pt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-primary">Kelvin Kigen</span>
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6">Full Stack Developer</h2>
            <p className="text-lg mb-8">
              I build exceptional digital experiences with modern technologies.
            </p>
            <button className="bg-primary hover:bg-secondary text-white font-bold py-3 px-6 rounded-lg transition duration-300">
              View My Work
            </button>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <img 
              src="/profile.jpg" 
              alt="Profile" 
              className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover mx-auto border-4 border-primary"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;