import React from 'react'

export interface ProjectItemProps {
  id: string
  header: string
  description: React.ReactElement
  githubLink?: string
  websiteLink?: string
  npmLink?: string
  image: string
}
