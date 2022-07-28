export async function getNewFileHandle() {
  if ('showSaveFilePicker' in window) {
    const opts = {
      types: [{
        description: 'Markdown file',
        accept: {'text/markdown': ['.md']},
      }],
    }
    return await window.showSaveFilePicker(opts)
  }
}

export async function downloadFile(fileHandle, data) {
  const writable = await fileHandle.createWritable()
  await writable.write(data)
  await writable.close()
}
