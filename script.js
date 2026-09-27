const copyButton = document.querySelector('#copy-bib');
const copyStatus = document.querySelector('#copy-status');
copyButton?.addEventListener('click', async () => {
  const text = document.querySelector('#bibtex').textContent;
  try {
    await navigator.clipboard.writeText(text);
    copyButton.textContent = 'Copied';
    copyStatus.textContent = 'BibTeX copied to the clipboard.';
  } catch {
    copyStatus.textContent = 'Copy failed; select the BibTeX text instead.';
  }
  setTimeout(() => { copyButton.textContent = 'Copy'; }, 1600);
});

window.addEventListener('DOMContentLoaded', () => {
  if (typeof renderMathInElement === 'function') {
    renderMathInElement(document.querySelector('main'), {
      delimiters: [{ left: '\\[', right: '\\]', display: true }, { left: '\\(', right: '\\)', display: false }],
      throwOnError: false,
    });
  }
});
