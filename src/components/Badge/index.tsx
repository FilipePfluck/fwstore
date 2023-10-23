import { ReactNode } from 'react'
import * as S from './styles'

type BadgeProps = {
  children: ReactNode
}

export const Badge = ({ children }: BadgeProps) => {
  return <S.BadgeContainer>{children}</S.BadgeContainer>
}
