// // import Image from "next/image";
// // import Link from "next/link";

// import Image from "../../src/images/landingPage/homeHero.webp"
// import Link from "../../src/images/landingPage/homeHero.webp"

// interface StoryCardProps {
//   id: number;
//   title: string;
//   excerpt: string;
//   content: string;
//   author: string;
//   date: string;
//   category: string;
//   image: string;
//   readTime: string;
// }

// export default function StoryCard({
//   id,
//   title,
//   excerpt,
//   content,
//   author,
//   date,
//   category,
//   image,
//   readTime,
// }: StoryCardProps) {
//   return (
//     <Link href={`/success-stories/${id}`} className="block">
//       <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group">
//         <div className="relative h-48">
//           <Image
//             src={image}
//             alt={title}
//             fill
//             className="object-cover group-hover:scale-105 transition-transform duration-300"
//           />
//           <div className="absolute top-4 left-4">
//             <span className="bg-[#48a546] text-white px-3 py-1 rounded-full text-xs font-medium">
//               {category}
//             </span>
//           </div>
//         </div>
        
//         <div className="p-6">
//           <div className="flex items-center text-sm text-gray-500 mb-2">
//             <span>{date}</span>
//             <span className="mx-2">•</span>
//             <span>{readTime}</span>
//           </div>
          
//           <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#48a546] transition-colors duration-200">
//             {title}
//           </h3>
          
//           <p className="text-gray-600 mb-4 line-clamp-3">
//             {excerpt}
//           </p>
          
//           <div className="flex items-center justify-between">
//             <div className="text-sm text-gray-500">
//               By {author}
//             </div>
//             <span className="text-[#48a546] font-medium group-hover:text-[#3a8a3a] transition-colors duration-200">
//               Read More →
//             </span>
//           </div>
//         </div>
//       </article>
//     </Link>
//   );
// }
import { Link } from 'react-router'
import {
  FiArrowRight,
  FiCalendar,
  FiClock,
  FiUser,
} from 'react-icons/fi'

import type { SuccessStory } from '@/data/mock/successStories'

interface StoryCardProps {
  story: SuccessStory
}

export default function StoryCard({ story,}: StoryCardProps) {
  return (
    <article className='group overflow-hidden rounded-3xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl'>
      <Link
        to={`/success-stories/${story.id}`}
        className='block overflow-hidden'
      >
        <img
          src={story.image}
          alt={story.title}
          className='aspect-16/10 w-full object-cover transition duration-500 group-hover:scale-105'
        />
      </Link>

      <div className='p-7'>
        <span className='inline-flex rounded-full bg-meadow-50 px-3 py-1 text-xs font-semibold text-meadow-800'>
          {story.category}
        </span>

        <h2 className='mt-4 font-serif text-2xl font-semibold leading-tight text-meadow-950'>
          <Link
            to={`/success-stories/${story.id}`}
            className='transition hover:text-meadow-700'
          >
            {story.title}
          </Link>
        </h2>

        <p className='mt-4 line-clamp-3 leading-7 text-slate-600'>
          {story.excerpt}
        </p>

        <div className='mt-5 flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-500'>
          <div className='flex items-center gap-1.5'>
            <FiUser />
            {story.author}
          </div>

          <div className='flex items-center gap-1.5'>
            <FiCalendar />
            {story.date}
          </div>

          <div className='flex items-center gap-1.5'>
            <FiClock />
            {story.readTime}
          </div>
        </div>

        <Link
          to={`/success-stories/${story.id}`}
          className='mt-6 inline-flex items-center gap-2 text-sm font-semibold text-meadow-800 transition hover:text-meadow-600'
        >
          Read Story
          <FiArrowRight className='transition group-hover:translate-x-1' />
        </Link>
      </div>
    </article>
  )
}