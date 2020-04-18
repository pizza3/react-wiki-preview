import * as React from 'react'
import Trigger from 'rc-trigger'
import Content from './Content'

const position = {
  bottom: {
    points: ['tc', 'bc'],
    offset: [0, 10]
  },
  right: {
    points: ['tl', 'tc'],
    offset: [20, 0]
  },
  top: {
    points: ['bc', 'tc'],
    offset: [0, -10]
  }
}

type Props = {
  value: string | { name: string; title: string }
  theme: 'light' | 'dark'
  children: any
  mouseEnterDelay: number
}

export default class Tooltip extends React.Component<Props> {
  render() {
    const { children, value, theme, mouseEnterDelay } = this.props
    return (
      <Trigger
        action={['hover']}
        popup={<Content theme={theme} value={value} />}
        mouseEnterDelay={mouseEnterDelay}
        prefixCls='dropdown'
        popupAlign={position.bottom}
        // defaultPopupVisible
      >
        {children}
      </Trigger>
    )
  }
}
