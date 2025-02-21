const btn = document.querySelector('.btnDari');

btn.addEventListener('click', function (event) {
    event.preventDefault();
    btn.style.backgroundColor = "yellow";
    console.log('Helloooo!');
    const form = document.querySelector('#my-form');
    if (form) {
        form.style.background = 'red';
    }
    document.body.classList.add('bg-dark');
    const items = document.querySelector('.ulListDari');
    if (items && items.children.length > 0) {
        items.lastElementChild.innerHTML = '<h1>Hello</h1>';
    }
});

const Datest = document.getElementById("Dtest");
if (Datest) {
    Datest.addEventListener("input", adding);
}

function adding() {
    var one = Datest.value;
    console.log(one);
}
