import { Dialog } from '@ark-ui/react'
import { styled } from '../../../styled-system/jsx'
import { cva } from '../../../styled-system/css'

export const Overlay = styled(
  Dialog.Backdrop,
  cva({
    base: {
      position: 'fixed',
      inset: '0px',
      bg: 'rgba(0,0,0,0.6)',

      transition: '0.2s',

      '&[data-state="open"]': {
        opacity: 1,
      },
      '&[data-state="closed"]': {
        opacity: 0,
      },
    },
  }),
)

export const DrawerContainer = styled(
  Dialog.Container,
  cva({
    base: {},
  }),
)

export const DrawerContent = styled(
  Dialog.Content,
  cva({
    base: {
      display: 'flex',
      flexDir: 'column',
      gap: '10',
      bg: 'secondary',
      boxShadow: 'lg',
      position: 'fixed',
      top: '0',
      bottom: '0',
      left: '0',
      w: '80%',
      px: '8',
      py: '12',
      outline: 'none',

      overflowY: 'auto',

      '&[data-state="open"]': {
        animation: 'drawerSlideIn',
      },
      '&[data-state="closed"]': {
        animation: 'drawerSlideOut',
      },
    },
  }),
)

export const DrawerCloseButton = styled(
  Dialog.CloseTrigger,
  cva({
    base: {
      position: 'absolute',
      top: '4',
      right: '4',
      cursor: 'pointer',
      color: 'foreground',
      _focusVisible: {
        outline: '1px solid token(colors.ring)',
      },
    },
  }),
)
