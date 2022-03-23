const path = require('path')
const shelljs = require('shelljs')
const program = require('commander')

const targetFile = path.resolve(__dirname, '../package.json')
const packagejson = require(targetFile)
const currentVersion = packagejson.version
const versionArr = currentVersion.split('.')
const [mainVersion, subVersion, phaseVersion] = versionArr

const defaultVersion = `${mainVersion}.${subVersion}.${+phaseVersion + 1}`

let newVersion = defaultVersion

program
  .option('--versions <type>', 'Add release version number', defaultVersion)
  .parse(process.argv)

const argVersion =  program.opts().versions

if (argVersion) {
  newVersion = argVersion
}

function release() {
  shelljs.sed('-i', `"version": "${currentVersion}"`, `"version": "${newVersion}"`, targetFile)
  shelljs.cp('-r', ['package.json', 'README.md'], './lib')
  shelljs.cd('lib')
  if (shelljs.exec('npm publish --access=public').code !== 0) {
    shelljs.echo(`-----> Error: published ${newVersion}`)
    shelljs.exit(1)
  } else {
    shelljs.echo(`-----> Success: published ${newVersion}`)
  }
}

release()