import appetizer from "../../public/meals/appetizer.jpg";
import breakfast from "../../public/meals/breakfast.jpg";
import brunch from "../../public/meals/brunch.jpg";
import dessert from "../../public/meals/dessert.jpg";
import dinner from "../../public/meals/dinner.jpg";
import lunch from "../../public/meals/lunch.jpg";
import salad from "../../public/meals/salad.jpg";
import soup from "../../public/meals/soup.jpg";

import chinese from "../../public/cuisines/chinese.jpg";
import french from "../../public/cuisines/french.jpg";
import italian from "../../public/cuisines/italian.jpeg";
import greek from "../../public/cuisines/greek.jpg";
import mexican from "../../public/cuisines/mexican.jpg";
import middleEastern from "../../public/cuisines/middle-eastern.jpg";

export const navMenu = [
  {
    id: 1,
    title: "Home",
    path: "/",
    children: [],
  },
  {
    id: 2,
    title: "Cuisines",
    path: "/cuisines",
    children: [
      {
        id: "mexican",
        title: "Mexican",
        path: "/cuisines/mexican",
        image: mexican,
      },
      {
        id: "italian",
        title: "Italian",
        path: "/cuisines/italian",
        image: italian,
      },
      {
        id: "french",
        title: "French",
        path: "/cuisines/french",
        image: french,
      },
      { id: "greek", title: "Greek", path: "/cuisines/greek", image: greek },
      {
        id: "middle-eastern",
        title: "Middle Eastern",
        path: "/cuisines/middle-eastern",
        image: middleEastern,
      },
      {
        id: "chinese",
        title: "Chinese",
        path: "/cuisines/chinese",
        image: chinese,
      },
    ],
  },
  {
    id: 3,
    title: "Meals",
    path: "/meals",
    children: [
      { id: "3a", title: "Lunch", path: "/meals/lunch", image: lunch },
      { id: "3b", title: "Dinner", path: "/meals/dinner", image: dinner },
      { id: "3c", title: "Soup", path: "/meals/soup", image: soup },
      { id: "3d", title: "Dessert", path: "/meals/dessert", image: dessert },
      {
        id: "3e",
        title: "Breakfast",
        path: "/meals/breakfast",
        image: breakfast,
      },
      { id: "3f", title: "Brunch", path: "/meals/brunch", image: brunch },
      {
        id: "3g",
        title: "Appetizer",
        path: "/meals/appetizer",
        image: appetizer,
      },
      { id: "3h", title: "Salad", path: "/meals/salad", image: salad },
    ],
  },
  {
    id: 4,
    title: "Popular",
    path: "/popular-recipes",
    children: [],
  },
];
