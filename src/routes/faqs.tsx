import { Article, ArticleContent, ArticleMedia } from '@/components/article'
import { Layout } from '@/components/layout'

export default function FaqsPage() {
  return (
    <Layout>
      <Article>
        <ArticleContent title="FAQ's">
          <p>Nada at the moment</p>
          <details
            className="mt-4 block rounded-sm border px-4 open:border-primary-400 hover:border-primary-300"
            open
          >
            <summary className="-mx-4 cursor-pointer border-primary-200 py-3 px-4">
              What is Osogi Media? Check back in September
            </summary>


          </details>

        </ArticleContent>


      </Article>
    </Layout>
  )
}
