import { cva } from '../../../styled-system/css'
import { styled } from '../../../styled-system/jsx'

export const List = styled(
  'ul',
  cva({
    base: {
      px: '5',
      display: 'flex',
      gap: '4',
      overflowX: 'auto',
      _scrollbar: {
        display: 'none',
      },
    },
  }),
)

export const ListName = styled(
  'h2',
  cva({
    base: {
      fontWeight: 700,
      fontSize: '16px',
      lineHeight: '24px',
      ml: '5',
    },
  }),
)
