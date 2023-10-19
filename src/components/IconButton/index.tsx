import { HTMLStyledProps } from '../../../styled-system/types'
import * as S from './styles'

type IconButtonProps = HTMLStyledProps<'button'>

export const IconButton = ({ children, ...props }: IconButtonProps) => {
  return <S.IconButtonContainer {...props}>{children}</S.IconButtonContainer>
}
