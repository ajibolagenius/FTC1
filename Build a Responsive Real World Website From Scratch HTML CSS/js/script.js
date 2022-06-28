// toggle class on click function

function toggleClassName() {
    const sidebar = document.querySelector('.sidebar');
    const wrapper = document.querySelector('.wrapper');
    const toggle = document.querySelector('.toggle');
    sidebar.classList.toggle('active');
    wrapper.classList.toggle('active');
    toggle.classList.toggle('active');
}
    
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});
