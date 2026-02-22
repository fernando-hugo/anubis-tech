"use client"

import { Suspense, lazy } from "react"

const Spline = lazy(() => import("@splinetool/react-spline"))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center bg-black">
            <div className="w-10 h-10 border-2 border-amber-500 border-t-transparent rounded-full animate-spin" />
          </div>
        }
      >
        <Spline scene={scene} />
      </Suspense>
    </div>
  )
}