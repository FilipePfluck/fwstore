import { cva } from '../../../styled-system/css'
import { styled } from '../../../styled-system/jsx'

export const PageContent = styled(
  'main',
  cva({
    base: {
      display: 'flex',
      flexDir: 'column',
      gap: '8',
      py: '8',
    },
  }),
)

export const Badges = styled(
  'div',
  cva({
    base: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '4',
      px: '5',
    },
  }),
)
