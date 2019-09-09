chrome.browserAction.onClicked.addListener(function() {
  //alert("Hello");

  var xhr = new XMLHttpRequest();
  var url = "https://cat-fact.herokuapp.com/facts/random";
  xhr.open("GET", url, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      var resp = JSON.parse(xhr.responseText);
      alert(resp.text);
    }
  }
  xhr.send();
});
