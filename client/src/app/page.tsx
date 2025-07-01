"use client"
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const Page = () => {
  const router = useRouter()

  useEffect(() => {
    router.push('/signin')
  }, [router])

  return null
}

export default Page