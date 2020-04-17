# react-wiki-preview

## Introduction
Add wikipedia link preview to your own article's, blog post's, or in any general text content. Short link previews really do help users to gain context on the article they are reading or to define an unfamiliar term, object, event, or idea without navigating away from their original topic.

## API

| Prop          | Description   | Type  | Default Value | Expected Values |
| ------------- |:-------------|:-----:|:-----|:-----|
| keyword | Mention the word's or text for which preview is needed. | [string | { name: string; title: string }]|[]|[]

### Props

Name: `keyword` Type: `[ string , { name: string, title: string}]`

Provide a array of string's for which a preview would be needed, for some of them you can also mention it like this `{ name: "your word"; title: "wiki article title" }`. For some word's the article title won't be available so for those cases you can also use the above object.

Example

`[{ name: 'Greek', title: 'Ancient Greek' },'star','constellation','Sun',]`

Name: `theme` Type: `string`

There are two options `light` and `dark`.



## Development

### Run development server
```bash
npm run start
```

### Run build
```bash
npm run build
```

### Run dev
```bash
npm run dev
```

