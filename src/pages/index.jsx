import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import logoExercism from '@/images/logos/exercism.svg'
import logoYIC from '@/images/logos/yic.png'
import logoRajang from '@/images/logos/rajang.png'
import logoPressMetal from '@/images/logos/press-metal.jpeg'
import logoMahiran from '@/images/logos/mahiran.jpeg'
import logoIlead from '@/images/logos/ilead.webp'
// import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllCourses } from '@/lib/getAllCourses'
import { formatDate } from '@/lib/formatDate'

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BadgeIcon(props) {
  return (
    <svg 
    fill="none"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
      viewBox="0 0 375.04 375.04" 
      {...props}
    >
      <path className="fill-zinc-400 stroke-zinc-400 dark:fill-zinc-100/50 dark:stroke-zinc-200" d="m305.74 152.49c7.346-6.515 15.67-13.898 15.67-24.241s-8.324-17.727-15.67-24.242c-4.156-3.686-8.867-7.864-9.873-10.965-1.105-3.399 0.275-9.773 1.494-15.397 2.035-9.399 4.342-20.054-1.523-28.111-5.918-8.131-16.828-9.221-26.453-10.182-5.678-0.567-12.111-1.209-14.922-3.255-2.74-1.993-5.301-7.856-7.56-13.029-3.902-8.929-8.322-19.049-18.006-22.192-1.788-0.58-3.686-0.875-5.643-0.875-7.396 0-14.439 4.105-21.25 8.076-5.049 2.942-10.77 6.277-14.488 6.277-3.721 0-9.441-3.335-14.49-6.277-6.811-3.971-13.854-8.076-21.251-8.076-1.959 0-3.857 0.295-5.644 0.875-9.682 3.144-14.102 13.264-18.002 22.191-2.26 5.173-4.822 11.036-7.56 13.029-2.813 2.046-9.246 2.688-14.922 3.255-9.627 0.961-20.537 2.051-26.453 10.182-5.865 8.058-3.559 18.712-1.521 28.111 1.217 5.624 2.598 11.998 1.494 15.397-1.008 3.1-5.717 7.278-9.873 10.964-7.346 6.516-15.672 13.9-15.672 24.243 0 10.344 8.326 17.729 15.672 24.243 4.156 3.686 8.867 7.863 9.873 10.961 1.104 3.401-0.277 9.776-1.494 15.4-2.037 9.399-4.344 20.054 1.52 28.111 5.912 8.122 16.805 9.218 26.422 10.178l-38.959 125.55c-0.871 2.804-0.025 5.857 2.164 7.814 2.188 1.957 5.318 2.456 8.008 1.278l40.315-17.656 23.24 37.377c1.379 2.22 3.799 3.54 6.367 3.54 0.316 0 0.637-0.019 0.957-0.061 2.912-0.373 5.338-2.412 6.207-5.216l33.602-108.28 33.6 108.28c0.871 2.804 3.297 4.843 6.209 5.216 0.32 0.042 0.639 0.061 0.957 0.061 2.568 0 4.986-1.321 6.367-3.54l23.238-37.377 40.316 17.656c2.686 1.178 5.818 0.681 8.006-1.278 2.189-1.957 3.035-5.011 2.166-7.814l-38.959-125.54c9.619-0.961 20.51-2.057 26.422-10.179 5.865-8.058 3.559-18.712 1.523-28.112-1.219-5.624-2.6-11.999-1.494-15.399 1.006-3.101 5.717-7.278 9.873-10.964zm-161.29 197.15-18-28.952c-1.969-3.167-5.965-4.405-9.379-2.91l-31.227 13.676 34.504-111.19c0.07 0.048 0.148 0.092 0.217 0.141 2.738 1.993 5.301 7.855 7.56 13.028 3.9 8.928 8.322 19.048 18.004 22.19 1.787 0.581 3.688 0.875 5.645 0.875 7.396 0 14.439-4.106 21.25-8.074 1.127-0.657 2.287-1.332 3.453-1.987l-32.027 103.21zm113.5-31.863c-3.412-1.494-7.408-0.254-9.377 2.91l-18.002 28.952-32.025-103.21c1.164 0.654 2.326 1.33 3.453 1.987 6.811 3.971 13.854 8.075 21.25 8.075 1.959 0 3.857-0.294 5.645-0.874 9.682-3.144 14.104-13.264 18.004-22.191 2.26-5.173 4.822-11.035 7.56-13.028 0.066-0.049 0.145-0.093 0.217-0.14l34.504 111.19-31.229-13.675zm23.644-158.96c-2.354 7.25-0.598 15.361 1.1 23.205 1.303 6.009 2.922 13.487 1.012 16.112-1.965 2.699-9.646 3.466-15.816 4.082-7.943 0.793-16.158 1.612-22.258 6.053-6.029 4.387-9.309 11.893-12.479 19.15-2.506 5.733-5.623 12.869-8.893 13.931-0.293 0.095-0.623 0.141-1.012 0.141-3.344 0-8.844-3.206-13.697-6.034-7.016-4.089-14.27-8.317-22.041-8.317-7.773 0-15.027 4.229-22.043 8.317-4.852 2.828-10.352 6.034-13.695 6.034-0.389 0-0.719-0.046-1.012-0.142-3.27-1.061-6.387-8.196-8.893-13.93-3.17-7.258-6.449-14.764-12.479-19.15-6.102-4.441-14.316-5.261-22.262-6.054-6.17-0.616-13.848-1.383-15.813-4.081-1.91-2.625-0.291-10.102 1.01-16.11 1.699-7.844 3.457-15.955 1.102-23.208-2.266-6.98-8.326-12.354-14.186-17.55-4.981-4.418-10.625-9.424-10.625-13.021s5.644-8.604 10.625-13.021c5.859-5.197 11.92-10.572 14.188-17.554 2.353-7.251 0.596-15.361-1.102-23.205-1.303-6.009-2.922-13.485-1.012-16.11 1.965-2.699 9.645-3.466 15.816-4.082 7.943-0.793 16.156-1.612 22.258-6.052 6.029-4.389 9.309-11.895 12.479-19.153 2.506-5.733 5.623-12.868 8.891-13.93 0.293-0.094 0.625-0.141 1.013-0.141 3.344 0 8.844 3.207 13.697 6.035 7.016 4.09 14.27 8.318 22.043 8.318 7.771 0 15.025-4.229 22.041-8.318 4.854-2.828 10.354-6.035 13.698-6.035 0.389 0 0.719 0.047 1.01 0.142 3.27 1.061 6.387 8.196 8.893 13.931 3.172 7.259 6.451 14.765 12.48 19.152 6.1 4.439 14.314 5.259 22.258 6.052 6.17 0.616 13.852 1.383 15.816 4.082 1.91 2.625 0.291 10.103-1.012 16.11-1.697 7.844-3.453 15.955-1.1 23.204 2.266 6.982 8.326 12.357 14.188 17.556 4.979 4.416 10.623 9.423 10.623 13.02s-5.645 8.603-10.623 13.019c-5.861 5.196-11.922 10.571-14.188 17.552z"/>
      <path className="fill-zinc-400 stroke-zinc-400 dark:fill-zinc-100/50 dark:stroke-zinc-200" d="m187.52 43.244c-46.871 0-85.004 38.133-85.004 85.004s38.133 85.004 85.004 85.004 85.004-38.133 85.004-85.004-38.132-85.004-85.004-85.004zm0 155.01c-38.602 0-70.004-31.403-70.004-70.004s31.402-70.004 70.004-70.004c38.6 0 70.004 31.403 70.004 70.004s-31.404 70.004-70.004 70.004z"/>
      <path className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/50 dark:stroke-zinc-200" d="m187.52 69.186c-32.566 0-59.063 26.495-59.063 59.063 0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5c0-24.296 19.766-44.063 44.063-44.063 4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5z"/>
    </svg>
  )
}


