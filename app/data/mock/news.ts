import type { NewsPost } from "@/types/content";
import rehab from '@/src/images/news/Meadowbrook-Naperville-2026-SPECTRUM-AWARD-WINNER-.png'
import rating from '@/src/images/news/Meadowbrook-Naperville-3-Star-CMS-Rating.png'
import dementia from '@/src/images/news/Meadowbrook-Naperville-Dementia-Support-Group.png'


export const newsPosts: NewsPost[] = [
  {
    id: "1",
    slug: "personalized-rehab-plans",
    title: "Meadowbrook Rehabilitation in Naperville Earns 2026 Spectrum Award for Service Excellence",
    excerpt: "Meadowbrook Rehabilitation in Naperville has once again been recognized for its outstanding commitment to customer satisfaction and service excellence, receiving the 2026 City Beat News Spectrum Award for Service Excellence.",
    category: "Rehabilitation",
    publishedAt: "2026-11-03",
    status: "published",
    img: rehab
  },
  {
    id: "2",
    slug: "3-Star-CMS-Rating",
    title: "Meadowbrook Naperville Celebrates 3 Star CMS Rating",
    excerpt: "At Meadowbrook Naperville, exceptional care is about more than achieving a rating, it’s about creating an environment where every patient and resident feels respected, supported, and cared for like family. We are proud to celebrate earning a 3-Star CMS rating, a recognition that reflects our ongoing commitment to quality and resident care. .",
    category: "Community",
    publishedAt: "2026-11-04",
    status: "published",
    img: rating,
  },
  {
    id: "3",
    slug: " Dementia-Support-Group",
    title: "Meadowbrook Naperville Dementia Support Group",
    excerpt: "The bi-monthly Dementia Support Group at Meadowbrook Naperville provides a safe, welcoming space for individuals living with dementia and their families or caregivers to connect, share experiences, and receive emotional support. ",
    category: "Team",
    publishedAt: "2026-10-28",
    status: "published",
    img: dementia,
  },
];
