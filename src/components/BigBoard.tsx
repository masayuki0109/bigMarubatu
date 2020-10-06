import React, {useEffect, useState} from "react";
import { Board} from "./Board"
import {Turn} from "./MarubatuField"
import {Position} from "./MarubatuField"

interface Props {};

export const BigBoard: React.FC<Props> = ({}) => {
  const [turn, setTurn]  = useState<Turn>('odd')
  const changeTurn = () => {
    setTurn(turn === 'odd' ? 'even' : 'odd')
  }
  const [nextPosition, setNextPosition] = useState<Position>();
  const changeNextPosition = (position:Position) => {
    setNextPosition(position)
  }

  const tapFields = (position: Position) => {
    changeNextPosition(position)
    changeTurn()
  }
  useEffect(() => {
    console.log(nextPosition)
  },[nextPosition])
  return (
    <div style={styles.container}>
      {[...Array(3)].map((_, i) => (
        <div style={styles.inner} key={i}>
          <Board {...{turn, tapFields}}/>
          <Board {...{turn, tapFields}}/>
          <Board {...{turn, tapFields}}/>
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