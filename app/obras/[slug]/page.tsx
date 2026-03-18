import { notFound } from "next/navigation"
import { works, getWorkBySlug } from "@/lib/works-data"
import { WorkDetail } from "@/components/work-detail"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return works.map((work) => ({ slug: work.slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const work = getWorkBySlug(slug)
  if (!work) return { title: "Obra no encontrada" }
  return {
    title: `${work.title} | Portfolio`,
    description: work.description,
  }
}

export default async function WorkDetailPage({ params }: PageProps) {
  const { slug } = await params
  const work = getWorkBySlug(slug)
  if (!work) notFound()

  const workIndex = works.findIndex((w) => w.slug === slug)
  const prevWork = workIndex > 0 ? works[workIndex - 1] : null
  const nextWork = workIndex < works.length - 1 ? works[workIndex + 1] : null

  return <WorkDetail work={work} prevWork={prevWork} nextWork={nextWork} />
}
