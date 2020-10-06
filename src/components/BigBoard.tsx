import React from "react";
import { Board} from "./Board"
import {Row} from "./MarubatuField"
import {Position} from "./MarubatuField"
import {isActiveField} from "../utils/isActiveField"
import {useChangeTurn} from "../utils/useChangeTurn"
import { useChangeActivePosition } from "../utils/useChangeActivePosition";


export const BigBoard: React.FC = () => {
  const [turn, changeTurn] = useChangeTurn();
  const [nextPosition, changeNextPosition] = useChangeActivePosition();

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