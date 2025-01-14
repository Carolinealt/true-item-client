import Button from "../../components/Button/Button";
import TaskForm from "../../components/TaskForm/TaskForm";
import css from "./Home.module.css";

const Home = () => {
  return (
    <div className={css.mainContainer}>
      <section className={css.hero}>

        <div className={css.heroContainer}>
          <h1 className={css.heroHeader}>Meet the best TODO web-service</h1>

          <p className={css.desc}>
            Your assistant during your work and education
          </p>

          <Button variant="main">Go to my todo list</Button>

        </div>

      </section>

      <section className={css.sectionForm}>
        <div className={css.form}>
          <TaskForm />

        </div>

      </section>
    </div>
  );
};

export default Home;
