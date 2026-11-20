import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router";
import type { NewsPost } from "@/types/content";

import img from '../../src/images/ability.png'

export function NewsCard({ post }: { post: NewsPost }) {
  return (
    <article className="soft-card overflow-hidden rounded-2xl bg-white">
      <img src={post.img} /> 
      <div className="p-6">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-600">{post.category}</p>
        <h3 className="mt-3 font-serif text-2xl font-semibold text-meadow-950">{post.title}</h3>
        <p className="mt-3 text-sm leading-6 text-neutral-600">{post.excerpt}</p>
        <Link to={`/news/${post.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-meadow-900">Read More <FiArrowRight /></Link>
      </div>
    </article>
  );
}
// aspect-[16/9] bg-gradient-to-br