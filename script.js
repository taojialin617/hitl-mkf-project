'use strict';
const dialog = document.querySelector('#figure-dialog');
document.querySelectorAll('[data-image]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('#enlarged-figure').src = button.dataset.image;
    dialog.showModal();
  });
});
document.querySelector('#close-figure').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
});
const bibtex = window.PAPER.bibtex;
document.querySelector('#bibtex').textContent = bibtex;
document.querySelector('#copy-citation').addEventListener('click', async event => {
  const button = event.currentTarget;
  const status = document.querySelector('#copy-status');
  try {
    await navigator.clipboard.writeText(bibtex);
    button.textContent = 'Copied ✓';
    status.textContent = 'Citation copied to clipboard.';
  } catch {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(document.querySelector('#bibtex'));
    selection.removeAllRanges();
    selection.addRange(range);
    button.textContent = 'Select & copy';
    status.textContent = 'Citation selected. Press Control+C or Command+C to copy.';
  }
  setTimeout(() => { button.textContent = 'Copy'; }, 2500);
});
