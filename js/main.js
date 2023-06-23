document.querySelector('#lookup').addEventListener('click', apiRequest)


// document.querySelector('img').classList.remove('orientation')

async function apiCardRequest(card){
    console.log("card test")
    const cardNumber = card
    try{
        const response = await fetch(`https://oracle-api.up.railway.app/api/${cardNumber}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = 'Name: ' + data.name
        document.querySelector('h3').innerText = 'Number: ' + data.number
        document.querySelector('img').src = data.img
        


    }catch(error){
        console.log(error)
    }
}



async function apiRequest(){
    console.log("card test")
    const cardNumber = document.querySelector('input').value
    try{
        const response = await fetch(`https://oracle-api.up.railway.app/api/${cardNumber}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = 'Name: ' + data.name
        document.querySelector('h3').innerText = 'Number: ' + data.number
        document.querySelector('img').src = data.img
        


    }catch(error){
        console.log(error)
    }
}

// document.querySelector('#random').addEventListener('click', randomCardRequest)
document.querySelector('#random').addEventListener('click', () => { console.log("event"), randomCardRequest()})



async function randomCardRequest(){
    try{
        const response = await fetch('https://oracle-api.up.railway.app/api/random')
        const data = await response.json()

        console.log("random data", data)
        document.querySelector('h2').innerText = 'Name: ' + data.name
        document.querySelector('h3').innerText = 'Number: ' + data.number
        document.querySelector('img').src = data.img
        // reversedOrNot()

       

    }catch(error){
        console.log(error)
    }

   
}

// function reversedOrNot(){
//     let orient = Math.random() * 10
//     console.log(orient)
//     if(orient < 5){
//         document.querySelector('img').classList.add('orientation')
//     }else{
//         document.querySelector('img').classList.remove('orientation')

//     }
// }

// reversedOrNot()