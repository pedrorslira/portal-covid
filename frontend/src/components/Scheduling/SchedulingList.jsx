import React, { useContext } from "react";
import { Table } from "react-bootstrap";
import { SchedulingContext } from "../../pages/Agendamento/SchedulingContextProvider";
import moment from "moment";

export default function SchedulingList() {
  const [schedulings] = useContext(SchedulingContext);

  schedulings.sort(function (a, b) {
    var c = new Date(a.schedulingDate);
    var d = new Date(b.schedulingDate);
    var e = new Date(a.schedulingTime);
    var f = new Date(b.schedulingTime);
    return c - d || e - f;
  });

  return (
    <>
      <Table bordered hover className="table table-hover table-dark">
        <thead className="bg-success">
          <tr>
            <th width="30%">Nome</th>
            <th>Data de Nascimento</th>
            <th>Data do Agendamento</th>
            <th width="10%">Horário do Agendamento</th>
          </tr>
        </thead>
        <tbody>
          {schedulings.map((scheduling, index) => (
            <tr key={index}>
              <td>{scheduling.name}</td>
              <td>{moment(scheduling.birthDate).format("DD/MM/YYYY")}</td>
              <td>{moment(scheduling.schedulingDate).format("DD/MM/YYYY")}</td>
              <td>{moment(scheduling.schedulingTime).format("HH:mm")}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
