document.querySelector('button').addEventListener('click', apiRequest)
// document.querySelector('button').addEventListener('click', reversedOrNot)
// document.querySelector('button').addEventListener('click', () => {reversedOrNot, apiRequest})

document.querySelector('img').classList.toggle('orientation')


async function apiRequest(){
    console.log("card test")
    const cardNumber = document.querySelector('input').value
    try{
        const response = await fetch(`http://localhost:8080/api/${cardNumber}`)
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
// document.querySelector('#random').addEventListener('click', reversedOrNot)
document.querySelector('#random').addEventListener('click', () => { console.log("event"), randomCardRequest(), reversedOrNot()})



async function randomCardRequest(){
    try{
        const response = await fetch('http://localhost:8080/api/random')
        const data = await response.json()

        console.log("data", data)
        document.querySelector('h2').innerText = 'Name: ' + data.name
        document.querySelector('h3').innerText = 'Number: ' + data.number
        document.querySelector('img').src = data.img

       

    }catch(error){
        console.log(error)
    }

   
}

function reversedOrNot(){
    let orient = Math.random() * 10
    console.log(orient)
    if(orient < 5){
        document.querySelector('img').classList.toggle('orientation')
    }
}

// reversedOrNot()