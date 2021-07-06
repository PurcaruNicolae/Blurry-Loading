let loading = document.querySelector('.loading-text');
let bg = document.querySelector('.bg');

let blury = 0;

let int = setInterval(blurring, 30);

function blurring() {
    blury++;
    if (blury > 99) {
        clearInterval(int);
    }
    console.log(blury);
    loading.innerText = `${blury}%`;
    loading.style.opacity = scale(blury, 0, 100, 0, 1);
    bg.style.filter = `blur(${scale(blury, 0, 100, 30, 0)}px)`;

}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}