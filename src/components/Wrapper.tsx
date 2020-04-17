import React from 'react';
import Tooltip from './Tooltip';

type Props = {
  children: string;
  keyword: (string | { name: string; title: string })[];
  theme: 'light' | 'dark';
};

type States = {
  str: any;
};

export default class Wrapper extends React.Component<Props, States> {
  static defaultProps = {
    theme: 'light',
  };

  state = {
    str: '',
  };

  componentDidMount() {
    this.addAnchors(this.props.children);
  }

  addAnchors = (sentence: string) => {
    const { theme } = this.props;
    const splitArray: string[] | [] = sentence.split(' ');
    const replacement: (string | JSX.Element)[] = splitArray.map(
      (val, index) => {
        const data = this.checkKeywordExist(val);
        if (Object.keys(data).length > 0) {
          const value = data.title;
          return (<>{` `}
            <Tooltip key={index} theme={theme} value={value}>
              <a href="https:pizza3.github.io">{val}</a>
            </Tooltip>
            </>
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
        if (element.name === val) {
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
