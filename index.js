#!/usr/bin/env node
const pathExists = require('path-exists')
const psList = require('ps-list')

pathExists('./.hasbeenwarned').then(hasBeenWarned => {
  if (hasBeenWarned) {
    return
  }

  psList().then(results => {
    const yarnProcess = results.filter(p => p.name === 'yarn').shift()
    if (!yarnProcess) {
      console.log('Use yarn instead')
    }
  })
    .catch(err => console.log('error:', err))
})
