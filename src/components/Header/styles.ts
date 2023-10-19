import { cva } from '../../../styled-system/css'
import { styled } from '../../../styled-system/jsx'

export const HeaderContainer = styled(
  'header',
  cva({
    base: {
      display: 'flex',
      justifyContent: 'space-between',
      p: '6',
      w: 'full',
      borderBottom: '1px solid token(colors.border)',
    },
  }),
)

export const Title = styled(
  'h1',
  cva({
    base: {
      fontSize: '18px',
      fontWeight: 'semibold',
    },
  }),
)
