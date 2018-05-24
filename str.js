class Str {
  static lower(str) {
    return str.toLowerCase()
  }

  static upper(str) {
    return str.toUpperCase()
  }

  static capitalize(str) {
    const arr = str.split(' ')
    const res = []
    for(let word of arr){
        res.push(word[0].toUpperCase()+word.substr(1,(word.length-1)).toLowerCase())
    }
    return res.join(' ')
  }

  static reverse (str){
    let res = ""
    for (let i=str.length;i>0;i--){
        res = res + str[i-1]
    }
    return res
  }

  static contains (str, words){
    let arr = str.split(' ')
    if (typeof words == 'object'){
      for (let word of words){
        if (arr.includes(word)){
          return true
        }
      }
      return false
    }
    return arr.includes(words)
  }

  static random (num = 16){
    let str = ""
    let candidate = "ABCDEFGHIJKLMNOPQRSTUVWXYZqwertyuiopasdfghjklzxcvbnm1234567890"
    for (let i = 0;i<num;i++){
        str = str+candidate.substr((Math.random()*candidate.length),1)
    }
    return str
  }

  static doublecon (arr, connector){
    let remove = 0
    if (arr.join('').includes(connector+connector)){
        remove = arr.join('').indexOf(connector+connector)
        arr.splice(remove,1)
        Str.doublecon(arr, connector)
    }
    if (arr[arr.length-1]===connector){arr.pop()}
    return arr
  }

  static slug(str, connector = '-'){
    const candidate = "`~!@#$%^&*()-=_+[]\\{}|,./<>?;:'\" "
    const arr = str.split('')
    for (let i=0;i<arr.length;i++){
        if(candidate.includes(arr[i])){
            arr[i] = connector
        }
    }
    return this.doublecon(arr, connector).join('')
  }

  static count(str){
    return str.length
  }

  static countWords(str){
    return str.split(' ').length
  }

  static trim (str, char = 100, ends = '...'){
      if (char<str.length){
        return str.substr(0,char)+ends
    }else{
        return str
    }
  }

  static trimWords(str, char = 30, ends = '...'){
    let arr = str.split(' ')
    let res = ''
    if(char<arr.length){
        for (let i = 0;i<char;i++){
            res = res + arr[i] + ' '
        }
        return res + ends
    }else {return str}
  }
}

module.exports = Str