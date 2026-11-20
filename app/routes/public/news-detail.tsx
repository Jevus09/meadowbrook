import { Container } from '@/components/common/Container'
import { PageHero } from '@/components/common/PageHero'
import { newsPosts } from '@/data/mock/news'
import type { Route } from './+types/news-detail'
export function loader({ params }: Route.LoaderArgs) {
  const post = newsPosts.find((p) => p.slug === params.slug)
  if (!post) throw new Response('Not Found', { status: 404 })
  return { post }
}
export default function NewsDetail({ loaderData }: Route.ComponentProps) {
  return (
    <>
      <PageHero
        eyebrow={loaderData.post.category}
        title={loaderData.post.title}
        description={loaderData.post.excerpt}
      />
      <article className='py-20'>
        <Container>
          <div className='mx-auto max-w-3xl space-y-5 text-base leading-8 text-neutral-700'>
            <p>
              Article content will come from the Supabase posts table once the
              CMS is connected.
            </p>
            <p>
              The route is already separated so rich content rendering, SEO
              metadata, author information, and related articles can be added
              without affecting the news listing.
            </p>
          </div>
        </Container>
      </article>
    </>
  )
}
