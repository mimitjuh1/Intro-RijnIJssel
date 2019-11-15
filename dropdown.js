function clickDropdownDocenten () {
  var table = document.getElementById('docenten_table');
  var table_class = table.getAttribute('class');

  var entry_list = table.getElementsByTagName('tr');
  var count = 0;

  for (var i = 2; i < entry_list.length; i++) {
    count++;
    if (count > 2) {
      if (table_class.slice(11, table_class.length) === 'open') {
        entry_list[i].style.display = 'none';
      } else if (table_class.slice(11, table_class.length) === 'closed') {
        entry_list[i].style.display = 'table-row';
      }
    }
  }

  if (table_class.slice(11, table_class.length) === 'open') {
    table.removeAttribute('class');
    table.setAttribute('class', 'box-shadow closed');
    document.getElementById('doc_button').innerHTML = 'keyboard_arrow_down';
  } else if (table_class.slice(11, table_class.length) === 'closed') {
    table.removeAttribute('class');
    table.setAttribute('class', 'box-shadow open');
    document.getElementById('doc_button').innerHTML = 'keyboard_arrow_up';
  };
}

function clickDropdownStagiaires() {
  var table = document.getElementById('stagiaires_table');
  var table_class = table.getAttribute('class');

  var entry_list = table.getElementsByTagName('tr');
  var count = 0;

  for (var i = 2; i < entry_list.length; i++) {
    count++;
    if (count > 2) {
      if (table_class.slice(11, table_class.length) === 'open') {
        entry_list[i].style.display = 'none';
      } else if (table_class.slice(11, table_class.length) === 'closed') {
        entry_list[i].style.display = 'table-row';
      }
    }
  }

  if (table_class.slice(11, table_class.length) === 'open') {
    table.removeAttribute('class');
    table.setAttribute('class', 'box-shadow closed');
    document.getElementById('sta_button').innerHTML = 'keyboard_arrow_down';
  } else if (table_class.slice(11, table_class.length) === 'closed') {
    table.removeAttribute('class');
    table.setAttribute('class', 'box-shadow open');
    document.getElementById('sta_button').innerHTML = 'keyboard_arrow_up';
  };
}
