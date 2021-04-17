import React, { useContext } from "react";
import { Table } from "react-bootstrap";
import { SchedulingContext } from "../../pages/Agendamento/SchedulingContextProvider";

export default function SchedulingList() {
  const [schedulings] = useContext(SchedulingContext);

  return (
    <>
      <Table bordered hover className="schedulings">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Data de Nascimento</th>
            <th>Data de Agendamento</th>
            <th>Horário de Agendamento</th>
          </tr>
        </thead>
        <tbody>

        {schedulings.map((scheduling, index) => (
            <tr key={index} className="scheduling">
              <td>{scheduling.name}</td>
              <td>{scheduling.birthDate}</td>
              <td>{scheduling.schedulingDate}</td>
              <td>{scheduling.schedulingTime}</td>
            </tr>
          ))}

        
        </tbody>
      </Table>
    </>
  );
}
