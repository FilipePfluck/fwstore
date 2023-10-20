'use client'

import { Portal, DialogContentProps } from '@ark-ui/react'
import * as S from './styles'
import { XIcon } from 'lucide-react'

export const Drawer = ({ children, ...props }: DialogContentProps) => {
  return (
    <Portal>
      <S.Overlay />
      <S.DrawerContainer>
        <S.DrawerContent {...props}>
          <S.DrawerCloseButton aria-label="close drawer">
            <XIcon size={16} />
          </S.DrawerCloseButton>
          {children}
        </S.DrawerContent>
      </S.DrawerContainer>
    </Portal>
  )
}
