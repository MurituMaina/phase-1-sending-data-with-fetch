// Add your code here
let name = "Steve"
    let email = "steve@steve.com"
 function submitData(name, email){
    
    return fetch('http://localhost:3000/users',{
        method: 'POST',
        headers:{
            'Content-Type':'application/json',
            'Accept': 'application/json'
        },
        body:JSON.stringify({name: `${name}`, email: `${email}`})
    })
    .then(resp => resp.json())
    .then(user => {
        // console.log(user.id)
        let idValue = document.createElement('p');
       idValue.innerHTML =`${user.id}`;
        let ouputValue = document.querySelector('body');
        ouputValue.append(idValue.innerHTML);
    })
    .catch((error) => {
        let errorMessage =document.createElement("p");
        errorMessage.textContent = error.message
        let errorOuput = document.querySelector("body")
        errorOuput.append(errorMessage)
    
    })
    }