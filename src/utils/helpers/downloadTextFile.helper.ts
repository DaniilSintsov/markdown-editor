export function downloadTextFile(text: string) {
  if (text.trim().length) {
    const element = document.createElement('a');
    element.setAttribute(
      'href',
      'data:text/plain;charset=utf-8,' + encodeURIComponent(text.trim())
    );
    element.setAttribute('download', 'markdown.md');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }
}
