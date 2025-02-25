import React from "react";
import Header from "../components/Header";
import ActiveSubstances from "../components/ActiveSubstances";
import Timeline from "../components/TimeLine";
import AdvantagesTable from "../components/AdvantagesTable";

const LandingPage: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="start-picture" />
        <span className="title">
          <div className="rating-container">
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-half"></i>
            <p> + 1,234 cream fans </p>
          </div>
          <p>
            <strong> Twoje dłonie </strong> zasługują
          </p>
          <p>
            na wakacje z <strong>HANDYcream</strong>
          </p>
        </span>
        <span className="subtitle">
          HANDYcream to starannie opracowana formuła, która pomaga w pielęgnacji
          skóry dłoni, dostarczając jej niezbędnych substancji odżywczych i
          nawilżających. Dzięki połączeniu naturalnych składników, krem zapewnia
          długotrwałą ochronę, nawilżenie i wygładzenie.
        </span>
        <div className="hand-picture" />
        <ActiveSubstances />
        <Timeline />
        <AdvantagesTable />
      </div>
    </div>
  );
};

export default LandingPage;
