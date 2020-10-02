const router = require('koa-router')()
const wordcloud = require('../public/javascripts/wordcloud')
const mapScatter = require('../public/javascripts/mapScatter')
const sceenData = require('../public/javascripts/sceenData')

router.prefix('/data')

router.get('/wordcloud', function (ctx, next) {
  ctx.body = wordcloud
})

router.get('/mapScatter', function (ctx, next) {
  ctx.body = mapScatter
})

router.get('/screenData', function (ctx, next) {
  ctx.body = sceenData
})

module.exports = router