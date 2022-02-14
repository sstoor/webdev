



function run(){

    account = document.getElementById("account").value;
    sorted = account.split('').sort().join('');



    document.getElementById("result").innerHTML = sorted;

}
