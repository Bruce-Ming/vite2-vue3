# vite 初始化vue3项目

```js
// 安装
yarn add @vitejs/app my-vue-app --template vue-ts
// 添加eslint
yarn add  eslint  eslint-plugin-vue -D
// 添加sass 支持 vite内置了对sass的插件,只需要安装sass,并新建.eslintrc.js就行了
yarn add sass
// 添加路由
yarn add vue-router@4
// 添加VueUse  
yarn add @vueuse/core 
// 添加 vuex vuex-module-decorators  
yarn add vuex@4 vuex-module-decorators
// 添加 vite-plugin-components 插件. 实现components目录下的组件可以自动导入,使用时无需 import. 
yarn add vite-plugin-components -D
// 安装tailwind css 
yarn add tailwindcss@latest postcss@latest autoprefixer@latest -D
npx tailwindcss init -p
//tailwind.config.js中添加
purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
```

## TODO

- [x] vue-router
- [x] vuex
- [x] tailwindcss

## 参考资料

1. [antfu博客](https://antfu.me/posts/rewrite-in-vite)
2. [VueUse](https://github.com/vueuse/vueuse)
3. [vuex-module-decorators](https://github.com/championswimmer/vuex-module-decorators)
4. [vite-plugin-components](https://github.com/antfu/vite-plugin-components )
5. [vue-router](https://github.com/vuejs/vue-router-next)
6. [tailwindcss](https://tailwindcss.com/docs/guides/vue-3-vite)
