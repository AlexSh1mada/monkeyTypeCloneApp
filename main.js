const $time = document.querySelector('time');
const $paragraph = document.querySelector('p');
const $input = document.querySelector('input');

const INITIAL_TIME = 30;

const TEXT = 'the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog';

let words = []
let currentTime = INITIAL_TIME;


initGame()
initEvents()
function initGame() {
    words = TEXT.split(' ').slice(0, 32)
    currentTime = INITIAL_TIME;

    $time.textContent = currentTime;
    $paragraph.innerHTML = words.map((word, index) => {
        const letters = word.split('')

        return `<word>
            ${letters
                .map(letter => `<letter>${letter}</letter>`)
                .join('')
            }
        </word>
        `
    }).join('')
}
function initEvents() {}