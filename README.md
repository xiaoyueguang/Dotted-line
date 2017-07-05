# Dotted-line
一个 漂亮的背景图

## 需要从该项目 学习并使用的内容
- [x] 添加测试
- [x] package.json
- [x] README.MD 文档编写
- [ ] npm 发布
- [ ] 自动化
- [ ] 点移动的时候加入线性变化. linear, out-in.等
- [x] 点数量, 大小, 线的连接, 颜色渐变等.
- [x] 多个舞台的实现

## DEMO
[链接](https://xiaoyueguang.github.io/Dotted-line/dist/index.html)
[覆盖率测试](https://xiaoyueguang.github.io/Dotted-line/coverage/index.html)

## API
### 实例化方法
canvas(object)
* object: {object}
*  el: {HTMLElement} 待挂载的目标元素
*  width: {number} 宽度
*  height: {number} 高度
*  limit: {number} 点的数量
*  radius: {number} 点的半径
*  time: {number} 点移动一次所需的时间
*  color: {array} 颜色集合
*    color: {string} 颜色值.
*  isSameRadius: {boolean} 是否为相同半径

```
import canvas from 'dotted-line'
let stage = new canvas({
  el: document.getElementById('canvas'),
  width: 800,
  height: 800,
  limit: 15,
  pointerWidth: 15,
  time: 30,
  color: ['#f3f3f3']
})
```

### 实例方法
#### setLimit
> 设置点限制
* params
*  limit: {number} 点限制

#### addPointer
> 添加点

#### delPointer
> 删除点

#### setColors
> 设置颜色
* params
*  color {array} 颜色集合
*   color {string} 颜色值

#### setRadius
> 设置点的半径
* params
*  radius {number} 半径
