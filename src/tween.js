import BezierEasing from 'bezier-easing'

const formula = {
  linear: BezierEasing(0, 0, 1, 1),
  ease: BezierEasing(.42, 0, .58, 1)
}

const tween = {}

for (let key in formula) {
  tween[key] = percent => formula[key](percent / 100)
}

export default tween

export const addBezier = (name, coefficient) => {
  if (formula[name]) throw new Error('addBezier error. Duplicate Key')
  formula[name] = BezierEasing(...coefficient)
  tween[name] = percent => formula[name](percent / 100)
}