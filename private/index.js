var div = document.createElement('div');
div.innerHTML = '<h1>Hello World</h1>';
document.body.appendChild(div);

div.style.position = 'absolute';
div.style.top = '50%';
div.style.left = '50%';
div.style.transform = 'translate(-50%, -50%)';

div.querySelector('input').addEventListener('inout', function(e) {
    var value = e.detail.value
    if (value.match(/^#[0-9a-f]{6}$/i)) {
        document.body.style.backgroundColor = value
    }else{
        document.body.style.backgroundColor = '#fff'
    }