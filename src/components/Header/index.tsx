import { MenuIcon, ShoppingCartIcon } from 'lucide-react'
import { IconButton } from '../IconButton'
import * as S from './styles'
import { css } from '../../../styled-system/css'

export const Header = () => {
  return (
    <S.HeaderContainer>
      <IconButton aria-label="navigation menu">
        <MenuIcon />
      </IconButton>

      <S.Title>
        <span className={css({ color: 'primary' })}>FSW</span> Store
      </S.Title>

      <IconButton aria-label="navigation menu">
        <ShoppingCartIcon />
      </IconButton>
    </S.HeaderContainer>
  )
}
