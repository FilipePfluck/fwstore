import Image from 'next/image'

import * as S from './styles'
import { Box } from '../../../styled-system/jsx'
import { Badges } from './Badges'
import { ProductsList } from '@/components/ProductsList'
import { Footer } from '@/components/Footer'
import { prismaClient } from '@/lib/prisma'

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  })

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: 'keyboards',
      },
    },
  })

  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: 'mouses',
      },
    },
  })

  return (
    <>
      <S.PageContent>
        <Box px="5">
          <Image
            src="/banner-1.png"
            alt="Até 55% de desconto só nesse mês"
            width={700}
            height={300}
          />
        </Box>
        <Badges />
        <ProductsList products={deals} title="OFERTAS" />
        <Box px="5">
          <Image
            src="/banner-2.png"
            alt="Até 55% de desconto em mouses"
            width={700}
            height={300}
          />
        </Box>
        <ProductsList products={keyboards} title="TECLADOS" />
        <Box px="5">
          <Image
            src="/banner-3.png"
            alt="Até 20% de desconto em fones"
            width={700}
            height={300}
          />
        </Box>
        <ProductsList products={mouses} title="MOUSES" />
      </S.PageContent>
      <Footer />
    </>
  )
}
