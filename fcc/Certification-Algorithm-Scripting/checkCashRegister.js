function checkCashRegister(price, cash, cid) {
  const Table = [
      { name: 'ONE HUNDRED', value: 100 },
      { name: 'TWENTY', value: 20 },
      { name: 'TEN', value: 10 },
      { name: 'FIVE', value: 5 },
      { name: 'ONE', value: 1 },
      { name: 'QUARTER', value: 0.25 },
      { name: 'DIME', value: 0.1 },
      { name: 'NICKEL', value: 0.05 },
      { name: 'PENNY', value: 0.01 }
  ]
  const output = { status: '', change: [] }
  let change = parseFloat(cash - price)
  let changeArray = []
  let quantityNotes = []
  let cashValue = 0

  for (let i in cid) { cashValue += parseFloat(cid[i][1]) }
  cashValue = cashValue.toFixed(2)

  if (cashValue < change) {
      output.status = 'INSUFFICIENT_FUNDS'
      return output
  }

  if (cashValue == change) {
      output.status = 'CLOSED'
      output.change = cid
      return output
  }

  let newCid = cid.reverse()
  for (let i in Table) {
      quantityNotes.push(Math.round(newCid[i][1]/Table[i].value))
  }
  
  let newChange = change

  for (let i in newCid) {
      if (Table[i].value <= newChange && newChange > 0 && quantityNotes[i] > 0) {
          let quantityValueTable = 0
          for (let j = 1; j <= quantityNotes[i] ; j++) {
              if (newChange > 0 && newChange - Table[i].value >= 0) {
                  newChange = (newChange - Table[i].value).toFixed(2)
                  quantityValueTable = j
              }
          }
          changeArray.push([Table[i].name ,Table[i].value*quantityValueTable ])
      }
  }


  if (cashValue > change && newChange == 0) {
      output.status = 'OPEN'
      output.change = changeArray
      return output
  }

  output.status = 'INSUFFICIENT_FUNDS'
  return output
}

const valor  =  checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])

console.log(valor)