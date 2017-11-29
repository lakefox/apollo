function ap() {
  fetch("https://blockchain.info/ticker").then((res) => {
    return res.json();
  }).then((data) => {
    var e = document.querySelectorAll('ap');
    for (var i = 0; i < e.length; i++) {
      var html = e[i].getAttribute("html");
      if (!html) {
        e[i].setAttribute("html", e[i].innerHTML);
        html = e[i].getAttribute("html");
      }
      html = html.split(" ");
      var currency = html[1];
      var price = data[currency].last;
      console.log((html));
      e[i].innerHTML = parseInt(parseInt(html[0])/price).toString()+"."+(parseInt(html[0])/price).toString().split(".")[1].slice(0,8) +" BTC";
    }
  });
}
ap();
setInterval(ap,120000);
