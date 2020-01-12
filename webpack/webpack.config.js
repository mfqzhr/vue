//这个配置文件, 其实就是一个js文件,通过node中的模块操作,向外面暴露一个配置对象
const path = require('path')

module.exports = {
    //在配置文件中 需要指定入口和出口
    entry: path.join(__dirname, './src/main.js'),//入口 表示要使用webpack打包哪个文件
    output: {
        path: path.join(__dirname, './dist'), //指定打包好的文件输出到哪个目录中去
        filename: 'bundle.js' //这是指定输出的文件的名称

    },
    module: {
        //这个节点用于配置所有的第三方模块加载器
        rules: [
            { test: /.css$/, use: ['style-loader', 'css-loader'] } //配置处理 .css文件的第三方 loader规则
        ]
    }
}



//当我们 在控制台 直接输入 webpack的时候,webpack做了以下几步:
// 1. webpack没有发现命令
// 2. 去根目录查找webpack.config.js这个文件
// 3. 找到后解析执行这个文件
// 4. 打包构建


//使用webpack-dev-server这个工具,来实现自动打包编译的过程
//1. npm
