function clearCode(language) {
    document.getElementById(`${language}-code`).value = '';
    updateOutput();
  }
  
  function copyCode(language) {
    const code = document.getElementById(`${language}-code`);
    code.select();
    document.execCommand('copy');
  }
  
  function expandCode(language) {
    const codeContainers = document.querySelectorAll('.code-container');
    const outputContainer = document.getElementById('output-container');
  
    codeContainers.forEach(container => {
      if (container.id === `${language}-container`) {
        container.classList.add('expanded');
        container.classList.add('restore-button-visible');
      } else {
        container.classList.remove('expanded');
        container.classList.remove('restore-button-visible');
      }
    });
  
    if (language === 'html') {
      outputContainer.style.height = 'calc(100% - 150px)';
    } else {
      outputContainer.style.height = '100%';
    }
  }
  
  
  function restoreCode(language) {
    const codeContainer = document.getElementById(`${language}-container`);
    const outputContainer = document.getElementById('output-container');
  
    codeContainer.classList.remove('expanded');
    codeContainer.classList.remove('restore-button-visible');
    outputContainer.style.height = '100%';
  }
  
  function updateOutput() {
    const htmlCode = document.getElementById('html-code').value;
    const cssCode = document.getElementById('css-code').value;
    const jsCode = document.getElementById('js-code').value;
    const output = document.getElementById('output').contentDocument;
  
    output.open();
    output.write(`
      <html>
        <head>
          <style>${cssCode}</style>
        </head>
        <body>${htmlCode}</body>
        <script>${jsCode}</script>
      </html>
    `);
    output.close();
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    ['html', 'css', 'js'].forEach(language => {
      const codeContainer = document.getElementById(`${language}-container`);
      codeContainer.addEventListener('click', () => expandCode(language));
  
      const restoreButton = codeContainer.querySelector('button[onclick^="restoreCode"]');
      restoreButton.style.display = 'none'; // Initially hide the restore button
  
      restoreButton.addEventListener('click', () => restoreCode(language));
  
      const savedCode = localStorage.getItem(`${language}-code`);
      if (savedCode) {
        document.getElementById(`${language}-code`).value = savedCode;
      }
    });
  
    updateOutput();
  });
  
  document.getElementById('editor-container').addEventListener('input', (event) => {
    if (event.target.tagName === 'TEXTAREA') {
      const language = event.target.id.split('-')[0];
      localStorage.setItem(`${language}-code`, event.target.value);
    }
  });
  