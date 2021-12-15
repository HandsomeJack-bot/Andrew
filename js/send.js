function sendMail()
{
    var body = document.getElementById("messagebox").value;
    window.location.href = "mailto:asmirn02@yandex.ru?subject=&body="+body;
}