function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}



function Course({ course }) {
  return (
    <Card as="course">
      <Card.Title href={`/courses/${course.slug}`}>
        {course.title}
      </Card.Title>
      <Card.Eyebrow  decorate>
        {course.level}
      </Card.Eyebrow>
      <Card.Description>{course.description}</Card.Description>
      <Card.Cta>View Details</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">

        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  )
}

function Badge() {
  let resume = [
    {
      name: 'Young Innovators Challenge 2022 - Train-the-Trainer (TTT)',
      logo: logoYIC,
      link: 'https://sms.chumbaka.asia/b/TEYKjgaATR',
    
    },
    {
      name: 'Contributor to Exercism',
      logo: logoExercism,
      link: 'https://exercism.org/profiles/hovahyii/badges',
    },


  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BadgeIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Badges</span>
      </h2>
      <ol className="mt-6 flex">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
             <Link href={role.link} target="_blank"><Image class=" w-20 h-20" src={role.logo} alt={role.name} /></Link>
          </li>
        ))}
      </ol>

    </div>
  )
}

function Resume() {
  let resume = [
    {
      company: 'Mahiran Digital Sdn Bhd',
      title: 'Full-stack Developer',
      logo: logoMahiran,
      start: '2021',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'Rajang Digital Solutions',
      title: 'Junior Web Developer',
      logo: logoRajang,
      start: 'Mar 2020',
      end: 'Jun 2020',
    },
    {
      company: 'Press Metal Bintulu Sdn Bhd',
      title: 'Robotics Engineer',
      logo: logoPressMetal,
      start: 'June 2019',
      end: 'August 2019',
    },
    {
      company: 'iLead Solutions',
      title: 'Web Designer',
      logo: logoIlead,
      start: 'June 2018',
      end: 'AUgust 2018',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      {/* <Button href="#" variant="secondary" className="group mt-6 w-full">
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button> */}
    </div>
  )
}



function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home({ courses }) {
  return (
    <>
      <Head>
        <title>
          Hovah - Software Developer, mentor, and life-long learner
        </title>
        <meta
          name="description"
          content="I’m Spencer, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms."
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Software Developer, mentor, and life-long learner.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I&apos;m Hovah, a software developer based in Malaysia. I built professional websites for companies.
            I&apos;m also a student mentor where I supervise and guide students on their programming journey.
          </p>
          <div className="mt-6 flex gap-6">
            {/* <SocialLink
              href="https://twitter.com"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            /> */}
            {/* <SocialLink
              href="https://instagram.com"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            /> */}
            <SocialLink
              href="https://github.com/hovahyii"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/jehovah-yii-zui-hon/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      {/* <Photos /> */}
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {courses.map((course) => (
              <Course key={course.slug} course={course} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            <Badge />
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  // if (process.env.NODE_ENV === 'production') {
  //   await generateRssFeed()
  // }

  return {
    props: {
      courses: (await getAllCourses())
        .slice(0, 4)
        .reverse()
        .map(({ component, ...meta }) => meta),
       
    },
  }
}
