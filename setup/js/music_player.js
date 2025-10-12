// Example song data, now with albumArt
const songs = [
    {
        title: 'am i evil',
        album: 'Old',
        src: '/content/music/am i evil.wav',
    },
    // Add more songs with albumArt and description property
];

// Get unique albums and their art
const albums = [...new Set(songs.map(s => s.album))];
songs.forEach(song => {
    if (!albumArts[song.album] && song.albumArt) albumArts[song.album] = song.albumArt;
});

const albumSelect = document.getElementById('albumSelect');
const shuffleBtn = document.getElementById('shuffleBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentSongIdx = null;

albums.forEach(album => {
    const opt = document.createElement('option');
    opt.value = album;
    opt.textContent = album;
    albumSelect.appendChild(opt);
});

function showSongs(album) {
    const list = document.getElementById('songList');
    list.innerHTML = '';
    const filtered = songs.filter(s => s.album === album);
    filtered.forEach((song, idx) => {
        const li = document.createElement('li');
        li.textContent = song.title;
        li.onclick = () => {
            document.querySelectorAll('#songList li').forEach(el => el.classList.remove('active'));
            li.classList.add('active');
            document.getElementById('audioPlayer').src = song.src;
            document.getElementById('audioPlayer').play();
            currentSongIdx = idx;
        };
        list.appendChild(li);
    });
    currentSongIdx = null;
}

albumSelect.onchange = e => showSongs(e.target.value);
showSongs(albums[0]);

// Shuffle functionality
shuffleBtn.onclick = function() {
    const album = albumSelect.value;
    const filtered = songs.filter(s => s.album === album);
    if (filtered.length === 0) return;
    const idx = Math.floor(Math.random() * filtered.length);
    const song = filtered[idx];
    document.getElementById('audioPlayer').src = song.src;
    document.getElementById('audioPlayer').play();
    document.querySelectorAll('#songList li').forEach((el, i) => {
        el.classList.toggle('active', i === idx);
    });
    currentSongIdx = idx;
};

prevBtn.onclick = function() {
    const album = albumSelect.value;
    const filtered = songs.filter(s => s.album === album);
    if (!filtered.length) return;
    if (currentSongIdx === null) {
        currentSongIdx = 0;
    } else {
        currentSongIdx = (currentSongIdx - 1 + filtered.length) % filtered.length;
    }
    const song = filtered[currentSongIdx];
    document.getElementById('audioPlayer').src = song.src;
    document.getElementById('audioPlayer').play();
    document.querySelectorAll('#songList li').forEach((el, i) => {
        el.classList.toggle('active', i === currentSongIdx);
    });
};

nextBtn.onclick = function() {
    const album = albumSelect.value;
    const filtered = songs.filter(s => s.album === album);
    if (!filtered.length) return;
    if (currentSongIdx === null) {
        currentSongIdx = 0;
    } else {
        currentSongIdx = (currentSongIdx + 1) % filtered.length;
    }
    const song = filtered[currentSongIdx];
    document.getElementById('audioPlayer').src = song.src;
    document.getElementById('audioPlayer').play();
    document.querySelectorAll('#songList li').forEach((el, i) => {
        el.classList.toggle('active', i === currentSongIdx);
    });
};

// ...existing code...
li.onclick = () => {
    document.querySelectorAll('#songList li').forEach(el => el.classList.remove('active'));
    li.classList.add('active');
    document.getElementById('audioPlayer').src = song.src;
    document.getElementById('audioPlayer').play();
    document.getElementById('songDescription').textContent = song.description || '';
};
// ...existing code...Ma