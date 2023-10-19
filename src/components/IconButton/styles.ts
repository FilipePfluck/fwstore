import { cva } from '../../../styled-system/css'
import { styled } from '../../../styled-system/jsx'

export const IconButtonContainer = styled(
  'button',
  cva({
    base: {
      p: '2',
      rounded: 'sm',
      border: '1px solid token(colors.border)',
      color: 'foreground',
      cursor: 'pointer',
      transition: 'background 0.2s',
      _focusVisible: {
        outline: '1px solid token(colors.ring)',
      },
      _hover: {
        bg: 'secondary',
      },
    },
  }),
)
