const keyword = process.argv[2]

const IDValidator = require('id-validator')
const GB2260 = require('id-validator/src/GB2260')
const Validator = new IDValidator(GB2260)

var times = Number.parseInt(keyword, 10) || 1
times = times > 100 ? 100 : times

console.log(
  JSON.stringify({
    items: generatorID(times)
  })
)

function generatorID(times = 1) {
  let items = []
  let allMax = times
  while (times--) {
    let id = Validator.makeID()
    items.push({
      title: id,
      subtitle: '回车复制当前数据',
      icon: 'icon.png',
      arg: id
    })
  }
  if (allMax > 1) {
    items.unshift({
      title: `生成${allMax}条数据`,
      subtitle: '复制所有生成的身份证号',
      icon: 'copy.png',
      arg: items.map(v => v.title + '\n').join('')
    })
  }
  return items
}
