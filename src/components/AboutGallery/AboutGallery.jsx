import AboutImageOne from "../../assets/images/about/about-image-01.jpg";
import AboutImageTwo from "../../assets/images/about/about-image-02.jpg";
import MySVGComponent from "../MySVG/MySVGComponent";
const AboutGallery = () => {
  const bgOneIcon = (
    <>
      <rect
        opacity="0.1"
        x="-67"
        y="47.127"
        width="113.378"
        height="131.304"
        transform="rotate(-42.8643 -67 47.127)"
        fill="url(#paint0_linear_1416_214)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1416_214"
          x1="-10.3111"
          y1="47.127"
          x2="-10.3111"
          y2="178.431"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </>
  );

  const bgTwoIcon = (
    <>
      <rect
        opacity="0.1"
        x="0.86792"
        y="-6.67725"
        width="155.563"
        height="140.614"
        transform="rotate(-42.8643 0.86792 -6.67725)"
        fill="url(#paint0_linear_1416_215)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1416_215"
          x1="78.6495"
          y1="-6.67725"
          x2="78.6495"
          y2="133.937"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </>
  );

  const bgThreeIcon = (
    <>
      <rect
        opacity="0.1"
        x="175.011"
        y="108.611"
        width="101.246"
        height="148.179"
        transform="rotate(137.136 175.011 108.611)"
        fill="url(#paint0_linear_1416_216)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1416_216"
          x1="225.634"
          y1="108.611"
          x2="225.634"
          y2="256.79"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </>
  );
  return (
    <div className="w-full px-4 lg:w-1/2">
      <div className="-mx-2 flex flex-wrap sm:-mx-4 lg:-mx-2 xl:-mx-4">
        <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
          <div className="mb-4 sm:mb-8 sm:h-[400px] md:h-[540px] lg:h-[400px] xl:h-[500px]">
            <img
              src={AboutImageOne}
              alt="about image"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
          <div className="mb-4 sm:mb-8 sm:h-[220px] md:h-[346px] lg:mb-4 lg:h-[225px] xl:mb-8 xl:h-[310px]">
            <img
              src={AboutImageTwo}
              alt="about image"
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="relative z-10 mb-4 flex items-center justify-center overflow-hidden bg-primary px-6 py-12 sm:mb-8 sm:h-[160px] sm:p-5 lg:mb-4 xl:mb-8">
            <div>
              <span className="block text-5xl font-extrabold text-white">
                09
              </span>
              <span className="block text-base font-semibold text-white">
                We have
              </span>
              <span className="block text-base font-medium text-white text-opacity-70">
                Years of experience
              </span>
            </div>
            <div>
              <span className="absolute left-0 top-0 -z-10">
                <MySVGComponent
                  width="106"
                  height="144"
                  viewBox="0 0 106 144"
                  path={bgOneIcon}
                />
              </span>
              <span className="absolute right-0 top-0 -z-10">
                <MySVGComponent
                  width="130"
                  height="97"
                  viewBox="0 0 130 97"
                  path={bgTwoIcon}
                />
              </span>
              <span className="absolute bottom-0 right-0 -z-10">
                <MySVGComponent
                  width="175"
                  height="104"
                  viewBox="0 0 175 104"
                  path={bgThreeIcon}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutGallery;
