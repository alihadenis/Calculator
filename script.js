let display=document.getElementById('result');

function clickk(char) {
    display.value += char;
}
function hapus() {
    display.value = display.value.slice(0, -1);
}
function resett(){
    display.value = "";
}
function jumlahkanh() {
    try {
        display.value = eval(display.value.replace(',', '.').replace('x','*'));
    } catch (e) {
        display.value = 'Error';
    }
}
document.getElementById('result').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Mencegah form dikirim
        jumlahkanh(); // Memanggil fungsi calculate
    }
});