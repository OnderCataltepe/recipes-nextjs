import { navMenu } from "../../components/navbar/constants";
import CategoryContainer from "../../components/containers/categoryContainer/CategoryContainer";
import Head from "next/head";

const Meals = () => {
  const menu = navMenu.find((item) => item.title === "Meals");

  return (
    <>
      <Head>
        <title>Foodie- Meals</title>
        <meta
          name="description"
          content="Recipes for dinner, lunch, breakfast, soup, dessert, brunch, appetizer"
        />
      </Head>
      <div style={{ padding: "5rem" }}>
        <h1
          style={{
            textAlign: "center",
            fontSize: "5rem",
            marginBottom: "2rem",
          }}
        >
          Meals
        </h1>
        <CategoryContainer items={menu.children} />
      </div>
    </>
  );
};

export default Meals;
