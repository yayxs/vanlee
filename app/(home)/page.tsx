import Card from '../components/Card'
import projectsData from '@/data/homeCard'
console.log('projectsData', projectsData)
export default function HomeIndex() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <section className='container'>
        <div className='-m-4 flex flex-wrap justify-around'>
          {projectsData.map((d) => (
            <Card
              key={d.title}
              title={d.title}
              desc={d.desc}
              href={d.href}
            ></Card>
          ))}
        </div>
      </section>
    </div>
  )
}
