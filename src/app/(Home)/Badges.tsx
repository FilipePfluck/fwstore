import { Badge } from '@/components/Badge'
import * as S from './styles'
import {
  HeadphonesIcon,
  KeyboardIcon,
  MonitorIcon,
  MouseIcon,
  SpeakerIcon,
  SquareDashedBottom,
} from 'lucide-react'

export const Badges = () => {
  return (
    <S.Badges>
      <Badge>
        <KeyboardIcon size={18} />
        Teclados
      </Badge>
      <Badge>
        <MouseIcon size={18} />
        Mouses
      </Badge>
      <Badge>
        <HeadphonesIcon size={18} />
        Fones
      </Badge>
      <Badge>
        <SquareDashedBottom size={18} />
        Mousepads
      </Badge>
      <Badge>
        <MonitorIcon size={18} />
        Monitores
      </Badge>
      <Badge>
        <SpeakerIcon size={18} />
        Speakers
      </Badge>
    </S.Badges>
  )
}
