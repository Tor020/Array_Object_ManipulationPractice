// https://www.codewars.com/trainer/javascript

let c = (arg) => {
  console.log(arg);
}

function friend(friends){
    friends.forEach = (val, i)=> {
    c(val, i)
  }
}


c(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]));