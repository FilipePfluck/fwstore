import { Flex } from '@/styled-system/jsx'
import { Product as ProductItem } from '../Product'
import * as S from './styles'
import { Product } from '@prisma/client'
import { computeProductTotalPrice } from '@/helpers/product'

type ProductsListProps = {
  title: string
  products: Product[]
}

export const ProductsList = ({ title, products }: ProductsListProps) => {
  return (
    <Flex direction="column" gap="5">
      <S.ListName>{title}</S.ListName>
      <S.List>
        {products.map((product) => (
          <ProductItem
            {...computeProductTotalPrice(product)}
            key={product.id}
          />
        ))}
      </S.List>
    </Flex>
  )
}
