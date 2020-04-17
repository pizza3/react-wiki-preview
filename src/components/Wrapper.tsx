import React, { Fragment, CSSProperties } from 'react';
import Tooltip from './Tooltip';

type Props = {
  children: string;
  keyword: (string | { word: string; title: string })[];
  theme: 'light' | 'dark';
  anchorStyles: CSSProperties;
  mouseEnterDelay: number
};

type States = {
  str: any;
};

export default class Wrapper extends React.Component<Props, States> {
  static defaultProps = {
    theme: 'light',
    anchorStyles: {},
    mouseEnterDelay: 0
  };

  state = {
    str: '',
  };

  componentDidMount() {
    this.addAnchors(this.props.children);
  }

  addAnchors = (sentence: string) => {
    const { theme, anchorStyles, mouseEnterDelay } = this.props;
    const splitArray: string[] | [] = sentence.split(' ');
    const replacement: (string | JSX.Element)[] = splitArray.map(
      (val, index) => {
        const data = this.checkKeywordExist(val);
        if (Object.keys(data).length > 0) {
          const value = data.title;
          return (
            <Fragment key={index}>
              {` `}
              <Tooltip theme={theme} value={value} mouseEnterDelay={mouseEnterDelay}>
                <a
                  style={anchorStyles}
                  href={`https://en.wikipedia.org/wiki/${value}`}
                >
                  {val}
                </a>
              </Tooltip>
            </Fragment>
          );
        }
        return ` ${val}`;
      }
    );
    this.setState({
      str: replacement,
    });
  };

  checkKeywordExist = (val: string): any => {
    const { keyword } = this.props;
    let objValue: any = {};
    keyword.forEach(element => {
      if (typeof element === 'object') {
        if (element.word === val) {
          objValue = element;
        }
      } else if (element === val) {
        objValue = { title: val };
      }
    });
    return objValue;
  };

  render() {
    return <div>{this.state.str}</div>;
  }
}
