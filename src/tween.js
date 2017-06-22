/**
 * 补间动画
 * 返回的方法.
 * 初始化 传入 一个 起点和终点.
 * 根据 贝塞尔曲线. 返回一个 方法,
 * 该方法接受一个 0 - 100 的数字
 * 返回在某个点时 应该所在的数字.
 * 
 * 具体实现: 待调整
 * linear 比例大概是 每次 都是为1
 * ease 为
 */

/**
 * linear
 * @param {number} start 起点
 * @param {number} end 终点
 * @param {number} percent 百分比数字 0-100
 * @return {number} 返回某个百分比下的位置
 */
const linear = (...rest) => calc(1, ...rest)

/**
 * ease
 * TODO: 错误
 * @param {number} start 起点
 * @param {number} end 终点
 * @param {number} percent 百分比数字 0-100
 * @return {number} 返回某个百分比下的位置
 * (x-50)(x-50) = y + 2400
 */
const ease = (...rest) => {
  const [start, end, percent] = rest
  return calc(Math.sqrt(percent + 2400) + 50, ...rest)
}
/**
 * 计算
 * @param {number} bezier 贝塞尔系数
 * @param {number} start 起点
 * @param {number} end 终点
 * @param {number} percent 百分比数字 0-100
 * @return {number} 返回某个百分比下的位置
 */
const calc = (bezier, start, end, percent) => {
  let distance = Math.abs(start - end) * percent / 100 * bezier
  return start > end ?
    start - distance : start + distance
}

export default {
  ease, linear
}
