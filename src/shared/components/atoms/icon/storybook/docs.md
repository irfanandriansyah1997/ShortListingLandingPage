# Icon Component

Dalam icon component anda dapat memilih salah satu dari 2 icon yaitu [Material Icon](https://material.io/icons/) atau [Urbanindo Icon](https://s3.amazonaws.com/public.urbanindo.com/fonts/UrbanIndoIcons-20170831060809/index.html)

## Cara Penggunaan
berikut adalah cara penggunaan icon component

```jsx
// Import Component
import Icon from 'icon.component.js'

// Implementasi di method render
return (
    <Icon
      color="#69acec"
      size="20px"
  >
      edit
  </Icon>
)
```

## Props
berikut adalah dokumentasi props component

| Props | PropTypes | Default | Deskripsi |
|-------|-----------|---------|-----------|
|color|String / Number|`#3e4246`|Anda dapat menggubah warna  secara spesifik. Bisa menggunakan warna css `(#033 atau rgba(255, 0, 0, 0.5))`.|
|size|String / Number|`default`|Anda dapat mengatur ukuran font size di icon.|
