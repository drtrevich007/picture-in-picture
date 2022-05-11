const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//Promp user to select a media stream
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.scrObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        //Catch error
        console.log('Oopsie! There is an error! Here is your error: ', error);
    }
}

button.addEventListener('click', async () => {
    // Disable button
    button.disabled = true;
    // Start PIP
    await videoElement.requestPictureInPicture();
    // Reset button
    button.disabled = false;
});
//On load
selectMediaStream();