import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllCourses } from '@/lib/getAllCourses'

function Course({ course }) {
  return (
    <course className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/courses/${course.slug}`}>
          {course.title}
        </Card.Title>
        <Card.Eyebrow
          className="md:hidden"
          decorate
        >
          {course.level}
        </Card.Eyebrow>
        <Card.Description>{course.description}</Card.Description>
        <Card.Cta>View Detalis</Card.Cta>
      </Card>
      <Card.Eyebrow
        className="mt-1 hidden md:block"
      >
        {course.level}
      </Card.Eyebrow>
    </course>
  )
}

export default function CourseIndex({ courses }) {
  return (
    <>
      <Head>
        <title>Courses - Hovah Yii</title>
        <meta
          name="description"
          content="All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order."
        />
      </Head>
      <SimpleLayout
        title="Artificial Intelligence (AI) and its applications in Industry 
        4.0 (IR4.0) Training"
        intro="With rapid technological advancements and the increasing dominance of AI 
        in various industries, it is critical that individuals have the necessary knowledge and skills to 
        remain competitive in the job market. Through this training, 
        learners will gain an understanding of the role of AI in IR4.0 and learn how to effectively use AI 
        tools in their respective work areas."
      >
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {courses.map((course) => (
              <Course key={course.slug} course={course} />
            ))}
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      courses: (await getAllCourses()).map(({ component, ...meta }) => meta),
    },
  }
}
