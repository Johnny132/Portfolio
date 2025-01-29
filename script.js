document.addEventListener('DOMContentLoaded', () => {
    // Sample Data - Replace with your information
    const projects = [
        {
            title: 'Project 1',
            description: 'A detailed description of project 1. This project demonstrates...',
            link: '#',
            current: true
        },
        {
            title: 'Project 2',
            description: 'A detailed description of project 2. This project showcases...',
            link: '#',
            current: false
        },
    ];

    const experience = [
        {
            company: "Company Name",
            position: "Job Position",
            duration: "Jan 2020 - Present",
            description: "Description of your responsibilities and achievements"
        },
    ];

    const education = [
        {
            institution: "University Name",
            degree: "Degree Name",
            duration: "2016 - 2020",
            achievements: "Relevant achievements or coursework"
        },
    ];

    const certifications = [
        {
            name: "Certification Name",
            issuer: "Issuing Organization",
            date: "Jan 2023",
            credentialLink: "#"
        },
    ];

    // DOM Elements
    const currentProjectsGrid = document.querySelector('.current-projects .project-grid');
    const allProjectsGrid = document.querySelector('.all-projects .project-grid');
    const timeline = document.querySelector('.timeline');
    const educationGrid = document.querySelector('.education-grid');
    const certsGrid = document.querySelector('.certs-grid');
    const modal = document.getElementById('projectModal');
    const closeBtn = document.querySelector('.close');

    // Generate Project Cards
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description.substring(0, 100)}...</p>
        `;

        card.addEventListener('click', () => openModal(project));

        if (project.current) {
            currentProjectsGrid.appendChild(card);
        } else {
            allProjectsGrid.appendChild(card);
        }
    });

    // Generate Experience
    experience.forEach(exp => {
        const item = document.createElement('div');
        item.className = 'timeline-item';
        item.innerHTML = `
            <h3>${exp.position}</h3>
            <h4>${exp.company}</h4>
            <p class="duration">${exp.duration}</p>
            <p>${exp.description}</p>
        `;
        timeline.appendChild(item);
    });

    // Generate Education
    education.forEach(edu => {
        const card = document.createElement('div');
        card.className = 'education-card';
        card.innerHTML = `
            <h3>${edu.institution}</h3>
            <p>${edu.degree}</p>
            <p class="duration">${edu.duration}</p>
            <p>${edu.achievements}</p>
        `;
        educationGrid.appendChild(card);
    });

    // Generate Certifications
    certifications.forEach(cert => {
        const card = document.createElement('div');
        card.className = 'cert-card';
        card.innerHTML = `
            <h3>${cert.name}</h3>
            <p>${cert.issuer}</p>
            <p class="date">${cert.date}</p>
            <a href="${cert.credentialLink}" target="_blank">View Credential</a>
        `;
        certsGrid.appendChild(card);
    });

    // Modal Functions
    function openModal(project) {
        document.getElementById('modalTitle').textContent = project.title;
        document.getElementById('modalDescription').textContent = project.description;
        document.getElementById('modalLink').href = project.link;
        modal.style.display = 'block';
    }

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Scroll Animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const cards = entry.target.querySelectorAll('.project-card, .timeline-item, .education-card, .cert-card');
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.opacity = '1';
                    }, index * 200);
                });
            }
        });
    });

    document.querySelectorAll('[data-animation="true"]').forEach(section => {
        observer.observe(section);
    });

    // Smooth Scroll
// Update the smooth scroll implementation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
})