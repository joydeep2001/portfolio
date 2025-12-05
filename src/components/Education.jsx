import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const educationData = [
  {
    startYear: 2016,
    endYear: 2017,
    status: "Passed",
    examName: "Secondary",
    percentage: 87,
    institute: "SNNI",
  },
  {
    startYear: 2018,
    endYear: 2019,
    status: "Passed",
    examName: "Higher Secondary",
    percentage: 70,
    institute: "SNNI",
  },
  {
    startYear: 2019,
    endYear: 2022,
    status: "Passed",
    examName: "Diploma in Computer Science",
    percentage: 81,
    institute: "APC Roy Polytechnic",
  },
  {
    startYear: 2022,
    endYear: 2025,
    status: "Passed",
    examName: "Btech in Computer Science",
    percentage: 65.5,
    institute: "Swami Vivekananda University",
  },
];

function EducationCard({
  startYear,
  endYear,
  status,
  examName,
  percentage,
  institute,
}) {
  return (
    <div data-aos="fade-up" className="edu-card">
      <div className="yr">
        <p>
          {startYear}-{endYear}:
        </p>
      </div>
      <div className="st-txt">
        <p>
          {status} {examName}
        </p>
      </div>
      <div className="prtg">
        <p>Percentage: {percentage}</p>
      </div>
      <div className="inst">
        <p>{institute}</p>
      </div>
    </div>
  );
}

export default function Education() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section className="education-sec">
      <h1>Educational Background</h1>
      <div className="container">
        {educationData.map((data) => (
          <EducationCard {...data} />
        ))}
      </div>
      <div
        data-aos="fade-left"
        className="building"
      >
        <img src="/portfolio/edu-build.png" alt="clg" />
      </div>
    </section>
  );
}
