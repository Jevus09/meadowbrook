import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router";
import type { Service } from "@/types/content";

export function ServiceCard({ service, index }: { service: Service; index: number; } ) {
  const Icon = service.icon



  return (
    <Link to={`/services/${service.slug}`} className="soft-card group rounded-2xl bg-white p-6 transition hover:-translate-y-1">
      <div className="grid size-11 place-items-center rounded-full bg-sage-100 font-serif text-lg text-meadow-900">
        {/* 0{index + 1} */}
        <Icon className='h-6 w-6 text-meadow-800' />

        </div>
      <h3 className="mt-5 font-serif text-2xl font-semibold text-meadow-950">{service.title}</h3>
      <p className="mt-3 text-sm leading-6 text-neutral-600">{service.description}</p>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-meadow-900">Learn More <FiArrowRight className="transition group-hover:translate-x-1" /></span>
    </Link>
  );
}
