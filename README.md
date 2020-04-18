# react-wiki-preview

## Introduction
Add wikipedia link preview to your own article's, blog post's, or in any general text content. Short link previews really do help users to gain context on the article they are reading or to define an unfamiliar term, object, event, or idea without navigating away from their original topic.

<p align="center">
  <img src="https://github.com/pizza3/asset/blob/master/demopreview.gif?raw=true" height="398" width="650">
</p>


## Installation

```zsh
npm install react-wiki-preview --save
```

## Basic Usage

```js
import React from "react";
import Wrapper from "react-wiki-preview";

const App = () => {
  const keyword = [{ word: 'Greek', title: 'Ancient Greek' }, 
  { word: 'celestial', title: 'Astronomical object' },
  'constellation','pendulum']
  return(
    <Wrapper keyword={keyword}>
        Horologium (Latin hōrologium, from Greek ὡρολόγιον, lit. 'an instrument for
        telling the hour') is a constellation of six stars faintly visible in the
        southern celestial hemisphere. It was first described by the French
        astronomer Nicolas-Louis de Lacaille in 1756 and visualized by him as a
        clock with a pendulum and a second hand.
    </Wrapper>
  )
}
```

Note: We also need to include these css classes as well.

```css
.trigger {
  position: absolute;
  opacity: 1;
  transition: 0.1s;
  
}
.trigger-hidden {
  opacity: 0;
  visibility: hidden;
}
```

## API

### Component

### `<Wrapper/>`
The `Wrapper` component encloses the text content, the type of the children can only be `string`.

### Props

### `keyword`  

Type: `[ string , { word: string, title: string}]`

Provide a array of string's for which a preview would be needed, If a word doesn't exist as a wiki article or the title of the article itself is different for
those cases you can mention it like this `{ word: "your word"; title: "wiki article title" }` instead of providing a `string`.

Example
```js
[{ word: 'Greek', title: 'Ancient Greek' },'star','constellation','Sun']
```

### `theme` 
Type: `string`
There are two options `light` and `dark`. Default is `light`.

### `anchorStyle` 
Type: `CSSProperties`
You can also give custom style properties to the anchor tag's too.

Example
```js
{
    color: "#000#",
    textDecoration: "none",
    background: "yellow"
}
```

### `mouseEnterDelay`
type: `float`
delay time to show when mouse enter. unit: s.


## Development

Local development is broken into two parts (ideally using two tabs).

First, run rollup to watch your `src/` module and automatically recompile it into `dist/` whenever you make changes.

```bash
npm start # runs rollup with watch flag
```

The second part will be running the `example/` create-react-app that's linked to the local version of your module.

```bash
# (in another tab)
cd example
npm start # runs create-react-app dev server
```

Now, anytime you make a change to your library in `src/` or to the example app's `example/src`, `create-react-app` will live-reload your local dev server so you can iterate on your component in real-time.

```bash
npm run test:watch # runs tests in watch mode
```
## License

MIT License

Copyright (c) 2020 Yugam Dhuriya

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE