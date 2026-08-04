function toggleAudio(button, videoId)
{
    const video = document.getElementById(videoId);
    const iconOff = button.querySelector('.sound-off');
    const iconOn = button.querySelector('.sound-on');

    if (video.muted)
	{
        video.muted = false;
		
        iconOff.style.display = 'none';
        iconOn.style.display = 'block';
    }
	else
	{
        video.muted = true;
		
        iconOff.style.display = 'block';
        iconOn.style.display = 'none';
    }
}

function toggleProjects()
{
    const hiddenProjects = document.querySelectorAll('.project-card.hidden-project, .project-card.visible-project');
    const button = document.getElementById('show-more-btn');
    
    const isExpanding = button.innerText.includes('Show More');

    hiddenProjects.forEach(card => {
        if (isExpanding)
		{
            card.classList.remove('hidden-project');
            card.classList.add('visible-project');
        }
		else
		{
            card.classList.remove('visible-project');
            card.classList.add('hidden-project');
        }
    });

    if (isExpanding)
	{
        button.innerText = 'Show Less';
    }
	else
	{
        button.innerText = 'Show More';
		
        document.getElementById('soloProjects').scrollIntoView({ behavior: 'smooth' });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navLinks = document.getElementById('nav-links');
    const links = document.querySelectorAll('.nav-links a');

    hamburgerBtn.addEventListener('click', () => {
        hamburgerBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            hamburgerBtn.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
});