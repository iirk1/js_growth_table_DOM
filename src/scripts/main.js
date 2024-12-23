'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const table = document.querySelector('tbody');

appendColumn.addEventListener('click', () => {
  if ([...table.rows[0].cells].length < 10) {
    [...table.rows].forEach((row) => {
      const cloneColumn = document.createElement('td');

      row.append(cloneColumn);
    });
  }
});

removeColumn.addEventListener('click', () => {
  if ([...table.rows[0].cells].length > 2) {
    [...table.rows].forEach((row) => {
      row.deleteCell(table.rows[0].cells.length - 1);
    });
  }
});

appendRow.addEventListener('click', () => {
  if ([...table.rows].length < 10) {
    table.append(table.rows[0].cloneNode(true));
  }
});

removeRow.addEventListener('click', () => {
  if ([...table.rows].length > 2) {
    table.deleteRow(table.rows[0]);
  }
});
