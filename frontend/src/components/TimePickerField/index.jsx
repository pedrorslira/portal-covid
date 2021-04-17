import React from "react";
import DatePicker from "react-datepicker";
import { useFormikContext } from "formik";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";

export default function index({ name, onBlur }) {
  const formik = useFormikContext();
  const field = formik.getFieldProps(name);

  return (
    <DatePicker
      className="ml-3"
      type = "date"
      selected={field.value}
      onChange={(value) => formik.setFieldValue(name, value)}
      showTimeSelect
      showTimeSelectOnly
      minTime={setHours(setMinutes(new Date(), 0), 9)}
      maxTime={setHours(setMinutes(new Date(), 0), 18)}
      timeIntervals={30}
      onBlur={onBlur}
      timeCaption="Time"
      dateFormat="h:mm aa"
    />
  );
}
