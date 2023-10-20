import * as S from './styles'

type AvatarProps = {
  src: string
  name: string
}

export const Avatar = ({ src, name = '' }: AvatarProps) => {
  const [firstName, secondName] = name.split(' ')
  const initials = `${firstName[0]}${secondName[0]}`

  return (
    <S.Root>
      <S.Fallback>{initials}</S.Fallback>
      <S.Image src={src} alt={name} />
    </S.Root>
  )
}
