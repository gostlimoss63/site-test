fetch('content.html')
    .then(response => response.text())
    .then(data => {document.getElementById('content')
        .innerHTML = data;});

fetch('sidebar.html')
    .then(response => response.text())
    .then(data => {document.getElementById('sidebar')
        .innerHTML = data;});

fetch('footer.html')
    .then(response => response.text())
    .then(data => {document.getElementById('footer')
        .innerHTML = data;});
