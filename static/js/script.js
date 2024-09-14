function copyCode(button) {
  const pre = button.parentNode;
  const code = pre.querySelector('code');
  navigator.clipboard.writeText(code.innerText).then(() => {
    button.textContent = 'Copied!';
    setTimeout(() => {
      button.textContent = 'Copy';
    }, 2000);
  }).catch(err => {
    console.error('Failed to copy', err);
  });
}

document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelectorAll('pre').forEach((block) => {
    if (block.querySelector('code')) {
      const button = document.createElement('button');
      button.textContent = 'Copy';
      button.className = 'copy-button';
      button.addEventListener('click', function() {
        copyCode(this);
      });
      block.insertBefore(button, block.firstChild);
    }
  });
});