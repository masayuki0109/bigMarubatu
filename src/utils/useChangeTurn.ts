import React, {useState} from "react";
import {Turn} from "../components/MarubatuField"

export const useChangeTurn = () => {
  const [turn, setTurn]  = useState<Turn>('odd')
  const changeTurn = () => {
    setTurn(turn === 'odd' ? 'even' : 'odd')
  }
  return [turn, changeTurn] as [Turn, () => void]
};