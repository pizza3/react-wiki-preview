import React, { Fragment, CSSProperties } from 'react'
import Tooltip from './Tooltip'

type Props = {
  children: string
  keyword: (string | { word: string; title: string })[]
  theme: 'light' | 'dark'
  anchorStyles: CSSProperties
  mouseEnterDelay: number
}

type States = {
  str: (string | JSX.Element)[]
}

export default class Wrapper extends React.Component<Props, States> {
  static defaultProps = {
    theme: 'light',
    anchorStyles: {},
    mouseEnterDelay: 0
  }

  state: States = {
    str: []
  }

  componentDidMount() {
    if (typeof this.props.children === 'string') {
      this.addAnchors(this.props.children)
    } else {
      console.error('The children are needed to be of type "String".')
    }
  }

  addAnchors = (textContent: string) => {
    const { theme, anchorStyles, mouseEnterDelay } = this.props
    const wordArray: string[] | [] = textContent.split(' ')
    const replacement: (string | JSX.Element)[] = wordArray.map((word, index):
      | string
      | JSX.Element => {
      const data: {} | { title: string } = this.checkKeywordExist(word)
      if ('title' in data) {
        const value = data.title
        return (
          <Fragment key={index}>
            {` `}
            <Tooltip
              theme={theme}
              value={value}
              mouseEnterDelay={mouseEnterDelay}
            >
              <a
                style={anchorStyles}
                href={`https://en.wikipedia.org/wiki/${value}`}
              >
                {word}
              </a>
            </Tooltip>
          </Fragment>
        )
      }
      return ` ${word}`
    })
    this.setState({
      str: replacement
    })
  }

  checkKeywordExist = (word: string): {} | { title: string } => {
    const { keyword } = this.props
    let objValue: {} | { title: string } = {}
    keyword.forEach((element) => {
      if (typeof element === 'object') {
        if (element.word === word) {
          objValue = element
        }
      } else if (element === word) {
        objValue = { title: word }
      }
    })
    return objValue
  }

  render() {
    return <div>{this.state.str}</div>
  }
}
