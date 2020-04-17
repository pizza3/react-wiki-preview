import * as React from 'react';

type Props = {
  value: string | { name: string; title: string };
  theme: 'light' | 'dark';
};

type Theme = 'light' | 'dark';

interface Data {
  extract: string;
  thumbnail: { source: string; width: number; height: number };
  originalimage: { source: string };
}

type States = {
  data: Data;
  isLoaded: boolean;
  isSuccess: boolean;
  isImageLoaded: boolean;
};

const wikiLogo = (theme: Theme) => {
  const logoStyle = {
    position: 'relative' as 'relative',
    float: 'right' as 'right',
    right: '5px',
    top: '2px',
    width: '19px',
  };
  const color = theme === 'light' ? '#000' : '#a8a8a8';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={logoStyle}
      width="16.955"
      height="10.737"
      viewBox="0 0 16.955 10.737"
    >
      <path
        id="Wikipedia"
        d="M24.1,28.18a.275.275,0,0,1-.057.167.161.161,0,0,1-.125.075,1.588,1.588,0,0,0-.913.359,3.356,3.356,0,0,0-.732,1.165l-3.847,8.67c-.025.081-.1.121-.212.121a.237.237,0,0,1-.212-.121L15.85,34.1l-2.481,4.512a.237.237,0,0,1-.212.121.215.215,0,0,1-.219-.121l-3.78-8.67a3,3,0,0,0-.747-1.127,2.048,2.048,0,0,0-1.093-.4.146.146,0,0,1-.113-.064.219.219,0,0,1-.054-.146c0-.142.04-.212.121-.212q.506,0,1.057.045.512.047.965.046t1.087-.046Q11.035,28,11.542,28c.081,0,.121.07.121.212s-.025.21-.075.21a1.5,1.5,0,0,0-.8.256.685.685,0,0,0-.291.574,1.162,1.162,0,0,0,.121.452l3.124,7.055,1.773-3.349-1.652-3.464a4.508,4.508,0,0,0-.732-1.2,1.47,1.47,0,0,0-.868-.328.131.131,0,0,1-.1-.064.231.231,0,0,1-.049-.146c0-.142.034-.212.106-.212a8.848,8.848,0,0,1,.928.045,7.589,7.589,0,0,0,.868.046q.452,0,.957-.046Q15.5,28,16,28c.081,0,.121.07.121.212s-.024.21-.075.21q-1.011.069-1.011.574a1.831,1.831,0,0,0,.234.7l1.093,2.219,1.087-2.03a1.638,1.638,0,0,0,.227-.725q0-.693-1.011-.74c-.061,0-.091-.07-.091-.21a.254.254,0,0,1,.045-.143c.031-.046.061-.069.091-.069q.362,0,.89.045c.337.031.614.046.831.046.155,0,.385-.013.686-.039.382-.034.7-.052.959-.052.06,0,.089.06.089.18q0,.242-.166.242a1.9,1.9,0,0,0-.947.325,4.148,4.148,0,0,0-.893,1.2l-1.449,2.68,1.962,4,2.9-6.737a1.822,1.822,0,0,0,.151-.678q0-.74-1.011-.786c-.061,0-.091-.07-.091-.21s.045-.212.136-.212q.369,0,.875.045c.312.031.574.046.784.046a7.268,7.268,0,0,0,.769-.046c.3-.03.574-.045.816-.045C24.069,28,24.1,28.06,24.1,28.18Z"
        transform="translate(-7.15 -28)"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};
const footer = (theme: Theme) => {
  const color =
    theme === 'light'
      ? 'linear-gradient(0deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)'
      : 'linear-gradient(0deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)';
  return {
    bottom: '0px',
    width: '100%',
    height: '24px',
    backgroundImage: color,
    position: 'absolute' as 'absolute',
  };
};

const textStyles = (w: number, h: number, theme: Theme) => ({
  width: `${w}px`,
  height: `${h}px`,
  boxSizing: 'border-box' as 'border-box',
  padding: '12px',
  fontSize: '11px',
  fontFamily: 'sans-serif',
  wordSpacing: '1px',
  fontWeight: 400,
  letterSpacing: '0px',
  background: theme === 'light' ? '#fff' : '#000',
});

const display = (data: Data, theme: Theme) => {
  let width = 250;
  let flexDir = 'column';
  let imgWidth = 250;
  let imgHeight = 150;
  const color = theme === 'light' ? 'rgb(99, 98, 98)' : '#A8A8A8';
  const imageExist = 'thumbnail' in data;
  if (imageExist && data.thumbnail.width < data.thumbnail.height) {
    width = 400;
    flexDir = 'row';
    imgWidth = 200;
    imgHeight = 300;
  }
  return (
    <div
      style={{
        width: `${width}px`,
        height: `auto`,
        overflow: 'hidden',
        boxShadow: 'rgba(0, 0, 0, 0.55) 0px 0px 16px -3px',
        display: 'flex',
        flexDirection: flexDir === 'column' ? 'column' : 'row',
        color,
        borderRadius: '2px',
      }}
    >
      {imageExist ? (
        <div
          style={{
            width: `${imgWidth}px`,
            height: `${imgHeight}px`,
            backgroundImage: `url("${data.thumbnail.source}")`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundColor: '#fff',
            backgroundRepeat: 'no-repeat',
          }}
        />
      ) : (
        []
      )}
      <div style={textStyles(imgWidth, imgHeight, theme)}>{data.extract}</div>
      <div style={footer(theme)}>{wikiLogo(theme)}</div>
    </div>
  );
};

export default class Content extends React.Component<Props, States> {
  state: States = {
    data: {
      extract: '',
      thumbnail: { source: '', width: 0, height: 0 },
      originalimage: { source: '' },
    },
    isLoaded: false,
    isSuccess: false,
    isImageLoaded: false,
  };

  componentDidMount() {
    const { value } = this.props;
    const searchValue = typeof value === 'string' ? value : value.title;
    fetch(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${searchValue}`
    ).then((response: Response) => {
      if (response.status !== 200) {
        console.log(
          `Looks like there was a problem. Status Code: ${response.status}`
        );
        return;
      }
      this.updateData(response);
    });
  }

  updateData = (response: Response) => {
    const This = this;
    response.json().then(function(data) {
      const isSuccess = data.type === 'standard';
      This.setState({
        data,
        isLoaded: true,
        isSuccess,
      });
    });
  };

  render() {
    const { theme } = this.props;
    const { data, isLoaded, isSuccess } = this.state;
    const final: Element | any =
      isLoaded && isSuccess ? display(data, theme) : <div></div>;
    return final;
  }
}
