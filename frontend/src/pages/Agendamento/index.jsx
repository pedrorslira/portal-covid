import React, { useState, useEffect } from "react";
import Card from "../../components/Card";
import DatePickerField from "../../components/DatePickerField";
import TimePickerField from "../../components/TimePickerField";
import { Button, Form, Col } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import axios from "../../utils/api";
import moment from "moment";
import { Persist } from "formik-persist";
import { parseISO } from "date-fns";
import debounce from "lodash.debounce";
import { values } from "lodash";
import { PersistFormikValues } from "formik-persist-values";

export default function Scheduling() {

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

const onSubmit = async (event, values) => {
  event.preventDefault();
  const response = await axios.get(
    `/scheduling/${moment(values.schedulingDate).toISOString()}/${moment(
      values.schedulingTime
    ).toISOString()}`
  );
  const { data } = response.data;
  if (data >= 2) {
    toast.error("Já existem 2 agendamentos marcados nesse horário.");
  } else {
    const response = await axios.get(
      `/scheduling/date/${values.schedulingDate}`
    );
    const { data } = response.data;
    if (data >= 20) {
      toast.error("Limite de 20 agendamentos no dia alcançado.");
    } else {
      try {
        await axios.post("/scheduling", values);
        toast.success("Agendamento feito com sucesso.");
      } catch (e) {
        toast.error("Ocorreu um erro desconhecido.");
      }
    }
  }
};

const isFormikValid = (values) => {
  if (
    values.name != "" &&
    values.birthDate != "" &&
    values.schedulingDate != "" &&
    values.schedulingTime != ""
  ) {
    return true;
  }
  return false;
};

  return (
    <div>
      <Card title="Agendamento">
        <Formik
          initialValues={formInitialValues}
          enableReinitialize
          validationSchema={validationSchema}
        >
          {({ handleChange, handleBlur, errors, values }) => {
            /*useEffect(() => {
              const data = localStorage.getItem("formik-form");
              if (data) {
                values = JSON.parse(data);
                console.log(values);
              }
            }, []);

            useEffect(() => {
              localStorage.setItem("formik-form", JSON.stringify(values));
            }, [values]); */
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
                  {errors.schedulingTime && (
                    <div style={{ color: "red" }}>{errors.schedulingTime}</div>
                  )}
                  <br />
                  <Button
                    className="mt-3 ml-3"
                    type="submit"
                    onClick={(event) => onSubmit(event, values)}
                    disabled={!isFormikValid(values)}
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

