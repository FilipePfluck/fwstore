import { cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'

export const FooterContainer = styled(
  'footer',
  cva({
    base: {
      mt: '8',
      w: 'full',
      bg: 'secondary',
      px: '8',
      py: '6',
      color: 'mutedForeground',
    },
  }),
)
