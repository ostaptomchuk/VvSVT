alert( document.head.innerHTML );
var variant  = 15;
var name = 'OSTAPKO';
var elem = document.getElementById('list-header');
elem.innerHTML = '<b>' + elem.textContent + ' ' + variant + '</b>';
document.getElementsByTagName("li")[1].innerHTML = name;
document.getElementsByTagName("ul")[0].style.color = '#555';
