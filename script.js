// JavaScript to show a tooltip or more info on hover
document.querySelectorAll('.team-member').forEach(member => {
    member.addEventListener('mouseenter', () => {
        member.style.transform = 'scale(1.05)';
    });
    member.addEventListener('mouseleave', () => {
        member.style.transform = 'scale(1)';
    });
});
