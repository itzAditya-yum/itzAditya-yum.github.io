document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}

document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}

// Automatic sliding
setInterval(function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}, 3000); // Adjust the time (in milliseconds) for slide duration

// Background music controls (optional)
document.getElementById('bg-music').volume = 0.9; // Adjust the volume (0.0 to 1.0)
