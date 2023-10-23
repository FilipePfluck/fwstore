'use client'

import { RatingGroup, RatingGroupProps } from '@ark-ui/react'
import { Star } from 'phosphor-react'

import * as S from './styles'

type RatingProps = RatingGroupProps & {
  product: string
  rate: number
}

export const Rating = ({ product, rate, ...props }: RatingProps) => {
  return (
    <RatingGroup
      max={5}
      defaultValue={3}
      value={rate}
      aria-label={`${product} rating`}
      {...props}
    >
      <S.ProductRating>
        {({ sizeArray }) =>
          sizeArray.map((index) => (
            <S.Star key={index} index={index}>
              {({ isHighlighted }) => {
                if (isHighlighted) return <Star size={16} weight="fill" />
                return <Star size={16} weight="regular" />
              }}
            </S.Star>
          ))
        }
      </S.ProductRating>
    </RatingGroup>
  )
}
