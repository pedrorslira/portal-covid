import React from "react";
import DatePicker from "react-datepicker";
import { useFormikContext } from "formik";

export default function index({ name, onBlur, isMax }) {
  const formik = useFormikContext();
  const field = formik.getFieldProps(name);

  return (
    <DatePicker
      className="ml-3"
      selected={field.value}
      onChange={(value) => formik.setFieldValue(name, value)}
      dateFormat="dd/MM/yyyy"
      type="date"
      showYearDropdown
      scrollableMonthYearDropdown
      onBlur={onBlur}
      maxDate={isMax ? new Date() : null}
      minDate={!isMax ? new Date() : null}
    />
  );
}
