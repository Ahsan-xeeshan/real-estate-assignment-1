const TopHeading = ({ title, lead, brief }) => {
  return (
    <div className="-mx-4 flex flex-wrap">
      <div className="w-full px-4">
        <div className="mx-auto mb-[60px] max-w-[485px] text-center">
          <span className="mb-2 block text-lg font-semibold text-primary">
            {title}
          </span>
          <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
            {lead}
          </h2>
          <p className="text-base text-body-color dark:text-dark-6">{brief}</p>
        </div>
      </div>
    </div>
  );
};

export default TopHeading;
