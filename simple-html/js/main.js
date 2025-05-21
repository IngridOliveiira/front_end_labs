linkExterno.addEventListener('click', (e) => {
    const option = 
            confirm("Você será redirecionado para um link externo.");
    if (option === false) {
            e.preventDefault();
    }
});