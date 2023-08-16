# Tauri + Vue + Typescript

一个使用 tauri+vue+ts 开发跨平台软件的模板，支持窗口头部自定义 UI 和拖拽和窗口阴影，不用再自己做适配了，拿来即用，非常 nice。

使用到的技术栈：  
tauri：必须要用到的  
vue：前端页面开发框架  
vue-router：路由页面跳转控制  
pinia：数据存储和共享  
element-plus：UI 页面渲染  
sass：样式编程  
node：v16.18.0 本地开发依赖

## 页面预览：登陆页和主页

![](https://cdn.staticaly.com/gh/1024huijia/QingChunMeizi@master/image.1reeubafd2v4.webp)

![](https://cdn.staticaly.com/gh/1024huijia/QingChunMeizi@master/image.xr5skp68j3k.webp)

## 本地开发配置

克隆到本地：

```
git clone https://github.com/Sjj1024/tauri-vue.git
```

安装依赖：

```
pnpm install
```

开发预览：第一次比较耗时和消耗电脑性能，因为要安装 tauri 依赖

```
pnpm develop
```

编译打包：打包为不同平台的安装文件

```
pnpm bundle
```
