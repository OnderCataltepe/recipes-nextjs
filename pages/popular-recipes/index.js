import PageLayout from "../../layouts/pageLayouts/PageLayout";
import CardContainer from "../../components/containers/cardContainer/CardContainer";
import { getPopular } from "../../utils/api-utils";
import { useEffect, useState } from "react";
import Head from "next/head";

const PopularRecipes = (props) => {
  const { foods } = props;
  const [recipes, setRecipes] = useState([]);
  const [filterCat, setFilterCat] = useState({
    vegan: false,
    vegetarian: false,
    glutenFree: false,
  });

  useEffect(() => {
    if (foods) {
      const filteredRecipes = foods.filter(
        (item) =>
          (filterCat.vegan ? item.vegan === filterCat.vegan : item) &&
          (filterCat.vegetarian
            ? item.vegetarian === filterCat.vegetarian
            : item) &&
          (filterCat.glutenFree
            ? item.glutenFree === filterCat.glutenFree
            : item)
      );
      setRecipes(filteredRecipes);
    }
  }, [filterCat.vegan, filterCat.vegetarian, filterCat.glutenFree]);

  return (
    <>
      <Head>
        <title>Foodie- Popular Recipes</title>
        <meta
          name="description"
          content="Popular Recipes from around the world."
        />
      </Head>
      <PageLayout
        title="Popular Recipes"
        filter={filterCat}
        setFilter={setFilterCat}
      >
        <CardContainer items={recipes} />
      </PageLayout>
    </>
  );
};
export async function getStaticProps() {
  const data = await getPopular(100);
  return {
    props: {
      foods: data.recipes,
    },
    revalidate: 86400,
  };
}

export default PopularRecipes;
