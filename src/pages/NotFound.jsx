import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

export default function NotFound() {
  return (
    <section className="grid-paper relative grid min-h-screen place-items-center bg-navy-950 px-5 text-center text-white">
      <Seo title="Page not found" path="/404" />
      <div>
        <p className="font-display text-8xl font-extrabold text-gold">404</p>
        <h1 className="mt-4 text-3xl font-bold">We could not find that page</h1>
        <p className="mt-3 text-white/70">The link may be broken or the page may have moved.</p>
        <Link to="/" className="btn-gold mt-8">Back to home</Link>
      </div>
    </section>
  );
}
