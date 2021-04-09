import React, { useState } from "react";
import Card from "../../components/Card";
import DatePickerField from "../../components/DatePickerField";
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
    .required("Data de nascimento é um campo obrigatório."),
  schedulingDate: yup
    .string()
    .required("Data de agendamento é um campo obrigatório."),
});

const formInitialValues = {
  name: "",
  birthDate: "",
  schedulingDate: "",
};

function index() {
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
