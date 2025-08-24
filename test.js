
fetch (`https://api.adviceslip.com/advice`)
.then (response =>response.json()) // when promise is resolved
.then( data=> console.log(data.slip.advice)) // when promise is resolved for picking specific information ie the advice only

.catch(error=>console.log(error))//reject { This is only for catching the error}
