import React from "react";

const HowSection = () => {
  return (
    <section className="py-[195px] bg-dark-blue">
      <div
        style={{
          backgroundImage: 'url("/img/why-section-bg.png")',
        }}
        className="container flex justify-between items-center"
      >
        <div>
          <h2 className="why_title">HOW?</h2>
          <p className="why_description">
            As a solution, we are creating FemActive, an inclusive and
            comprehensive booking platform for ladies-only fitness activities
            and facilities. Our mission is to enhance the accessibility of
            fitness & health related activities and provide convenience to each
            and every female. By fusing fitness and technology to create a
            platform that would bring its users closer to their fitness
            aspirations and encourage them to create sustainable habits for
            life.
          </p>
        </div>

        <div>
          <img src="/img/how-section-img.png" alt="how-section-img" />
        </div>
      </div>
    </section>
  );
};

export default HowSection;
