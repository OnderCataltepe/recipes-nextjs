import styles from "./pageLayout.module.scss";
import FilterMeal from "../../components/forms/filter/FilterMeal";
const PageLayout = ({ children, title, filter, setFilter }) => {
  return (
    <div className={styles.container}>
      <section>
        <FilterMeal filter={filter} setFilter={setFilter} />
      </section>
      <section>
        <h1>{title}</h1>
        {children}
      </section>
    </div>
  );
};
export default PageLayout;
