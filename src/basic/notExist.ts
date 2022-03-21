export default function notExistSample() {
  let name = null
  console.log('notExist sample 1:', typeof name, name)

  name = 'ふみか'

  //nameが存在している時は・
  if (name) {
    console.log('noExist sample 2:', '吾輩は猫である。名前は' + name)
  } else {
    console.log('noExist sample 3:', '吾輩は猫である。名前はまだ' + name)
  }

  let age = undefined
  console.log('noExist sample 4:', typeof age, age)
  age = 29
  if (!age) {
    console.log('noExist sample 5:', '年齢は秘密です')
  } else {
    console.log('noExist sample 6:', '年齢は' + age + '歳です。')
  }
}

//存在しているかをチェックして・・nullじゃなければの定義
