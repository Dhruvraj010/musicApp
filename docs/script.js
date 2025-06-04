console.log("welcome to eTunes");

let songindex=0;
let AudioElement=new Audio('song/s1.mp3');
let masterplay = document.getElementById('masterplay');
let progressbar = document.getElementById('progressbar');
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname');
let songitem = Array.from(document.getElementsByClassName('songitem'));

let songs = [
    {songname: "Tum se hi", filepath: "song/s1.mp3", coverpath:"covers/c1.jpg"},
    {songname: "Suno na suno na", filepath: "song/s2.mp3", coverpath:"covers/c2.jpg"},
    {songname: "Main yahan hu ", filepath: "song/s3.mp3", coverpath:"covers/c3.jpg"},
    {songname: "Main hoo na", filepath: "song/s4.mp3", coverpath:"covers/c4.jpg"},
    {songname: "Kuch na kaho", filepath: "song/s5.mp3", coverpath:"covers/c5.jpg"},
    {songname: "Mauja hi mauja", filepath: "song/s6.mp3", coverpath:"covers/c1.jpg"},
    {songname: "My dil goes mmmm", filepath: "song/s7.mp3", coverpath:"covers/c7.jpg"}
    ];
    
songitem.forEach((Element,i) =>{
   // console.log(Element,i);
    Element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    Element.getElementsByClassName("songname")[0].innerText = songs[i].songname;

});
  


masterplay.addEventListener( 'click', ()=> {
    if(AudioElement.paused|| AudioElement.currentTime<=0){
        AudioElement.play();
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause'); 
    gif.style.opacity =1;}
    
    else{
        AudioElement.pause();
         masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');
        gif.style.opacity = 0;

    }
    
    
});

AudioElement.addEventListener('timeupdate',()=> {
    //console.log('timeupdate');

    progress = parseInt((AudioElement.currentTime/AudioElement.duration)*100);
    //console.log(progress);
    progressbar.value=progress;

    progressbar.addEventListener('change', ()=>{
        AudioElement.currentTime= (progressbar.value*AudioElement.duration)/100;
    })
})  

const playbutton = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((Element) => {
        Element.classList.remove('fa-pause');
        Element.classList.add('fa-play');
    })
}
    Array.from(document.getElementsByClassName('songitemplay')).forEach((Element)=>{
        Element.addEventListener('click', (e)=>{
            playbutton();
            
            songindex = parseInt(e.currentTarget.id);
            e.currentTarget.classList.remove('fa-play');
            e.currentTarget.classList.add('fa-pause');
            
            AudioElement.src =`song/s${songindex+1}.mp3`;
            mastersongname.innerText=songs[songindex].songname;
            AudioElement.currentTime=0;
            AudioElement.play();
            gif.style.opacity=1;
            masterplay.classList.remove('fa-play');
            masterplay.classList.add('fa-pause');
        });

}) ;

document.getElementById('next').addEventListener('click', ()=>{
    if(songindex>6){
        songindex = 0;

    }
    else{
        songindex += 1;

    }
     AudioElement.src =`song/s${songindex+1}.mp3`;
     mastersongname.innerText=songs[songindex].songname;
            AudioElement.currentTime=0;
            AudioElement.play();
            masterplay.classList.remove('fa-play');
            masterplay.classList.add('fa-pause');
})

document.getElementById('prev').addEventListener('click', ()=>{
    if(songindex<=0){
        songindex = 0;

    }
    else{
        songindex -= 1;

    }
     AudioElement.src =`song/s${songindex+1}.mp3`;
     mastersongname.innerText=songs[songindex].songname;
            AudioElement.currentTime=0;
            AudioElement.play();
            masterplay.classList.remove('fa-play');
            masterplay.classList.add('fa-pause');
})

  