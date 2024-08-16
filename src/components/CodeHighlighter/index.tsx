import { useEffect, useState } from 'react'
import { codeToHtml } from 'shiki'
import './index.scss'

function CodeHighlighter({ code, language }: { code: string, language?: string }) {
  const [html, setHtml] = useState('')

  useEffect(() => {
    (async () => {
      const html = await codeToHtml(code, {
        lang: 'tsx',
        themes: {
          light: 'github-light',
          dark: 'github-dark',
        },
      })
      setHtml(html)
    })()
  }, [code, language])

  return (
    // eslint-disable-next-line react-dom/no-dangerously-set-innerhtml
    <div dangerouslySetInnerHTML={{ __html: html }} />
  )
}

export default CodeHighlighter
