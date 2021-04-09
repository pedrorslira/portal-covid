import React, { useState } from "react";
import Card from "../../components/Card";
import DatePickerField from "../../components/DatePickerField";
import TimePickerField from "../../components/TimePickerField";
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
    .required("Data de nascimento é um campo obrigatório."),
  schedulingDate: yup
    .string()
    .required("Data do agendamento é um campo obrigatório."),
  schedulingTime: yup
    .string()
    .required("Horário do agendamento é um campo obrigatório."),
});

const formInitialValues = {
  name: "",
  birthDate: "",
  schedulingDate: "",
  schedulingTime: "",
};

const onSubmit = (event, values) => {
  event.preventDefault();
  console.log(values);
};

export default function index() {
  const [startTime, setStartTime] = useState(null);

  return (
    <div>
      <Card title="Agendamento">
        <Formik
          initialValues={formInitialValues}
          validationSchema={validationSchema}
        >
          {({ handleChange, handleBlur, errors, values }) => {
            return (
              <>
                <Form>
                  <Form.Group>
                    <p>Nome</p>
                    <Col xs={2}>
                      <Form.Control
                        name="name"
                        type="text"
                        size="sm"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.name && (
                        <div style={{ color: "red" }}>{errors.name}</div>
                      )}
                    </Col>
                  </Form.Group>
                  <p>Data de Nascimento</p>
                  <DatePickerField
                    name="birthDate"
                    isMax={true}
                    onBlur={handleBlur}
                  />
                  {errors.birthDate && (
                    <div style={{ color: "red" }}>{errors.birthDate}</div>
                  )}
                  <p className="mt-2">Data do Agendamento</p>
                  <DatePickerField
                    name="schedulingDate"
                    isMax={false}
                    onBlur={handleBlur}
                  />
                  {errors.schedulingDate && (
                    <div style={{ color: "red" }}>{errors.schedulingDate}</div>
                  )}
                  <p className="mt-2">Horário do Agendamento</p>
                  <TimePickerField name="schedulingTime" onBlur={handleBlur} />
                  {errors.name && (
                    <div style={{ color: "red" }}>{errors.schedulingTime}</div>
                  )}
                  <br />
                  <Button
                    className="mt-3 ml-3"
                    type="submit"
                    onClick={(event) => onSubmit(event, values)}
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
