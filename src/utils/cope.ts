/**
 * @description 复制文字
 * @param text
 */
export function copyTextToClipboard(text: string): void {
  const textArea = document.createElement('textarea')
  textArea.value = text

  // 阻止聚焦并将 textarea 添加到 DOM 中
  textArea.style.position = 'fixed'
  document.body.appendChild(textArea)

  // 选择并复制文本
  textArea.select()
  document.execCommand('copy')

  // 移除 textarea
  document.body.removeChild(textArea)
}
