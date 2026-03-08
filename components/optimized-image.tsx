import Image, { ImageProps } from "next/image"
import { CSSProperties } from "react"

interface OptimizedImageProps extends Omit<ImageProps, "src"> {
  src: string
  lazy?: boolean
  blur?: boolean
  customStyle?: CSSProperties
}

/**
 * Optimized Image Component with Next.js Image, lazy loading, and blur placeholder support
 */
export function OptimizedImage({
  src,
  alt,
  lazy = true,
  blur = true,
  customStyle,
  priority = false,
  sizes,
  ...props
}: OptimizedImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      priority={priority}
      loading={lazy && !priority ? "lazy" : "eager"}
      quality={85}
      style={{
        maxWidth: "100%",
        height: "auto",
        ...customStyle,
      }}
      sizes={sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
      placeholder={blur ? "empty" : undefined}
      {...props}
    />
  )
}
