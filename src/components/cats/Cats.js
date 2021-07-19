import React, { useEffect, useState } from "react";
import axios from "axios";
import Categories from "./components/categories/Categories";
// STYLES
import styles from "./cats.module.scss";

const Cats = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.thecatapi.com/v1/images/search?limit=10&category_ids=1")
      .then((result) => {
        setData(result.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);

  return (
    <div className={styles.container}>
      <Categories />
      <div className={styles.cats}>
        {data.map((item) => (
          <div className={styles.cat} key={item.id}>
            <img src={`${item.url}`} className={styles.img} alt="" />
          </div>
        ))}
      </div>
      <div className={styles.more}>
        <button className={styles.btn}>load more</button>
      </div>
    </div>
  );
};

export default Cats;
