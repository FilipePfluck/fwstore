import Image from 'next/image'
import * as S from './styles'
import { ArrowDownIcon } from 'lucide-react'
import { Flex } from '../../../styled-system/jsx'
import { Rating } from '../Rating'

export const Product = () => {
  return (
    <Flex direction="column" gap="4">
      <S.ProductImageContainer>
        <S.ProductDiscountBadge>
          <ArrowDownIcon size={12} />
          55%
        </S.ProductDiscountBadge>
        <Image
          src="/mouse-1.png"
          alt="G Pro X Superlight"
          width={98}
          height={80}
        />
      </S.ProductImageContainer>
      <Flex direction="column">
        <S.ProductName>G Pro X Superlight</S.ProductName>
        <S.ProductPrice>
          R$ 306,00
          <S.ProductOriginalPrice>R$ 680,00</S.ProductOriginalPrice>
        </S.ProductPrice>
        <Flex mt="1">
          <Rating readOnly max={5} rate={4} product="G Pro X Superlight" />
        </Flex>
      </Flex>
    </Flex>
  )
}
