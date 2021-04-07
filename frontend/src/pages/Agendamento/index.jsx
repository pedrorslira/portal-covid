import React, { useState } from "react";
import Card from "../../components/Card";
import DatePicker from "react-datepicker";
import TimePicker from 'react-bootstrap-time-picker';
import { Button, Form, Col } from "react-bootstrap";

export default function index() {
  const [startBirthDate, setStartBirthDate] = useState(null);
  const [startDate, setStartDate] = useState(null);
 

  return (
    <div>
      <Card title="Agendamento">
        <Form>
          <Form.Group>
            <Form.Label>Nome</Form.Label>
            <Col xs={2}>
              <Form.Control name="name" type="text" />
            </Col>
          </Form.Group>
          <p>Data de Nascimento</p>
          <DatePicker
            className="ml-3"
            selected={startBirthDate}
            onChange={(date) => setStartBirthDate(date)}
            maxDate={new Date()}
            dateFormat="dd/MM/yyyy"
            isClearable
            showYearDropdown
            scrollableMonthYearDropdown
          />
          <p className="mt-2">Data do Agendamento</p>
          <DatePicker
            className="ml-3"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            minDate={new Date()}
            dateFormat="dd/MM/yyyy"
            isClearable
            showYearDropdown
            scrollableMonthYearDropdown
          />
          <p className="mt-2">Horário do Agendamento</p>
          <Col xs={1}>
          <TimePicker start="09:00" end="18:00" step={30} />
          </Col>

          <Button className="mt-3 ml-3" type="submit">
            Concluir Agendamento
          </Button>
        </Form>
      </Card>
    </div>
  );
}
