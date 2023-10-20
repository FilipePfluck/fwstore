'use client'
import {
  HomeIcon,
  ListOrderedIcon,
  LogInIcon,
  LogOutIcon,
  PercentIcon,
} from 'lucide-react'
import { Drawer } from '../Drawer'
import * as S from './styles'
import { signIn, signOut, useSession } from 'next-auth/react'
import { Flex } from '../../../styled-system/jsx'
import { Avatar } from '../Avatar'

type User = {
  name: string
  image: string
}

const UserInfo = ({ image, name }: User) => {
  return (
    <S.UserInfoContainer>
      <Avatar src={image} name={name} />
      <Flex direction="column">
        <S.Name>{name}</S.Name>
        <S.Welcome>Boas compras!</S.Welcome>
      </Flex>
    </S.UserInfoContainer>
  )
}

export const Navbar = () => {
  const { status, data } = useSession()

  const handleSignIn = async () => {
    await signIn()
  }

  const handleSignOut = async () => {
    await signOut()
  }

  return (
    <Drawer>
      <S.Nav>
        {status === 'authenticated' && data.user && (
          <UserInfo name={data.user.name || ''} image={data.user.image || ''} />
        )}
        {status === 'authenticated' && (
          <S.NavButton onClick={handleSignOut}>
            <LogOutIcon size={16} />
            Fazer Logout
          </S.NavButton>
        )}
        {status === 'unauthenticated' && (
          <S.NavButton onClick={handleSignIn}>
            <LogInIcon size={16} />
            Fazer Login
          </S.NavButton>
        )}

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
