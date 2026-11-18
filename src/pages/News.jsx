import Seo from '../components/Seo';
import { PageHero, NewsCard, Cta } from '../components/Ui';
import { useNews } from '../hooks/useContent';
import { p } from '../data/images';

export default function News() {
  const { items, loading } = useNews();
  return (
    <>
      <Seo title="News and insights" path="/news" description="Company news, HSE updates and engineering insight from TEDAC Engineering Limited." />
      <PageHero crumb={[['News']]} title="News and insights" text="Company updates, safety culture and engineering perspective." image={p('news-1')} />
      <section className="py-24">
        <div className="wrap">
          {loading ? <p className="text-slate-500">Loading news...</p> : items.length === 0 ? <p className="text-lg text-slate-600">No articles yet. Please check back soon.</p> : (
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">{items.map((n) => <NewsCard key={n.slug} n={n} />)}</div>
          )}
        </div>
      </section>
      <Cta />
    </>
  );
}
