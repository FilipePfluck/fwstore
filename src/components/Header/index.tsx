'use client'

import { MenuIcon, ShoppingCartIcon } from 'lucide-react'
import { IconButton } from '../IconButton'
import * as S from './styles'
import { css } from '../../../styled-system/css'
import { Dialog as ArkDialog } from '@ark-ui/react'
import { Navbar } from '../Navbar'

export const Header = () => {
  return (
    <ArkDialog.Root>
      <S.HeaderContainer>
        <ArkDialog.Trigger asChild>
          <IconButton aria-label="navigation menu">
            <MenuIcon />
          </IconButton>
        </ArkDialog.Trigger>

        <S.Title>
          <span className={css({ color: 'primary' })}>FSW</span> Store
        </S.Title>

        <IconButton aria-label="navigation menu">
          <ShoppingCartIcon />
        </IconButton>
      </S.HeaderContainer>
      <Navbar />
    </ArkDialog.Root>
  )
}
