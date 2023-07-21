let nameofuser = document.querySelector('#names')
let email = document.querySelector('#email')
let phone = document.querySelector('#phone')
let form = document.querySelector('.inputform');

let newnameofuser = document.querySelector('#newnames')
let newemail = document.querySelector('#newemail')
let newphone = document.querySelector('#newphone')
// let form = document.querySelector('.inputform');


let update = document.querySelector('#update')
let delete_user = document.querySelector('#delete')


update.addEventListener('click', () => {
    window.localStorage.removeItem(nameofuser.value);

    const user = new User(newnameofuser.value , newemail.value,newphone.value );    
    localStorage.setItem(newnameofuser.value, JSON.stringify(user));
    
    

});

delete_user.addEventListener('click', () => {
    window.localStorage.removeItem(nameofuser.value);
});


class User {
    constructor(name, email,phone) {
      this.name = name;
      this.email = email;
      this.phone = phone;
    }
  }



function createuser(){
    const user = new User(nameofuser.value , email.value,phone.value );    
    localStorage.setItem(nameofuser.value, JSON.stringify(user));
}

function updateuser(){
    // localStorage.removeItem(nameofuser)
    // localStorage.setItem(nameofuser.value, JSON.stringify(user));
    
}



form.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(nameofuser.value !== '' & email.value !== '' & phone.value !== ''){
        createuser()
    }

    nameofuser.value =''
    email.value =''
    phone.value =''

})


// function getfromlocalstorage(){
//     items=localStorage.getItem('users')
//     return JSON.parse(items)
// }
