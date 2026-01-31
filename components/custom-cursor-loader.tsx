'use client'

import dynamic from 'next/dynamic'

// Client-side loader so we can keep the fancy cursor hydrated only in the browser
const CustomCursor = dynamic(
  () =>
    import('./custom-cursor').then((mod) => ({
      default: mod.CustomCursor,
    })),
  {
    ssr: false,
    loading: () => null,
  }
)

export default function CustomCursorLoader() {
  return <CustomCursor />
}
