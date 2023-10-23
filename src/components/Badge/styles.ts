import { cva } from '../../../styled-system/css'
import { styled } from '../../../styled-system/jsx'

export const BadgeContainer = styled(
  'div',
  cva({
    base: {
      rounded: 'lg',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '2',
      border: '1px solid token(colors.border)',
      w: 'full',
      color: 'foreground',
      fontWeight: 700,
      py: '2',
    },
  }),
)
