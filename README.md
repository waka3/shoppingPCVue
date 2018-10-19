# npm run build

## 打包运行页面完全空白，提示：加载资源失败。

检查路径是否错误，如果是路径问题，解决：config → index.js 

```bash
 build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static', 
    assetsPublicPath: '/', 
 }
 ```
 修改：
 
 ```bash 
 build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static', 
    assetsPublicPath: './',   →  修改打包的路径
 }
 ```
 
 ## 以背景方式写入的图片路径打包引用路径不对：
 
build → utils.js 

```bash
if (options.extract) {
  return ExtractTextPlugin.extract({
    use: loaders,
    fallback: 'vue-style-loader'
  })
} else {
  return ['vue-style-loader'].concat(loaders)
}
```
修改：

```bash
if (options.extract) {
  return ExtractTextPlugin.extract({
    use: loaders,
    fallback: 'vue-style-loader',
    publicPath: '../../'
  })
} else {
  return ['vue-style-loader'].concat(loaders)
}
