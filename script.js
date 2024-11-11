function downloadResume() {
    const link = document.createElement('a');
    link.href = 'Resume.pdf'; // Ensure this path is correct
    link.download = 'JohnKakareka_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
window.onload = function() { 
    const popups = document.querySelectorAll('.popup'); 
    popups.forEach(popup => { 
        popup.style.display = 'flex'; 
    }); 
};
function closePopup(popupId) { 
    document.getElementById(popupId).style.display = 'none';}