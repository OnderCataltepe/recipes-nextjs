import Form from "react-bootstrap/Form";

const FilterMeal = ({ filter, setFilter }) => {
  const filterCat = filter;
  const setFilterCat = setFilter;

  const changeHandler = (e) => {
    setFilterCat({ ...filterCat, [e.target.value]: e.target.checked });
  };

  return (
    <Form>
      <Form.Check
        onChange={changeHandler}
        value="vegetarian"
        type="switch"
        label="Vegetarian"
      />
      <Form.Check
        onChange={changeHandler}
        value="vegan"
        type="switch"
        label="Vegan"
      />
      <Form.Check
        onChange={changeHandler}
        value="glutenFree"
        type="switch"
        label="Gluten-Free"
      />
    </Form>
  );
};

export default FilterMeal;
