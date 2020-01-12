//这是main.js 是我们项目的js入口文件

//1. 导入jquery
// import *** from *** 是es6中导入模块的方式 低版本浏览器不识别 
import $ from 'jquery'

// 使用import语法导入css样式 
//webpack默认只能处理js文件无法处理非js文件
//如果要处理非js类型的文件,我们要安装合适的第三方加载器
//打包css: cnpm install style-loader css-loader -D 
import './css/index.css'

$(function(){
    $('li:odd').css('backgroundColor', 'red')
    $('li:even').css('backgroundColor', 'lightred')
})