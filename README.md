# vue-ssr

1. 在html中添加标志位，标志位中不能有空格
```html
<!-- vue-ssr-outlet -->   //这个有空格报错了
```
2. concurrently

cli命令同步进行

3. 首屏的意思就是在哪个页面刷新，哪个页面就是首屏

4. 服务端设置vuex中的数据，一开始会成功，但是服务端引用了前端的js，前端会再次渲染，这时候前端的vuex中的数据还是旧数据，就导致服务端修改的vuex数据并没有显示在页面上

5. 