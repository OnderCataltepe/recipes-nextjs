import styles from "./searchResults.module.scss";
import { getSearch } from "../../utils/api-utils";
import CardContainer from "../../components/containers/cardContainer/CardContainer";

const SearchResults = (props) => {
  const { recipes, id } = props;

  return (
    <div className={styles.container}>
      {recipes.length === 0 ? (
        <div className={styles.noResult}>
          <h2>
            Sorry, we couldn&apos;t find any results for <span>{id}</span>
          </h2>
        </div>
      ) : (
        <>
          <h1>Results for {id}</h1>
          <CardContainer items={recipes} />
        </>
      )}
    </div>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;
  const id = params.searchId;

  try {
    const data = await getSearch(id);
    return {
      props: {
        recipes: data.results,
        id: id,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
}

export default SearchResults;
