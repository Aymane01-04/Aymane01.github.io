document.getElementById('formcontact').addEventListener('submit',function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert("formulaire soumis avec succés  !");
        document.getElementById('formmessage').textContent = "Merci , votre message a été envoyer. ";
        this.reset();
        } else {
            alert("veuillez remplir tous les champs");
            }
            });
        