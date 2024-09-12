import { Button } from "widgets/button";

import styles from "./carosal.module.css";

export function Carosal() {
  return (
    <div className={styles.carosal}>
      First carosal slide
      <Button> Next </Button>
    </div>
  );
}
