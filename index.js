function addingEventListener() {
  const input = document.getElementById('button');

  function clickAlert() {
    alert('I was clicked!');
  }

  input.addEventListener('click', clickAlert);
}

// Call the function so it runs when the page loads
addingEventListener();
