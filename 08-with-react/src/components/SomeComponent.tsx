import React from 'react'

interface IProps {
  name: string
}

const SomeComponent: React.FC<IProps> = (props: IProps) => {
  return (
  <p>Hi {props.name}!</p>
  )
}

export default SomeComponent
