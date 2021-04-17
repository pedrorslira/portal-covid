import React from "react";
import Card from "../../components/Card";
import SchedulingList from "../../components/Scheduling/SchedulingList";
import SchedulingContextProvider from "../../pages/Agendamento/SchedulingContextProvider";

function Consultation() {
  return (
    <div>
      <Card title="Consulta">
        <SchedulingList />
      </Card>
    </div>
  );
}

// eslint-disable-next-line react/display-name
export default () => (
  <SchedulingContextProvider>
    <Consultation />
  </SchedulingContextProvider>
);
