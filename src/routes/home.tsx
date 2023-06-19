import { Hero } from '@/components/hero'
import { HeroIllustration } from '@/components/hero-illustration'
import { Layout } from '@/components/layout'

export default function HomePage() {
  return (
    <Layout>
      <Hero
        title="Osogi Media"
        content="You're early to the party. Check back in with us in September 2023!"
        illustration={<HeroIllustration />}
      />
    </Layout>
  )
}
