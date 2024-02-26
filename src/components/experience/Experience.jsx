import React from "react";
import "./experience.css";
import { PiCalendarBold } from "react-icons/pi";
import { MdOutlineLocationOn } from "react-icons/md";

const Experience = () => {
  return (
    <section id="experience">
      <h5> My Career Milestones</h5>
      <h2>Experience</h2>

      <div className="experience__container e_container">
        <div className="experience__sections">
          <div className="experience__content">
            <div className="experience__data">
              <div className="exprience__single_data">
                <h3 className="experience__title">HiCounselor</h3>
                <span className="experience__subtitle">Software Developer</span>
                <div className="experience__location">
                  <MdOutlineLocationOn className="experience__icon" />
                  San Francisco (Remote)
                </div>
                <div className="experience__calendar">
                  <PiCalendarBold className="experience__icon" /> Jan 2023 - Oct
                  2023
                </div>
              </div>

              <div>
                <span className="experience__rounder"></span>
                <span className="experience__line"></span>
              </div>
            </div>
            {/*  <!-- end of  experience__data 1 --> */}

            <div className="experience__data">
              <div></div>
              <div>
                <span className="experience__rounder"></span>
                <span className="experience__line"></span>
              </div>
              <div className="exprience__single_data">
                <h3 className="experience__title">
                  Volkswagen Group Solutions India
                </h3>
                <span className="experience__subtitle">Software Engineer</span>
                <div className="experience__footer">
                  <div className="experience__location">
                    <MdOutlineLocationOn className="experience__icon" />
                    Gurugram (Hybrid)
                  </div>
                  <div className="experience__calendar">
                    <PiCalendarBold className="experience__icon" /> Nov 2023 -
                    Present
                  </div>
                </div>
              </div>
            </div>
            {/*  <!-- end of  experience__data 1 --> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
