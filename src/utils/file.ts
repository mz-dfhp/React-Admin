/**
 * @description base64 转 file
 * @param base64
 * @param fileName
 * @return
 */
export function base64ToFile(base64: string, fileName: string) {
  const arr = base64.split(',')
  const mime = arr[0].match(/:(.*?);/)![1]
  const bstr = atob(arr[1])
  let n = bstr.length
  const u8arr = new Uint8Array(n)
  while (n--)
    u8arr[n] = bstr.charCodeAt(n)

  return new File([u8arr], fileName, { type: mime })
}

/**
 * @description 下载文件
 * @param url 图片链接
 * @param fileName 文件名
 */
export function downloadFile(url: string | URL, fileName: string) {
  const xhr = new XMLHttpRequest()
  xhr.open('GET', url, true)
  xhr.responseType = 'blob'
  xhr.onload = function () {
    if (xhr.status === 200) {
      const blob = new Blob([xhr.response], { type: xhr.getResponseHeader('content-type') as string })
      const link = document.createElement('a')
      link.href = window.URL.createObjectURL(blob)
      link.download = fileName || 'downloaded_file'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }
  xhr.send()
}
