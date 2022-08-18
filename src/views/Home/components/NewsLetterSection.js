import React from "react";

const NewsLetterSection = () => {
  return (
    <section className="pt-32 pb-[140px] bg-cream-white" id="contact">
      <div className="container">
        <h2 className="text-[32px] font-bold text-dark-blue text-center">
          Stay up to date
        </h2>
        <p className="max-w-[590px] mx-auto text-center text-[16px] leading-[24px] mt-6 text-dark-green tracking-[0.09em]">
          Register you’re email with us so we send you any upcoming news &
          updates in FemActive
        </p>

        <div className="flex justify-center mt-10">
          <form>
            <div className="flex">
              <input
                type="email"
                placeholder="example@email.com"
                className="w-[304px] p-4 text-black text-sm placeholder:text-[#AFAFAF] outline-none border border-transparent border-r-0 bg-transparent focus:border-[#AFAFAF]"
              />
              <button
                type="submit"
                className="text-sm py-4 px-8 bg-dark-blue text-[#E3BFBB] font-bold outline-none border border-dark-blue"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsLetterSection;
