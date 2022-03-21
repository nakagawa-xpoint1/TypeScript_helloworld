export default function anySample() {
  let name: any = 'ふみか' //string型を代入
  console.log('any sample 1:', typeof name, name)
  //nameがany型だからnumberにも入れれる、、それは怖い。
  name = 29
  console.log('any sample2:', typeof name, name)
}
