import {useState} from "react";
import { Position } from "../components/MarubatuField"

export const useChangeActivePosition = () => {
  const [nextPosition, setNextPosition] = useState<Position>();
  const changeNextPosition = (position:Position) => {
    setNextPosition(position)
  }
  return [nextPosition, changeNextPosition] as [Position, (pos: Position) => void]
};