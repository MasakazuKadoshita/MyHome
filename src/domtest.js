window.onload = domtests();
function domtests() {
  document.getElementById('Ellamae').innerHTML = 'Ellamae';
  document.getElementById('Brant').innerHTML = 'Brant';
  document.getElementById('Ellan').innerHTML = 'Ellan';
  document.getElementById('Rashida').innerHTML = 'Rashida';

  let managers = document.getElementsByClassName('managers');
  let members = document.getElementsByClassName('members');
  let shareholders = document.getElementsByClassName('shareholders');

  for (let mngi = 0; mngi < managers.length; mngi++) {
    let manager = managers[mngi];
    if (!manager.id) {
      manager.innerHTML += '(NEW Manager' + (mngi + 1) + ')';
    } else {
      manager.innerHTML += ':Manager';
    }
    console.log(manager.innerHTML);
  }

  for (let mmbi = 0; mmbi < members.length; mmbi++) {
    let member = members[mmbi];
    if (!member.id) {
      member.innerHTML += '(NEW Member' + (mmbi + 1) + ')';
    } else {
      member.innerHTML += ':Member';
    }
  }

  for (let si = 0; si < shareholders.length; si++) {
    let shareholder = shareholders[si];
    if (!shareholder.id) {
      shareholder.innerHTML += '(NEW Shareholder' + (si + 1) + ')';
    } else {
      shareholder.innerHTML += '[shareholder]';
    }
  }
}