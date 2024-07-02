const messages = [
    "Jangan lupa makan siang ya",
    "Makan makanan yang sehat dan habiskan ya",
    "Jangan nakal-nakal dan jaga kesehatan ya",
    "I Love You So Much🥰😍😘👩‍❤️‍👨🍃🌟"
];

let currentMessageIndex = 0;

function nextMessage() {
    currentMessageIndex++;
    if (currentMessageIndex < messages.length) {
        document.getElementById('message').innerText = messages[currentMessageIndex];
    } else {
        document.getElementById('message').innerText = "I Love You So Much";
    }
}
