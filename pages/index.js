import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

import CategoryContainer from "../components/containers/categoryContainer/CategoryContainer";
import CardContainer from "../components/containers/cardContainer/CardContainer";
import { navMenu } from "../components/navbar/constants";
import { getPopular } from "../utils/api-utils";

export default function Home(props) {
  const { popular } = props;
  const meals = navMenu
    .find((item) => item.title === "Meals")
    .children.slice(0, 2);
  const cuisines = navMenu
    .find((item) => item.title === "Cuisines")
    .children.slice(0, 2);

  return (
    <>
      <Head>
        <meta name="description" content="Recipes app cereated by Next.js" />
      </Head>
      <div className={styles.container}>
        <div className={styles.sections}>
          <Link href="/meals">Choose your meal -&gt;</Link>
          <CategoryContainer items={meals} />
        </div>
        <div className={styles.sections}>
          <Link href="/cuisines">
            Best Recipes from different cuisines -&gt;
          </Link>
          <CategoryContainer items={cuisines} />
        </div>
        <div className={styles.sections}>
          <Link href="/popular-recipes">Most Popular Recipes -&gt;</Link>
          <CardContainer items={popular} />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const data = await getPopular(3);
  return {
    props: {
      popular: data.recipes,
    },
    revalidate: 86400,
  };
}
