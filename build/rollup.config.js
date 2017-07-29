const banner = `/**
 * Dotted-line
 * Author: linjilei
 * Released under this MIT License.
 */
`

export default {
  entry: './src/app.js',
  format: 'cjs',
  dest: './dist/app.bundle.js',
  sourceMap: false,
  external: ['bezier-easing'],
  banner
}