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
        // button.style.backgroundColor = 'var(--accent)';
    }
	else
	{
        video.muted = true;
		
        iconOff.style.display = 'block';
        iconOn.style.display = 'none';
        // button.style.backgroundColor = 'rgba(18, 18, 20, 0.75)';
    }
}