import Image from 'next/image'
import * as S from './styles'
import { ArrowDownIcon } from 'lucide-react'
import { Flex } from '../../../styled-system/jsx'
import { Rating } from '../Rating'
import { ProductWithTotalPrice } from '@/helpers/product'

export const Product = ({
  discountPercentage,
  imageUrls,
  name,
  totalPrice,
  basePrice,
}: ProductWithTotalPrice) => {
  return (
    <Flex direction="column" gap="4">
      <S.ProductImageContainer>
        {discountPercentage > 0 && (
          <S.ProductDiscountBadge>
            <ArrowDownIcon size={12} />
            {discountPercentage}%
          </S.ProductDiscountBadge>
        )}
        <Image src={imageUrls[0]} alt={name} width={98} height={80} />
      </S.ProductImageContainer>
      <Flex direction="column">
        <S.ProductName>{name}</S.ProductName>
        <S.ProductPrice>
          R$ {totalPrice.toFixed(2)}
          {discountPercentage > 0 && (
            <S.ProductOriginalPrice>
              R$ {basePrice.toFixed(2)}
            </S.ProductOriginalPrice>
          )}
        </S.ProductPrice>
        <Flex mt="1" gap="2">
          <Rating readOnly max={5} rate={4} product={name} />
          <S.AmountOfRatings>(25)</S.AmountOfRatings>
        </Flex>
      </Flex>
    </Flex>
  )
}
