import React from "react";
import { MarubatuField, BoardProps, Row } from "./MarubatuField"


export const Board: React.FC<BoardProps> = (child:BoardProps) => {
  return (
    <div style={styles.container}>
      {[...Array(3)].map((_, i) => (
        <div style={styles.inner} key={i}>
          <MarubatuField {...child} myPosition={[1, i + 1 as Row]} />
          <MarubatuField {...child} myPosition={[2, i + 1 as Row]} />
          <MarubatuField {...child} myPosition={[3, i + 1 as Row]} />
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'inline-block',
    border: '2px solid',
  },
  inner: {
  }
};