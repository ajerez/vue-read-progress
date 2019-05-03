# vue-read-progress
Vue.js plugin for scroll position with a progress bar indicator

<div align="center">
  <a href="https://www.npmjs.com/package/vue-read-progress"><img alt="NPM Version" src="https://img.shields.io/npm/v/vue-read-progress.svg?style=for-the-badge"></a> 

  <a href="https://bundlephobia.com/result?p=vue-read-progress"><img alt="Size" src="https://img.shields.io/bundlephobia/minzip/vue-read-progress.svg?style=for-the-badge"></a>

  <a href="https://twitter.com/alberto_jrz"><img alt="Twitter" src="https://img.shields.io/static/v1.svg?label=TWITTER&message=follow&color=blue&style=for-the-badge"></a> 
</div>

## Demo

https://ajerez.github.io/vue-read-progress/


## Installation

#### With npm (Recommended)
```bash
npm i vue-read-progress
```

#### yarn
```bash
yarn add vue-read-progress
```

## Usage

#### Default style

```vue
<template>
  <vue-read-progress></vue-read-progress>
  <!-- Your page content -->
</template>

<script>
  import VueReadProgress from "vue-read-progress";

  export default {
    components: {
      VueReadProgress
    }
  };
</script>
```

#### Customizing the Look and Feel

```vue
<template>
  <vue-read-progress color="#32AAEA" opacity="0.5" height="10px" :shadow="true"></vue-read-progress>
  <!-- Your page content -->
</template>

<script>
  import VueReadProgress from "vue-read-progress";

  export default {
    components: {
      VueReadProgress
    }
  };
</script>
```

## Available Options (All optional)

| Property | Type   | Default value | Prop Description                       |
|----------|--------|---------------|-----------------------------------|
| height  | String | 4px           | Height of progress bar (optional)       |
| color   | String | #506888       | Color of progress bar (optional) |
| opacity | [String, Number] | 1   | Set opacity values from 0 to 1 (optional)          |
| shadow  | Boolean | false        | Enable box-shadow for the progress bar (optional)   |

## License

This project is licensed under the terms of the MIT license
