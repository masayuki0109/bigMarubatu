import React, {useState} from "react";
import { Board} from "./Board"
import {Turn} from "./MarubatuField"

interface Props {};

export const BigBoard: React.FC<Props> = ({}) => {
  const [turn, setTurn]  = useState<Turn>('odd')
  const changeTurn = () => {
    console.log(turn)
    setTurn(turn === 'odd' ? 'even' : 'odd')
  }
  return (
    <div style={styles.container}>
      {[...Array(3)].map((_, i) => (
        <div style={styles.inner} key={i}>
          <Board />
          <Board />
          <Board />
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
  },
  inner: {
  }
};