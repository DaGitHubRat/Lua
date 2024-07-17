document.getElementById("yesButton").onclick = function() {
    window.location.href = "https://www.youtube.com/watch?v=sV_p2G8Tkus";
};

document.getElementById("noButton").onclick = function() {
    moveButton();
};

function moveButton() {
    const button = document.getElementById("noButton");
    const container = document.querySelector('body');
    
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;
    
    const newLeft = Math.random() * (containerWidth - buttonWidth);
    const newTop = Math.random() * (containerHeight - buttonHeight);

    console.log(`newLeft: ${newLeft}, newTop: ${newTop}`);

    button.style.left = newLeft + 'px';
    button.style.top = newTop + 'px';
}
