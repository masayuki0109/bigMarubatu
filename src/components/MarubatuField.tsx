import React, {useState} from "react";

type MaruBatu = '✖' | '●'
export type Turn = 'odd' | `even`

const turn2MaruBatu: {[key: string]:MaruBatu} = {
  odd: '●',
  even: '✖',
}
interface Props {
  turn: Turn; 
  changeTurn: () => void;
};

export const MarubatuField: React.FC<Props> = ({turn, changeTurn}) => {
  const [value, setValue] = useState<MaruBatu>()
  const onChange = () => {
    if (value === undefined) {
      setValue(turn2MaruBatu[turn])
      changeTurn();
    }
  }
  return (
    <div style={styles.container} onClick={onChange}>
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