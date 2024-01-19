

function writeCards(names,eventName){
const newArray=[]
for (let index = 0; index < names.length; index++) {
    const element = names[index];
    newArray.push(`Thank you, ${element}, for the wonderful ${eventName} gift!`)
}
return newArray

}

function countDown(number) {
while(-1 < number){console.log(number--)}
}

