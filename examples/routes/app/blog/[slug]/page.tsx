export async function generateStaticParams() {
  return [{ slug: 'hello' }, { slug: 'world' }]
}

export default function Page({ params }) {
  return <div>my post {params.slug}</div>
}
