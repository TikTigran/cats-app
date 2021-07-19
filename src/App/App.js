import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import Preloader from "src/components/preloader/Preloader";
// STYLES
import styles from "./app.module.scss";
// PAGES
const HomePage = lazy(() => import("src/pages/home/Home"));

const App = () => {
  return (
    <div className={styles.app}>
      <div className={styles.main}>
        <Suspense fallback={<Preloader />}>
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </Suspense>
      </div>
    </div>
  );
};

export default App;
