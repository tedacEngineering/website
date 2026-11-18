import { Link, useParams } from 'react-router-dom';
import Seo from '../components/Seo';
import RichText from '../components/RichText';
import { PageHero, NewsCard, Cta } from '../components/Ui';
import { useNews } from '../hooks/useContent';
import NotFound from './NotFound';

export default function NewsPost() {
  const { slug } = useParams();
  const { items, loading } = useNews();
  if (loading) return <div className="min-h-screen bg-navy-950" />;
  const n = items.find((x) => x.slug === slug);
  if (!n) return <NotFound />;
  return (
    <>
      <Seo title={n.title} path={`/news/${n.slug}`} description={n.excerpt} />
      <PageHero crumb={[['News', '/news'], [n.cat]]} title={n.title} text={`${n.cat} · ${n.date}`} image={n.image} />
      <article className="py-20">
        <div className="wrap max-w-3xl">
          <img src={n.image} alt="" className="cut mb-12 aspect-[16/9] w-full object-cover" />
          <div className="space-y-6 text-lg leading-relaxed text-slate-700"><RichText value={n.body} /></div>
          <Link to="/news" className="btn-navy mt-12">Back to news</Link>
        </div>
      </article>
      <section className="bg-sheet py-20"><div className="wrap grid gap-10 md:grid-cols-3">{items.filter((x) => x.slug !== slug).slice(0, 3).map((x) => <NewsCard key={x.slug} n={x} />)}</div></section>
      <Cta />
    </>
  );
}
