import React, {useState} from "react";
import { Board} from "./Board"
import {Row, Turn} from "./MarubatuField"
import {Position} from "./MarubatuField"
import {isActiveField} from "../utils/isActiveField"


export const BigBoard: React.FC = () => {
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

  return (
    <div style={styles.container}>
      {[...Array(3)].map((_, i) => (
        <div style={styles.inner} key={i}>
          <Board {...{turn, tapFields, disable: !isActiveField({nextPosition, currentPosition: [1, i + 1 as Row]}) }}/>
          <Board {...{turn, tapFields, disable: !isActiveField({nextPosition, currentPosition: [2, i + 1 as Row]}) }}/>
          <Board {...{turn, tapFields, disable: !isActiveField({nextPosition, currentPosition: [3, i + 1 as Row]}) }}/>
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