import styles from "./recipe.module.scss";
import { getRecipe } from "../../utils/api-utils";
import { timeConvert } from "../../utils";
import foodImg from "../../public/foodImg.jpg";
import Image from "next/image";
import Head from "next/head";

const Recipe = (props) => {
  const { recipe } = props;

  return (
    <>
      <Head>
        <title>{recipe.title}</title>
        <meta name="description" content={`${recipe.title} Recipe`} />
      </Head>
      <div className={styles.container}>
        <h1>{recipe.title}</h1>

        <div className={styles.imageContainer}>
          <Image
            width={450}
            height={300}
            src={recipe.image ? recipe.image : foodImg}
            alt="image"
          />
        </div>
        <div className={styles.card}>
          <div>
            <p>Ready in: </p>
            <p>{timeConvert(recipe.readyInMinutes)}</p>
          </div>
          <div>
            <p>Vegetarian: </p>
            <p className={recipe.vegetarian ? styles.green : styles.red}>
              {recipe.vegetarian ? "YES" : "NO"}
            </p>
          </div>
          <div>
            <p>Vegan: </p>
            <p className={recipe.vegan ? styles.green : styles.red}>
              {recipe.vegan ? "YES" : "NO"}
            </p>
          </div>
          <div>
            <p>Gluten-free: </p>
            <p className={recipe.glutenFree ? styles.green : styles.red}>
              {recipe.glutenFree ? "YES" : "NO"}
            </p>
          </div>
          <div>
            <p>This recipe serves: </p>
            <p>{recipe.servings}</p>
          </div>
        </div>
        <div className={styles.ingredient}>
          <div>
            <p>Ingredients</p>
            <ul>
              {recipe.extendedIngredients.map((item, index) => (
                <li key={index}>{item.original}</li>
              ))}
            </ul>
          </div>
          <div>
            <p>Directions</p>
            <ul>
              {recipe.analyzedInstructions.map((el) =>
                el.steps.map((item) => <li key={item.number}>{item.step}</li>)
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps(context) {
  const { params } = context;
  const id = params.id;

  try {
    const response = await getRecipe(id);
    return {
      props: {
        recipe: response.data,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    fallback: "blocking",
  };
}

export default Recipe;
