import axios from "axios";
import { useEffect, useState } from "react";
// STYLES
import styles from "./categories.module.scss";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.thecatapi.com/v1/categories")
      .then((result) => {
        setCategories(result.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.categories}>
        {categories.map((category) => (
          <div className={styles.category} key={category.id}>
            {category.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
