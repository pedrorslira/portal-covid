import React, { useState } from "react";
import Card from "../../components/Card";
import DatePicker from "react-datepicker";
import TimePicker from "react-bootstrap-time-picker";
import { Button, Form, Col } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  name: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "Por favor, informe um nome válido.")
    .required("Nome é um campo obrigatório.")
    .min(3, "Um nome deve ter mais do que 2 caracteres.")
    .max(70, "Limite de caracteres atingido."),
  birthDate: yup
    .string()
    .required("Data de nascimento é um campo obrigatório")
});

const formInitialValues = {
  name: "",
  birthDate: "",
};

function index() {
  const [startBirthDate, setStartBirthDate] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [startTime, setStartTime] = useState(null);

  return (
    <div>
      <Card title="Agendamento">
        <Formik
          initialValues={formInitialValues}
          validationSchema={validationSchema}
        >
          {({ handleChange, handleBlur, handleSubmit, touched, errors }) => {
            return (
              <>
                <Form>
                  <Form.Group>
                    <Form.Label>Nome</Form.Label>
                    <Col xs={2}>
                      <Form.Control
                        name="name"
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.name && errors.name}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.name}
                      </Form.Control.Feedback>
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
                    <TimePicker
                      start="09:00"
                      end="18:00"
                      step={30}
                      value={startTime}
                      onChange={setStartTime}
                    />
                  </Col>
                  <Button
                    className="mt-3 ml-3"
                    type="submit"
                    onClick={() => handleSubmit()}
                  >
                    Concluir Agendamento
                  </Button>
                </Form>
              </>
            );
          }}
        </Formik>
      </Card>
    </div>
  );
}

export default index;
