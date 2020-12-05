module.exports = {
    extends: [
        'standard-vue-ts'
    ],
    // 如果你还需要检测 ts 文件则添加该项，并且保证根目录有 tsconfig.json 文件
    parserOptions: {
        project: './tsconfig.json'
    },
    rules: {
    }
}