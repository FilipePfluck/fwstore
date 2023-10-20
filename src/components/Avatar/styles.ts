import { Avatar } from '@ark-ui/react'
import { styled } from '../../../styled-system/jsx'
import { cva } from '../../../styled-system/css'

export const Root = styled(
  Avatar.Root,
  cva({
    base: {
      rounded: 'full',
      overflow: 'hidden',
      border: '1px solid token(colors.border)',
      w: '12',
      h: '12',
    },
  }),
)

export const Fallback = styled(
  Avatar.Fallback,
  cva({
    base: {
      alignItems: 'center',
      background: 'secondary',
      display: 'flex',
      fontWeight: 'semibold',
      height: 'inherit',
      justifyContent: 'center',
      color: 'secondary',
      h: 'full',
      w: 'full',
    },
  }),
)

export const Image = styled(
  Avatar.Image,
  cva({
    base: {
      objectFit: 'cover',
      h: 'full',
      w: 'full',
    },
  }),
)
