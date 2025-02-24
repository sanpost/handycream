import React from "react";
import Header from "../components/Header";
import ActiveSubstances from "../components/ActiveSubstances";
import Timeline from "../components/TimeLine";

const LandingPage: React.FC = () => {
  const timelineData = [
    {
      day: "Dzień 1",
      image: "path/to/day1.jpg",
      description:
        "Pierwsza aplikacja: Skóra dłoni zaczyna chłonąć intensywne nawilżenie. Uczucie komfortu już po pierwszym użyciu.",
    },
    {
      day: "Dzień 2",
      image: "path/to/day2.jpg",
      description:
        "Dzień 2: Skóra jest bardziej miękka i gładka. Krem działa jak tarcza ochronna przed utratą wilgoci.",
    },
    {
      day: "Dzień 3",
      image: "path/to/day3.jpg",
      description:
        "Dzień 3: Zmniejszenie zaczerwienienia i podrażnień. Skóra jest bardziej elastyczna, a zmarszczki stają się mniej widoczne.",
    },
    {
      day: "Dzień 4",
      image: "path/to/day4.jpg",
      description:
        "Dzień 4: Wyraźna poprawa jędrności i tekstury skóry. Dłonie wyglądają na młodsze i bardziej zadbane.",
    },
    {
      day: "Dzień 5",
      image: "path/to/day5.jpg",
      description:
        "Dzień 5: Skóra jest w pełni nawilżona, gładka i jedwabista w dotyku. Efekt nawilżenia utrzymuje się przez cały dzień.",
    },
  ];

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
      </div>
    </div>
  );
};

export default LandingPage;
