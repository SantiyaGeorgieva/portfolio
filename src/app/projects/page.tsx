import { Metadata } from 'next'
import ProjectsComponent from '../components/ProjectsComponent'

export const metadata: Metadata = {
  title: 'Santiya Georgieva – Projects'
}

export default function Projects() {
  return (
    <ProjectsComponent />
  )
}