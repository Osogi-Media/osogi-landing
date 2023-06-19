import { Article, ArticleContent, ArticleMedia } from '@/components/article'
import { Layout } from '@/components/layout'

export default function AboutPage() {
  return (
    <Layout>
      <Article>
        <ArticleContent title="About">
          {/* prettier-ignore */}
          <p>
            Osogi is a platform that helps rental owners find great products for their properties. When renters make a purchase they learned about through the property, owners get an affiliate kick-back! Reach out to info@osogimedia.com for more information.
          </p>
        </ArticleContent>

        <ArticleMedia>
          <img
            alt="Lorem Picsum"
            className="mx-auto lg:aspect-[5/7] lg:w-full"
            width="420"
            height="640"
            src="https://picsum.photos/420/640?grayscale"
          />
        </ArticleMedia>
      </Article>
    </Layout>
  )
}
