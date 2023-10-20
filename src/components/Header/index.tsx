'use client'

import { MenuIcon, ShoppingCartIcon } from 'lucide-react'
import { IconButton } from '../IconButton'
import * as S from './styles'
import { css } from '../../../styled-system/css'
import { Dialog as ArkDialog } from '@ark-ui/react'
import { Navbar } from '../Navbar'

export const Header = () => {
  return (
    <S.HeaderContainer>
      <ArkDialog.Root>
        <ArkDialog.Trigger asChild>
          <IconButton aria-label="navigation menu">
            <MenuIcon />
          </IconButton>
        </ArkDialog.Trigger>
        <Navbar />
      </ArkDialog.Root>

      <S.Title>
        <span className={css({ color: 'primary' })}>FSW</span> Store
      </S.Title>

      <IconButton aria-label="navigation menu">
        <ShoppingCartIcon />
      </IconButton>
    </S.HeaderContainer>
  )
}
