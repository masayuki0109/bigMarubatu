import React, {useState} from "react";

type MaruBatu = '✖' | '●'
export type Turn = 'odd' | `even`
export type Row = 1 | 2 | 3
type Col = 1 | 2 | 3
export type Position = [Row, Col]

const turn2MaruBatu: {[key: string]:MaruBatu} = {
  odd: '●',
  even: '✖',
}
export interface BoardProps {
  turn: Turn; 
  myPosition?: Position; 
  tapFields: (position: Position) => void;
  disable?: boolean
};

export const MarubatuField: React.FC<BoardProps> = ({turn, tapFields, myPosition, disable}) => {
  const [value, setValue] = useState<MaruBatu>()
  const onClick = () => {
    if (value === undefined && !disable) {
      setValue(turn2MaruBatu[turn])
      tapFields(myPosition as Position);
    }
  }
  return (
    <div style={styles.container} onClick={onClick}>
      <text>{value ?? '　'}</text>
    </div>
  )
};

const styles = {
  container: {
    display: 'inline-block',
    border: '1px solid',
    width: 30,
    height: 30,
  }
};