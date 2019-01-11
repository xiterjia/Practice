const keyword = process.argv[2]

const bank = require('./bankaccount')

var times = Number.parseInt(keyword, 10) || 1
times = times > 100 ? 100 : times

console.log(
  JSON.stringify({
    items: generatorBankID(times)
  })
)

function generatorBankID(times = 1) {
  let items = []
  let allMax = times
  while (times--) {
    let bankID = bank.generatorBankAccount()
    if (bank.luhmCheck(bankID)) {
      items.push({
        title: bankID,
        subtitle: '回车复制当前数据',
        icon: 'icon.png',
        arg: bankID
      })
    } else {
      ttimes++
    }
  }
  if (allMax > 1) {
    items.unshift({
      title: `生成${allMax}条数据`,
      subtitle: '复制所有生成的银行卡号',
      icon: 'copy.png',
      arg: items.map(v => v.title + '\n').join('')
    })
  }
  return items
}
