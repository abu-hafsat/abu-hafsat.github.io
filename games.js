const buttonA = document.getElementById("btn-1");
let myaudio = document.getElementById("audio");
let my2ndaudio = document.getElementById("my-sound");
buttonA.addEventListener("click", function () {
    document.getElementById("welcome-img").style.display = 'none';
    document.getElementById("header").style.fontSize = '1.5rem';
    document.getElementById("header").style.marginTop = '0px';
    document.getElementById("letters").style.marginBottom = '10px';

    document.getElementById("img-1").style.display = 'flex';
    document.getElementById("unlist-1").style.display = 'flex';
    document.getElementById("tex-1").innerText = 'What is this ?';
    document.getElementById("list-A").innerText = 'A mango';
    document.getElementById("list-B").innerText = 'An Apple';
    document.getElementById("list-C").innerText = 'An Orange';

    document.getElementById("img-2").style.display = 'flex';
    document.getElementById("unlist-2").style.display = 'flex';
    document.getElementById("tex-2").innerText = 'is this an Aeroplane ?';
    document.getElementById("list-2A").innerText = 'Yes it is';
    document.getElementById("list-2B").innerText = 'No its not';
    document.getElementById("list-2C").innerText = 'it is a bus';

    document.getElementById("img-3").style.display = 'flex';
    document.getElementById("unlist-3").style.display = 'flex';
    document.getElementById("tex-3").innerText = 'What is this ?';
    document.getElementById("list-3A").innerText = 'a Hoe';
    document.getElementById("list-3B").innerText = 'a knife';
    document.getElementById("list-3C").innerText = 'an Axe';

    document.getElementById("list-A").addEventListener("click", function(){
        document.getElementById("fail").style.display = 'flex';
        document.getElementById("img-sect").style.display = 'flex';
        document.getElementById("good").style.display = 'none';
        playaudio2();
        setTimeout(delay, 3000);
    })

    document.getElementById("list-C").addEventListener("click", function(){
        document.getElementById("fail").style.display = 'flex';
        document.getElementById("img-sect").style.display = 'flex';
        document.getElementById("good").style.display = 'none';
        playaudio2();
        setTimeout(delay, 3000);
    })
    
    document.getElementById("list-B").addEventListener("click", function(){
        document.getElementById("fail").style.display = 'none';
        document.getElementById("img-sect").style.display = 'flex';
        document.getElementById("good").style.display = 'flex';
        playaudio();
        //setTimeout(delay2, 3000);
    })

    document.getElementById("list-2A").addEventListener("click", function(){
        document.getElementById("fail-2").style.display = 'none';
        document.getElementById("img-sect-2").style.display = 'flex';
        //document.getElementById("img-sect").style.display = 'none';
        document.getElementById("good-2").style.display = 'flex';
        playaudio();
        //setTimeout(delay2, 3000);
    })

 document.getElementById("list-2B").addEventListener("click", function(){
        document.getElementById("fail-2").style.display = 'flex';
       // document.getElementById("img-sect").style.display = 'none';
        document.getElementById("img-sect-2").style.display = 'flex';
        document.getElementById("good-2").style.display = 'none';
        playaudio2();
        setTimeout(delay2, 3000);
    })

 document.getElementById("list-2C").addEventListener("click", function(){
        document.getElementById("fail-2").style.display = 'flex';
        //document.getElementById("img-sect").style.display = 'none';
        document.getElementById("img-sect-2").style.display = 'flex';
        document.getElementById("good-2").style.display = 'none';
        playaudio2();
        setTimeout(delay2, 3000);
    })

 document.getElementById("list-3A").addEventListener("click", function(){
        document.getElementById("fail-3").style.display = 'flex';
        document.getElementById("img-sect-3").style.display = 'flex';
       // document.getElementById("img-sect-2").style.display = 'none';
       // document.getElementById("img-sect").style.display = 'none';
        document.getElementById("good-3").style.display = 'none';
        playaudio2();
        setTimeout(delay3, 3000);
    })

 document.getElementById("list-3B").addEventListener("click", function(){
        document.getElementById("fail-3").style.display = 'flex';
       // document.getElementById("img-sect").style.display = 'none';
       // document.getElementById("img-sect-2").style.display = 'none';
        document.getElementById("img-sect-3").style.display = 'flex';
        document.getElementById("good-3").style.display = 'none';
        playaudio2();
        setTimeout(delay3, 3000);
    })

    document.getElementById("list-3C").addEventListener("click", function(){
        document.getElementById("fail-3").style.display = 'none';
        document.getElementById("img-sect-3").style.display = 'flex';
       // document.getElementById("img-sect-2").style.display = 'none';
       // document.getElementById("img-sect").style.display = 'none';
        document.getElementById("good-3").style.display = 'flex';
        playaudio();
        //setTimeout(delay2, 3000);
    })

});



function delay () {
    return document.getElementById("fail").style.display = 'none';
}
function delay2 () {
    return document.getElementById("fail-2").style.display = 'none';
}
function delay3 () {
    return document.getElementById("fail-3").style.display = 'none';
}

function playaudio () {
    return myaudio.play();
}
function playaudio2 () {
    return my2ndaudio.play();
}