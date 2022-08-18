import React from "react";

const WhySection = () => {
  return (
    <section className="py-[195px] bg-dark-blue" id="why">
      <div
        style={{
          backgroundImage: 'url("/img/why-section-bg.png")',
        }}
        className="container flex justify-between items-center"
      >
        <div>
          <h2 className="why_title">WHY?</h2>
          <p className="why_description">
            As the fitness industry expands in the region, the demand for
            fitness facilities has increased. However, accessibility to such
            facilities and activities, we believe, remained stagnant. Moreover,
            our cultural landscape requires a specialized approach to tackle
            such matter, especially in regards to gender. Therefore, due to our
            emphasis on female inclusivity, we are focusing our efforts towards
            ladies-only activities and facilities, ensuring we meet the needs of
            women all around the region.
          </p>
        </div>

        <div>
          <img src="/img/why-section-image.png" alt="why-section-image" />
        </div>
      </div>
    </section>
  );
};

export default WhySection;
