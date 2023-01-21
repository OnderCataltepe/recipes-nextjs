import PageLayout from "../../../layouts/pageLayouts/PageLayout";
import CardContainer from "../../../components/containers/cardContainer/CardContainer";
import { getCategory } from "../../../utils/api-utils";
import Head from "next/head";
import { useEffect, useState } from "react";

const Cuisine = (props) => {
  const { foods, title } = props;
  const [recipes, setRecipes] = useState([]);
  const [filterCat, setFilterCat] = useState({
    vegan: false,
    vegetarian: false,
    glutenFree: false,
  });
  const titleToSend = `${title.toUpperCase()} RECIPES`;

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
        <title>{titleToSend}</title>
        <meta name="description" content={titleToSend} />
      </Head>
      <PageLayout
        title={titleToSend}
        filter={filterCat}
        setFilter={setFilterCat}
      >
        <CardContainer items={recipes} />
      </PageLayout>
    </>
  );
};
export async function getServerSideProps(context) {
  const { params } = context;
  const cuisId = params.cuisId;

  const data = await getCategory(cuisId);
  if (data.recipes.length === 0) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      foods: data.recipes,
      title: cuisId,
    },
  };
}

export default Cuisine;
