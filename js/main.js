





// document.querySelector('#lookup').addEventListener('click', apiRequest)


// document.querySelector('img').classList.remove('orientation')

async function apiCardRequest(card){
    console.log("card test")
    const cardNumber = card
    try{
        const response = await fetch(`https://oracle-api.up.railway.app/api/${cardNumber}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('#result').innerText = 'Name: ' + data.name
        document.querySelector('#number').innerText = 'Number: ' + data.number
        document.querySelector('img').src = data.img
        document.querySelector('#meaning').innerText = 'Meaning: ' 
        document.querySelector('#text').innerText = data.meaning
        


    }catch(error){
        console.log(error)
    }
}



// async function apiRequest(){
//     console.log("card test")
//     const cardNumber = document.querySelector('input').value
//     try{
//         const response = await fetch(`https://oracle-api.up.railway.app/api/${cardNumber}`)
//         const data = await response.json()

//         console.log(data)
//         document.querySelector('h2').innerText = 'Name: ' + data.name
//         document.querySelector('#number').innerText = 'Number: ' + data.number
//         document.querySelector('img').src = data.img
//         document.querySelector('#meaning').innerText = 'Meaning: ' + data.meaning

        


//     }catch(error){
//         console.log(error)
//     }
// }

// document.querySelector('#random').addEventListener('click', randomCardRequest)
document.querySelector('#random').addEventListener('click', () => { console.log("event"), randomCardRequest()})



async function randomCardRequest(){
    try{
        const response = await fetch('https://oracle-api.up.railway.app/api/random')
        const data = await response.json()

        console.log("random data", data)
        document.querySelector('#result').innerText = 'Name: ' + data.name
        document.querySelector('#number').innerText = 'Number: ' + data.number
        document.querySelector('img').src = data.img
        document.querySelector('#meaning').innerText = 'Meaning: '
        document.querySelector('#text').innerText = data.meaning

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