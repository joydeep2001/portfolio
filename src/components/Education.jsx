import React from "react";

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
    percentage: 87,
    institute: "APC Roy Polytechnic",
  },
  {
    startYear: 2022,
    endYear: 2025,
    status: "Pursuing",
    examName: "Btech in Computer Science",
    percentage: 87,
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
    <div className="edu-card">
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
  return (
    <section className="education-sec">
      <h1>Educational Background</h1>
      <div className="container">
        {educationData.map((data) => (
          <EducationCard {...data} />
        ))}
      </div>
    </section>
  );
}
