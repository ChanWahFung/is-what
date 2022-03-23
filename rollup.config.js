import pkg from './package.json'

const distName = 'lib'

export default {
  input: 'src/index.js',
  output: [
    {
      file: `${distName}/${pkg.main}`,
      format: 'cjs'
    },
    {
      file: `${distName}/${pkg.module}`,
      format: 'esm'
    }
  ]
}