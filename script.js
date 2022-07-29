console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterArtName = document.getElementById('masterArtName');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let artitems = Array.from(document.getElementsByClassName('nomeArtista'));

let songs = [
    {songName: "EP 01 - Fernando Pessoa", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "EP 02 - Graciliano Ramos", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "EP 03 - Jorge Amado", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "EP 04 - Rachel de Queiroz", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "EP 05 - Carlos Drummond de Andrade", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "EP 06 - Cecília Meireles", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
    {songName: "EP 07 - Vinícius de Morais", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"}
]

let desc = [
    {artName: "\nFernando António Nogueira Pessoa foi um poeta, filósofo, dramaturgo, ensaísta, tradutor, \npublicitário, astrólogo, inventor, empresário, correspondente comercial, crítico literário e comentarista político português.\n Fernando Pessoa é o mais universal poeta português.", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {artName: "\nGraciliano Ramos de Oliveira foi um romancista, cronista, contista, jornalista, político e memorialista brasileiro do século XX, mais conhecido por sua obra Vidas Secas.\n Nascido numa grande família de classe média, viveu os primeiros anos de sua infância migrando para diversas cidades da Região Nordeste do Brasil.", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {artName: "\nJorge Leal Amado de Faria ou apenas Jorge Amado foi um dos mais famosos e traduzidos escritores brasileiros de todos os tempos.\n Jorge Amado é o autor mais adaptado do cinema, do teatro e da televisão", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {artName: "\nRachel de Queiroz foi uma tradutora, romancista, escritora, jornalista, cronista prolífica e importante dramaturga brasileira.\n Autora de destaque na ficção social nordestina, foi a primeira mulher a ingressar na Academia Brasileira de Letras em 1977, foi a primeira mulher galardoada com o Prêmio Camões.", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {artName: "\nCarlos Drummond de Andrade foi poeta, contista e cronista brasileiro do período do modernismo. Considerado um dos maiores escritores do Brasil, Drummond fez parte da segunda geração modernista.\n Foi precursor da chamada 'poesia de 30' com a publicação da obra 'Alguma Poesia'.", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {artName: "\nCecília Meireles foi uma das grandes escritoras da literatura brasileira no século XX. Seus poemas encantam os leitores de todas as idades. É considerada uma das principais escritoras da Segunda Fase do Modernismo brasileiro.\n Sua principal obra foi Romanceiro da Inconfidência, publicada em 1953.", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
    {artName: "\nVinicius de Moraes, nascido Marcus Vinícius da Cruz de Mello Moraes, foi um poeta, dramaturgo, jornalista, diplomata, cantor e compositor brasileiro.\n Poeta essencialmente lírico, o que lhe renderia o apelido 'Poetinha', que lhe teria atribuído Tom Jobim, notabilizou-se pelos seus sonetos.", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"}

]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        artIndex = parseInt(e.target.id);
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        audioElement.src = `songs/${artIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        masterArtName.innerText = desc[artIndex].artName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9 && artIndex>=9){
        songIndex = 0;
        artIndex = 0;
    }
    else{
        songIndex += 1;
        artIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.src = `songs/${artIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    masterArtName.innerText = desc[artIndex].artName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
if(songIndex>=9 && artIndex>=9){
        songIndex = 0;
        artIndex = 0;
    }
    else{
        songIndex += 1;
        artIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.src = `songs/${artIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    masterArtName.innerText = desc[artIndex].artName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})