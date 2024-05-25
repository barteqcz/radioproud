function sendSuggestion() {
    let form = document.getElementById("addStation");
    let alert = document.getElementById("alert-box")
    let alert2 = document.getElementById("alert-box2")

    if (form.newStationName.value.length == 0 ) {
        alert2.style.visibility = 'hidden';
        alert.style.visibility = 'visible';
        setTimeout(() => {
            alert.style.visibility = 'hidden';
          }, 6000);
    } else {
        console.log("Station name:", form.newStationName.value);
        console.log("Station website:", form.newStationWebSite.value);
        console.log("Station stream:", form.newStationWebStream.value);
        alert.style.visibility = 'hidden';
        alert2.style.visibility = 'visible';
        setTimeout(() => {
            alert2.style.visibility = 'hidden';
          }, 6000);
    }
}
