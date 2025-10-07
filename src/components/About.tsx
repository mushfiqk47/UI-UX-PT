export const About = () => {
  return (
    <section id="about" className="bg-white py-20 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-20">
          <div className="flex justify-center">
            <img
              src="/mushfiq-kabir-portrait.jpg"
              alt="Mushfiq Kabir"
              className="h-auto w-full max-w-sm rounded-3xl object-cover shadow-xl grayscale"
            />
          </div>
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
              Get to Know Me! 🙌
            </h2>
            <p className="text-lg leading-relaxed text-text-secondary">
              UI design isn't just my job; it's my craft. I create intuitive, high-quality digital experiences that work. Let's collaborate and make something exceptional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};