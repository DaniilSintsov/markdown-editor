export function copyToClipboard(text: string) {
  if (text.trim().length) {
    navigator.clipboard
      .writeText(text.trim())
      .then(() => {
        alert('Копирование в буфер обмена произошло успешно!');
      })
      .catch(err => {
        alert('Произошла ошибка при копировании в буфер обмена!');
        throw new Error(err);
      });
  } else {
    alert('Вы пытаетесь скопировать текст из пустого документа!');
  }
}
