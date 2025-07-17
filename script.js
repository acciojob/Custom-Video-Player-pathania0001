/* Edit this file */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
let isPlaying = true;


video.ontimeupdate = () => {
  if (!video.duration || isNaN(video.duration)) return;
  const percentage = ((video.currentTime / video.duration) * 100).toFixed(2) + "%";
  progressBar.style.width = percentage;
};
const handleToggle = ()=>{
		if(isPlaying){
	video.pause();
	isPlaying = false;
	}
	else{
	video.play();
	isPlaying = true;
	}
}

const handleRangeChange = (e)=>{
  if(e.target.name === "volume")
  {
     video.volume = e.target.value;
  }
  else
  {
     video.playbackRate = e.target.value;
  }
}
toggle.onclick = handleToggle;

 ranges.forEach((range)=>{
	 range.onclick = (e)=>{
		 handleRangeChange(e);
	 }
 })
 skipButtons.forEach((skipbtn)=>{
	 skipbtn.onclick = (e)=>{
		 video.currentTime += +(e.target.dataset.skip)
	 }
 })


