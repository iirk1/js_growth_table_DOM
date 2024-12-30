'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const table = document.querySelector('tbody');

appendColumn.addEventListener('click', () => {
  if ([...table.rows[0].cells].length < 10) {
    appendColumn.setAttribute('enabled', true);

    [...table.rows].forEach((row) => {
      const cloneColumn = document.createElement('td');

      row.append(cloneColumn);
    });
  }

  if ([...table.rows[0].cells].length >= 10) {
    appendColumn.setAttribute('disabled', true);
  }

  if ([...table.rows[0].cells].length > 2) {
    removeColumn.removeAttribute('disabled', true);
  }
});

removeColumn.addEventListener('click', () => {
  if ([...table.rows[0].cells].length > 2) {
    [...table.rows].forEach((row) => {
      row.deleteCell(table.rows[0].cells.length - 1);
    });
  }

  if ([...table.rows[0].cells].length <= 2) {
    removeColumn.setAttribute('disabled', true);
  }

  if ([...table.rows[0].cells].length < 10) {
    appendColumn.removeAttribute('disabled', true);
  }
});

appendRow.addEventListener('click', () => {
  if ([...table.rows].length < 10) {
    table.append(table.rows[0].cloneNode(true));
  }

  if ([...table.rows].length >= 10) {
    appendRow.setAttribute('disabled', true);
  }

  if ([...table.rows].length > 2) {
    removeRow.removeAttribute('disabled', true);
  }
});

removeRow.addEventListener('click', () => {
  if ([...table.rows].length > 2) {
    table.deleteRow(table.rows[0]);
  }

  if ([...table.rows].length < 10) {
    appendRow.removeAttribute('disabled', true);
  }

  if ([...table.rows].length <= 2) {
    removeRow.setAttribute('disabled', true);
  }
});
