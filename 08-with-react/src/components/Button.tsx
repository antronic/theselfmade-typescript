import styled from 'styled-components'
import { lighten } from 'polished'

const primary = '#005EB9'

interface IProps {
  hoverDensity: number
}

const Button = styled('button')<IProps>`
  -webkit-appearance: none;
  border: 0;
  font-size: 16pt;
  background: ${primary};
  color: #fff;
  padding: 12px 24px;
  outline: 0;

  &:hover {
    background: ${props => lighten(props.hoverDensity, primary)};
  }
`

export default Button
