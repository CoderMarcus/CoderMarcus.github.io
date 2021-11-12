function checkPassword()
{
  var textBox = document.getElementById('password');
    var text = textBox.value;
    if(text == "yesdaddy")
    {
        window.location.href = "https://marcus5408.github.io/private/index.html";
    }
    else
    {
        alert("Incorrect Password");
    }
}