#!/usr/bin/env node
const pathExists = require('path-exists')
const psList = require('ps-list')
const colors = require('colors')

console.log('test log output')

pathExists('./.hasbeenwarned').then(hasBeenWarned => {
  if (hasBeenWarned) {
    return
  }

  psList().then(results => {
    const yarnProcess = results.filter(p => p.name === 'yarn').shift()
    if (!yarnProcess) {
      console.log(`
~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

       Psst, use \`yarn\` instead

~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

`.red)
    }
  })
    .catch(err => console.log('error:', err))
})
