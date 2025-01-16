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
      <Form className={css.form}>
        <div className={css.textAreaContainer}>
          <label htmlFor={textFieldId}>My new task is</label>
          <Field
            as="textarea"
            cols="10"
            rows="2"
            name="text"
            id={textFieldId}
            className={css.input}
          />

        </div>

        <Button type="submit" variant="main" >
          Add
        </Button>
      </Form>
    </Formik>
  );
};

export default TaskForm;
