#!/usr/bin/env node
const psList = require('ps-list')
const colors = require('colors')

psList()
  .then(results => {
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
