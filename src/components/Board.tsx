import React, {useState} from "react";
import { MarubatuField, Turn } from "./MarubatuField"

interface Props {};

export const Board: React.FC<Props> = ({}) => {
  const [turn, setTurn]  = useState<Turn>('odd')
  const changeTurn = () => {
    console.log(turn)
    setTurn(turn === 'odd' ? 'even' : 'odd')
  }
  return (
    <div style={styles.container}>
      {[...Array(3)].map((_, i) => (
        <div style={styles.inner} key={i}>
          <MarubatuField {...{ turn, changeTurn }} />
          <MarubatuField {...{ turn, changeTurn }} />
          <MarubatuField {...{ turn, changeTurn }} />
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