import { HomeIcon, ListOrderedIcon, LogInIcon, PercentIcon } from 'lucide-react'
import { Drawer } from '../Drawer'
import * as S from './styles'

export const Navbar = () => {
  return (
    <Drawer>
      <S.Nav>
        <S.NavButton>
          <LogInIcon size={16} />
          Fazer Login
        </S.NavButton>
        <S.NavLink href="">
          <HomeIcon size={16} />
          Início
        </S.NavLink>
        <S.NavLink href="">
          <PercentIcon size={16} />
          Ofertas
        </S.NavLink>
        <S.NavLink href="">
          <ListOrderedIcon size={16} />
          Catálogo
        </S.NavLink>
      </S.Nav>
    </Drawer>
  )
}
