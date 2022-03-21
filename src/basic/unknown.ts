export default function unknownSample() {
  //unknown型に入っているが、値が10になったことで、number型になった
  const maybeNumber: unknown = 10
  console.log('unknown sample 1:', typeof maybeNumber, maybeNumber)

  //比較する
  //isFooがfooという文字列と一致しますか？
  const isFoo = maybeNumber === 'foo'
  console.log('unknown sample 2:', typeof isFoo, isFoo)

  //タスこと
  //unknown だとタスことはできない
  //  const sum = maybeNumber +10

  //型がどんな型かわからない時は、anyではなくunknownを使う。その後に型を判定してあげましょう
  if (typeof maybeNumber === 'number') {
    const sum = maybeNumber + 10
    console.log('unknown sample 3:', typeof sum, sum)
  }
}
