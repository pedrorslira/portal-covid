import React, { useContext, useState } from "react";
import { Table, Form, Button, Col } from "react-bootstrap";
import { SchedulingContext } from "../../pages/Agendamento/SchedulingContextProvider";
import moment from "moment";
import { toast } from "react-toastify";
import axios from "../../utils/api";

export default function SchedulingList() {
  const [schedulings] = useContext(SchedulingContext);
  const [status, setStatus] = useState("2");

  const sortSchedulings = () => {
    schedulings.sort(function (a, b) {
      var schDate1 = new Date(a.schedulingDate);
      var schDate2 = new Date(b.schedulingDate);
      var schTime1 = new Date(a.schedulingTime);
      var schTime2 = new Date(b.schedulingTime);
      var age1 = moment().diff(new Date(a.birthDate), "years");
      var age2 = moment().diff(new Date(b.birthDate), "years");
      if (age1 < 60) {
        age2 = age1;
      }
      return schDate1 - schDate2 || schTime1 - schTime2 || age2 - age1;
    });
  };

  const onSubmit = async (event, scheduling) => {
    event.preventDefault();
    scheduling.status = status;
    try {
      await axios.put(`/scheduling/${scheduling._id}`, scheduling);
      toast.success("Status do Agendamento Concluído.");
    } catch (e) {
      toast.error("Ocorreu um erro desconhecido.");
      console.error(e.message);
    }
  };

  return (
    <>
      {sortSchedulings()}
      <Table bordered hover className="table table-hover table-dark">
        <thead className="bg-success">
          <tr>
            <th width="30%">Nome</th>
            <th>Data de Nascimento</th>
            <th>Data do Agendamento</th>
            <th width="5%">Horário do Agendamento</th>
            <th width="25%">Conclusão do Atendimento </th>
          </tr>
        </thead>
        <tbody>
          {schedulings.map((scheduling, index) => (
            <tr key={index}>
              <td>{scheduling.name}</td>
              <td>{moment(scheduling.birthDate).format("DD/MM/YYYY")}</td>
              <td>{moment(scheduling.schedulingDate).format("DD/MM/YYYY")}</td>
              <td>{moment(scheduling.schedulingTime).format("HH:mm")}</td>
              <td>
                <Form.Group>
                  <Col xs={8}>
                    <Form.Control
                      as="select"
                      defaultValue={scheduling.status}
                      onChange={(event) => {
                        setStatus(event.target.value);
                      }}
                    >
                      <option value="0">Atendido - Primeira Dose</option>
                      <option value="1">Atendido - Segunda Dose</option>
                      <option value="2">Não Atendido</option>
                    </Form.Control>
                  </Col>
                </Form.Group>

                <Button
                  className="ml-3"
                  type="submit"
                  variant="secondary"
                  onClick={(event) => onSubmit(event, scheduling)}
                >
                  Concluir Atendimento
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>    
    </>
  );
}
