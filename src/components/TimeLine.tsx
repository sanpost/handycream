import React, { useState } from "react";

// Dane do timeline
const timelineData = [
  {
    day: "Dzień 1",
    title: "Pierwsze wrażenie",
    image: "/day1.png",
    description:
      "Pierwsza aplikacja: Skóra dłoni zaczyna chłonąć intensywne nawilżenie. Uczucie komfortu już po pierwszym użyciu.",
  },
  {
    day: "Dzień 2",
    title: "Widoczna różnica w nawilżeniu",
    image: "/day2.png",
    description:
      "Dzień 2: Skóra jest bardziej miękka i gładka. Krem działa jak tarcza ochronna przed utratą wilgoci.",
  },
  {
    day: "Dzień 3",
    title: "Ukojenie dla podrażnionej skóry",
    image: "/day3.png",
    description:
      "Dzień 3: Zmniejszenie zaczerwienienia i podrażnień. Skóra jest bardziej elastyczna, a zmarszczki stają się mniej widoczne.",
  },
  {
    day: "Dzień 4",
    title: "Wzrost jędrności i gładkości",
    image: "/day4.png",
    description:
      "Dzień 4: Wyraźna poprawa jędrności i tekstury skóry. Dłonie wyglądają na młodsze i bardziej zadbane.",
  },
  {
    day: "Dzień 5",
    title: "Optymalny efekt nawilżenia",
    image: "/day5.png",
    description:
      "Dzień 5: Skóra jest w pełni nawilżona, gładka i jedwabista w dotyku. Efekt nawilżenia utrzymuje się przez cały dzień.",
  },
];

const Timeline: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="timeline-container">
      {timelineData.map((item, index) => (
        <div
          key={index}
          className={`timeline-item 
            ${index === 0 ? (selected !== null ? "small" : "large") : ""} 
            ${selected === index ? "active" : ""}`}
          onClick={() => setSelected(index === selected ? null : index)}
        >
          <img src={item.image} alt={item.title} className="timeline-image" />
          <div className="timeline-content">
            <h3>{item.day}</h3>
            <h4>{item.title}</h4>
            {(index === 0 && selected === null) || selected === index ? (
              <p className="timeline-description">{item.description}</p>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
