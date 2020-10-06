import React from "react";
import { MarubatuField, FieldProps, Row } from "./MarubatuField"

interface BoardProps extends FieldProps {};
export const Board: React.FC<BoardProps> = (child:BoardProps) => {
  return (
    <div style={styles.container}>
      {[...Array(3)].map((_, i) => (
        <div key={i}>
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
};