import { NavLink } from "react-router-dom";
import Button from "../../components/Button/Button";
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

          <NavLink to="/tasks"><Button variant="main" styles=''>Go to my tasks list</Button></NavLink>

        </div>
      </section>

      <section className={css.sectionForm}>


      </section>
    </div>
  );
};

export default Home;
