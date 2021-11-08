function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function loggedIn(){
  return fetch("https://server.cu3t0m.repl.co/account", {
    credentials: 'include',
  })
}
function findUnread(n){
  var a = 0
  for(var i=0; i<n.length; i++){
    if(!n[i].read) a++
  }
  if(a > 0) return a
}

var el = document.getElementById("loggedIn")
var notifs = document.getElementById("notifs")
notifs.style.display = "none"
loggedIn().then(data => {
  data.json().then(r => {
    var logged = typeof r === "object" ? r.username : null
    if(el && logged){
      el.innerHTML = logged
      el.href = "/account"
      notifs.style.display = ""
      if(r.notifs){
        var amount = findUnread(r.notifs)
        notifs.innerHTML += amount ? (" ("+amount+")") : ""
      }
      if(r.admin){
        document.querySelector("#adminNav").innerHTML = `
<a href="/website/admin/users.html">Users</a>
`
      }
    }
  })
}).catch(console.log)
/*
var logged = getCookie("username")
if(logged){
  el.innerHTML = logged
}*/