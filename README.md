## 安装 Webpack 的核心模块以及它的 CLI 模块
    
    npm i webpack webpack-cli --save-dev

## 编译
    npx 是 npm 5.2 以后新增的一个命令，可以用来更方便的执行远程模块或者项目 node_modules 中的 CLI 程序。
    
    npx webpack

## 配置 Webpack 的打包过程
    更目录增加配置
    webpack.config.js

## 编译 css
    npm install css-loader --save-dev

    css-loader 只会把 CSS 模块加载到 JS 代码中，而并不会使用这个模块。
    再使用一个 style-loader，把 css-loader 转换后的结果通过 style 标签追加到页面上。

    npm install style-loader --save-dev

## 体验插件机制
    更为合理的做法就是在每次完整打包之前，自动清理 dist 目录，这样每次打包过后，dist 目录中就只会存在那些必要的文件。

    npm install clean-webpack-plugin --save-dev

## 安装 webpack-dev-server
    
    npm install webpack-dev-server --save-dev

    坑：必须是着两个版本，不然报错
    "webpack": "^4.42.0",
    "webpack-cli": "3.x",

    也要用 16 以上的
    "vue-loader": "^16.0.0-rc.1",
    vue-loader依赖 @vue/compiler-sfc
    "@vue/compiler-sfc": "^3.0.2",

## 安装 autoprefixer
    npm i autoprefixer@8.0.0 -D

    这个要在 8 这个版本，不然报错

## eslint
    https://github.com/zhangyuang/standardjs-vue/blob/master/README.md

    npm i eslint-config-standard-vue-ts --save-dev

    .eslintrc.js
        module.exports = {
            extends: [
                'standard-vue-ts'
            ],
            // 如果你还需要检测 ts 文件则添加该项，并且保证根目录有 tsconfig.json 文件
            parserOptions: {
                project: './tsconfig.json'
            }
        }
    
    添加脚本命令
        "lint": "eslint src --ext .js,.vue,.ts",
        "lint:fix": "eslint src --ext .js,.vue,.ts --fix"

## 安装样式库

    https://blog.getbootstrap.com/
    npm i bootstrap@next -S
