function downloadResume() {
    const link = document.createElement('a');
    link.href = 'reseme.pdf'; // Ensure this path is correct
    link.download = 'JohnKakareka_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
