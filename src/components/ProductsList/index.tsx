import { Flex } from '@/styled-system/jsx'
import { Product } from '../Product'
import * as S from './styles'

export const ProductsList = () => {
  return (
    <Flex direction="column" gap="5">
      <S.ListName>OFERTAS</S.ListName>
      <S.List>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </S.List>
    </Flex>
  )
}
