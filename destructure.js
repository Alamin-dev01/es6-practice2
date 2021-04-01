const person = { name: 'Jack Smith', age: 17, job: 'Web developer', gfName: 'Isita', address: 'uttara', phone: '0188875658', friends: ['Tom', 'jarray', 'mici'] }

const {phone,gfName,address} = person;


// const gfName = person.gfName;
// const phone = person.phone;


// console.log(gfName, phone,address)
// console.log(gfName, phone,address)

const friends=['nafiz','ashraful','limol','mehedi','sharmin']
const [chotoFriend,nextChoto,...restFriends]=friends;

console.log(restFriends)

const complexObject={ name:'bdl',
info:{
  address:'kola bagan',
  leader:'Tiger leadre'


}
}
const {leader}=complexObject.info;





