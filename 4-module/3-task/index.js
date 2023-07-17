function highlight(table) {
  let rows = table.rows;
  for (let i = 1; i < rows.length; i++) {
    let dataAvailableValue = rows[i].cells[3].getAttribute('data-available');
    if (dataAvailableValue === null) {
      rows[i].setAttribute('hidden', true);
    } else {
      (dataAvailableValue === 'true') ? rows[i].classList.add('available') : rows[i].classList.add('unavailable');
    }

    let genderValue = rows[i].cells[2].innerHTML;
    (genderValue === 'm') ? rows[i].classList.add('male') : rows[i].classList.add('female')
    console.log(rows[i].classList);

    let ageValue = rows[i].cells[1].innerHTML;
    if (ageValue < 18) {
      rows[i].style = "text-decoration: line-through"
    }
  };
}
