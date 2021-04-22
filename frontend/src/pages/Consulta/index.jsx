import React from "react";
import Card from "../../components/Card";
import SchedulingList from "../../components/Scheduling/SchedulingList";
import SchedulingContextProvider from "../../pages/Agendamento/SchedulingContextProvider";
import logo from "../../assets/logo_portal_da_vacina.png";

function Consultation() {
  return (
    <div>
      <Card title="Consulta">
        <SchedulingList />
      </Card>
      <img src={logo} alt="Logo Portal da Vacina" className="logoSmaller" />
    </div>
  );
}

// eslint-disable-next-line react/display-name
export default () => (
  <SchedulingContextProvider>
    <Consultation />
  </SchedulingContextProvider>
);
