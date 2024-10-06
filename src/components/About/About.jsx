import AboutGallery from "../AboutGallery/AboutGallery";
import Button from "../Button/Button";
const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-1 pb-8 pt-20 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px]"
    >
      <div className="container">
        <div>
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-12 max-w-[540px] lg:mb-0">
                <h2 className="mb-5 text-3xl font-bold leading-tight text-dark dark:text-white sm:text-[40px] sm:leading-[1.2]">
                  Innovative Tools for Real Estate Excellence
                </h2>
                <p className="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6">
                  The main ‘thrust’ is to focus on educating our clients on how
                  to best navigate the real estate market with interactive
                  guides and personalized consultations led by industry experts.
                  <br />
                  <br />
                  The main ‘thrust' is to focus on educating attendees on how to
                  best protect highly vulnerable business applications with
                  interactive panel.
                </p>

                <Button
                  title="Know More"
                  style="border-primary bg-primary hover:border-blue-dark hover:bg-blue-dark"
                />
              </div>
            </div>

            <AboutGallery />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
