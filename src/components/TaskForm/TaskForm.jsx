import { Formik, Form, Field } from "formik";
import React, { useId } from "react";
import Button from "../Button/Button";
import css from "./TaskForm.module.css";

const TaskForm = () => {
  const textFieldId = useId();

  const handleSubmit = (values, actions) => {
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ textTask: "" }} onSubmit={handleSubmit}>
      <Form>
        <label htmlFor={textFieldId}>Text</label>
        <Field
          as="textarea"
          cols="20"
          rows="5"
          name="textTask"
          id={textFieldId}
          className={css.input}
        />

        <Button type="submit" variant="main">
          Submit
        </Button>
      </Form>
    </Formik>
  );
};

export default TaskForm;
