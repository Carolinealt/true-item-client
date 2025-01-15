import { Formik, Form, Field } from "formik";
import { useId } from "react";
import Button from "../Button/Button";
import css from "./TaskForm.module.css";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/operations";

const TaskForm = () => {
  const textFieldId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addTask(values))
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ text: "" }} onSubmit={handleSubmit}>
      <Form>
        <label htmlFor={textFieldId}>Text</label>
        <Field
          as="textarea"
          cols="20"
          rows="5"
          name="text"
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
