import { navMenu } from "../../components/navbar/constants";
import CategoryContainer from "../../components/containers/categoryContainer/CategoryContainer";
import Head from "next/head";

const Cuisines = () => {
  const menu = navMenu.find((item) => item.title === "Cuisines");

  return (
    <>
      <Head>
        <title>Foodie- Cuisines</title>
        <meta
          name="description"
          content="Recipes from around the world such as Italian, Mexican, French, Greek, Chinese, Middle East cuisine."
        />
      </Head>
      <div>
        <div style={{ padding: "5rem" }}>
          <h1
            style={{
              textAlign: "center",
              fontSize: "5rem",
              marginBottom: "2rem",
            }}
          >
            Cuisines
          </h1>

          <CategoryContainer items={menu.children} />
        </div>
      </div>
    </>
  );
};

export default Cuisines;
