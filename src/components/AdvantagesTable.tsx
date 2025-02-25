import { CheckCircle, XCircle } from "lucide-react";

const advantages = [
  {
    feature: "Unikalne naturalne lipidy",
    explanation: "Odbudowują barierę ochronną skóry i zapewniają głębokie nawilżenie.",
  },
  {
    feature: "Kompleks antyoksydacyjny",
    explanation: "Chroni skórę przed przedwczesnym starzeniem się i czynnikami zewnętrznymi.",
  },
  {
    feature: "Brak sztucznych substancji zapachowych",
    explanation: "Minimalizuje ryzyko alergii i podrażnień skóry.",
  },
  {
    feature: "Ekspresowe wchłanianie bez tłustego filmu",
    explanation: "Pozwala na natychmiastowy komfort bez lepkiej warstwy.",
  },
  {
    feature: "Hipoalergiczna formuła",
    explanation: "Idealna dla osób o wrażliwej skórze, bez ryzyka podrażnień.",
  },
];

const AdvantagesTable = () => {
  return (
    <div className="handycream-table">
      <div className="table-header">
        <span>Cecha</span>
        <span>HANDYcream</span>
        <span>Inne kremy</span>
        <span>Dlaczego to ważne?</span>
      </div>
      {advantages.map((item, index) => (
        <div className="table-row" key={index}>
          <span className="feature">{item.feature}</span>
          <span className="icon check"><CheckCircle /></span>
          <span className="icon cross"><XCircle /></span>
          <span className="explanation">{item.explanation}</span>
        </div>
      ))}
    </div>
  );
};

export default AdvantagesTable;
