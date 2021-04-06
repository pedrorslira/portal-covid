import React, { useState } from "react";
import Card from "../../components/Card";
import Form from "../../components/Form";
import DatePicker from "react-datepicker";
import { Button } from "react-bootstrap";

export default function index() {
  const [startBirthDate, setStartBirthDate] = useState(null);
  const [startDate, setStartDate] = useState(null);

  return (
    <div>
      <Card title="Agendamento">
        <Form />
        <p>Data de Nascimento</p>
        <DatePicker
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
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          minDate={new Date()}
          dateFormat="dd/MM/yyyy"
          isClearable
          showYearDropdown
          scrollableMonthYearDropdown
        />
        <Button className="ml-5">Concluir Agendamento</Button>
      </Card>
    </div>
  );
}
