import Link from 'next/link'
import { cva } from '../../../styled-system/css'
import { styled } from '../../../styled-system/jsx'

export const Nav = styled(
  'nav',
  cva({
    base: {
      display: 'flex',
      flexDir: 'column',
      gap: '2',
    },
  }),
)

const navItemStyles = cva({
  base: {
    w: 'full',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
    gap: '2',
    cursor: 'pointer',
    color: 'foreground',
    fontWeight: 'semibold',
    p: '2',
    border: '1px solid token(colors.border)',
    rounded: 'md',
    transition: 'background 0.2s',
    _hover: {
      bg: 'secondaryHover',
    },
    _focusVisible: {
      outline: '1px solid token(colors.ring)',
    },
  },
})

export const NavButton = styled('button', navItemStyles)

export const NavLink = styled(Link, navItemStyles)
