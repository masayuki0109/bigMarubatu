import { Position } from "../components/MarubatuField"

interface IProps {
  nextPosition?: Position,
  currentPosition: Position,
}

export const isActiveField = ({nextPosition, currentPosition}:IProps) => {
  if (nextPosition === undefined) return true

  const result = nextPosition.filter((item,i) => item === currentPosition[i])
  return result.length === 2
}