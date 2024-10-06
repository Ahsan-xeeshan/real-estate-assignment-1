import Cards from "../Cards/Cards";
import TopHeading from "../TopHeading/TopHeading";

const Available = () => {
  return (
    <section>
      <div className="container">
        <TopHeading
          title="Properties"
          lead="Grab your Dream Property"
          brief="There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form."
        />

        <Cards />
      </div>
    </section>
  );
};

export default Available;
