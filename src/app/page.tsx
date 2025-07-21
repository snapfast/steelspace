import GalaxyBackground from '@/components/GalaxyBackground'
import CleanNavbar from '@/components/CleanNavbar'
import CleanHero from '@/components/CleanHero'

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <GalaxyBackground />
      <CleanNavbar />
      <CleanHero />
    </div>
  )
}