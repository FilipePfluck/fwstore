import { cva } from '../../../styled-system/css'
import { styled } from '../../../styled-system/jsx'

export const ProductImageContainer = styled(
  'div',
  cva({
    base: {
      minW: '156px',
      h: '170px',
      rounded: 'xl',
      bg: 'secondary',

      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
    },
  }),
)

export const ProductDiscountBadge = styled(
  'div',
  cva({
    base: {
      position: 'absolute',
      top: '2.5',
      left: '2.5',

      rounded: 'full',
      bg: 'primary',
      py: '1',
      px: '2',
      color: 'foreground',
      fontWeight: 700,
      fontSize: '12px',

      display: 'flex',
      alignItems: 'center',
      gap: '1',
    },
  }),
)

export const ProductName = styled(
  'p',
  cva({
    base: {
      fontSize: '12px',
    },
  }),
)

export const ProductPrice = styled(
  'p',
  cva({
    base: {
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: 700,
    },
  }),
)

export const ProductOriginalPrice = styled(
  'span',
  cva({
    base: {
      fontSize: '12px',
      lineHeight: '18px',
      fontWeight: 400,
      color: 'mutedForeground',
      textDecoration: 'line-through',
      ml: '1',
    },
  }),
)

export const AmountOfRatings = styled(
  'p',
  cva({
    base: {
      color: 'mutedForeground',
      fontSize: '12px',
    },
  }),
)
