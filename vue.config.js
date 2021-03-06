const path = require('path'); // 引入path模块
function resolve(dir) {
    return path.join(__dirname,dir) //path.join(_dirname)设置绝对路径
}
module.exports={
  //关闭eslint
  lintOnSave:false,
 chainWebpack:(config)=>{
         config.resolve.alias
             //第一个参数：别名 第二个参数：路径
             .set('components',resolve('src/components'))
             .set('assets',resolve('src/assets'))
             .set('common',resolve('src/common'))
             .set('views',resolve('src/views'))
     },
     devServer:{
       open:true,
       port:8080,
       proxy:{
         '^/api':{
           changeOrigin: true,
           target:'http://interface.release.vliao9.com:9916',
           pathRewrite:{'^/api':' '},
         }
       }
     }
}
