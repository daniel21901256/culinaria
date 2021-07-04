function showSection(section) {
        fetch(`/sections/${section}`)
            .then(response => response.text()).then(text => document
            .querySelector('#content').innerHTML = text);
        }
        document.addEventListener('DOMContentLoaded', function() {
        document.querySelectorAll('#wally').forEach(a => {a.onclick = function() {
        showSection(this.dataset.section);
        alert("Parabens encontrou o Wally")
        document.querySelectorAll('svg').forEach(svg => {
        svg.style.display = 'none';
        });
        document.querySelectorAll('#titulo').forEach(div => {
        div.style.display = 'none';
        });
        document.querySelectorAll('#logo').forEach(section => {
        section.style.display = 'none';
        });
        };
    });
});