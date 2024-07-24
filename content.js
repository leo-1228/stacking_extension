document.addEventListener("DOMContentLoaded", function(e) {
    let score = "";
    
    const xhttp = new XMLHttpRequest();

    interval = setInterval(() => {
        let rlt = document.getElementsByClassName("result svelte-161j3ct")[0].innerHTML;
        let color = document.getElementsByClassName("result svelte-161j3ct")[0].style.color;
        if(rlt!=score && color!=""){
            xhttp.open("GET", "http://localhost/store/?score=" + rlt, true);
            xhttp.send();
            score = rlt;
        }
    }, 500);
});