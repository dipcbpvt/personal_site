'use client'

import React from 'react'
import dynamic from 'next/dynamic'

// Use dynamic import for the preloader to keep the initial bundle small
const Preloader = dynamic(() => import('@/components/preloader').then(mod => ({ default: mod.Preloader })), {
    ssr: true,
})

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Preloader />
            {children}
        </>
    )
}
