//後から実行したいので、primitiveSampleという名前の関数を作る
// export default：このただ一つのファイルだけをexportされるものがある、それがprimitiveSample functionだよ
export default function primitiveSample() {
  const name = 'ふみか'
  // name = 123
  console.log('primitiveSample 1:', typeof name, name)

  const age = 29
  //ageに対してstring ""を当てたらエラー
  // age = "28"
  console.log('primitive Sample 2:', typeof age, age)

  const isSingle = true
  // isSingle = "foo"
  console.log('primitive Sample 3:', typeof isSingle, isSingle)

  const isUnder20: boolean = age <= 20
  console.log('primitive sample 4:', typeof isUnder20, isUnder20)
}
