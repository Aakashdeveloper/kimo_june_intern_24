const validateFname = () => {
    let fname = document.getElementById('fname');
    let fout = document.getElementById('fout');
    let fdiv = document.getElementById('fdiv');

    if(fname.value.trim().length == 0 ){
        fout.innerText = "Please Enter First Name";
        fdiv.classList.add('has-error')
    }else{
        fout.innerText = ''
         fdiv.classList.remove('has-error')
          fdiv.classList.add('has-success')
    }
}

function validateEmail(){
    let email = document.getElementById('mail').value;
    let eout = document.getElementById('eout');
    if(email.trim().length == 0 ){
        eout.innerText="Please Enter Email"
    }else{
        if(email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$") == null){
            eout.innerText="Please Enter Valid Email"
        }else{
            eout.innerText=""
        }
    }

}


const validatePassword = () => {
    let pwd = document.getElementById('pwd').value;
    let pout = document.getElementById('pout');
    let ppout = document.getElementById('ppout');
    if(pwd.trim().length<15){
        if(pwd.trim().length < 8 ){
            pout.innerText = "Min length of password is 8";
            ppout.style.display="block";
            ppout.style.background="red"
        }else if(pwd.trim().length < 11){
            pout.innerText = "";
            ppout.style.background="orange"
        }
    }else{
        ppout.style.background="green"
    }
}