import { GitHubIcon, LinkedInIcon, TwitterIcon } from '@/components/SocialIcons'

import { Container } from '@/components/Container'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import portraitImage from '@/images/portrait.jpg'

export default function About() {
  return (
    <>
      <Head>
        <title>About - Sankalp Mukim</title>
        <meta
          name="description"
          content="I’m Sankalp Mukim. I live in Delhi, where I design the future."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <MainHeading>
              I’m Sankalp Mukim. I live in Delhi, where I design the future.
            </MainHeading>
            <MainContent>
              <SectionHeading>{`My beginning.`}</SectionHeading>
              <p>
                I’ve loved making things for as long as I can remember, and
                wrote my first program when I was around 12 years old. Worked on
                QBasic in my school&apos;s computer lab. The joy of compiling
                and running a program I wrote myself was unlike anything I’d
                ever experienced.
              </p>
              <p>
                At 15, I was working on robotics projects after school hours, I
                represented my school in international robotics competitions in
                Singapore. Writing programs using drag and drop editors that
                compiled to C and ran perfectly on microcontrollers gave me
                boundless joy.
              </p>
              <SectionHeading>My inspiration.</SectionHeading>
              <p>
                Some time ago, when I published a React Native app to the Play
                Store, I got a huge rush, so much happiness when it finally went
                live. I got to introspect over my journey and realise my true
                motivation into becoming a software engineer.
              </p>
              <p>
                The app was a very simple program that stored user&apos;s WiFi
                credentials locally and helped them login to Campus WiFi with
                one tap. About 2 years before that, I had published my first
                website to Heroku. The most important point was that something I
                made was able to be used by the outside world.
              </p>
              <p>
                It was a simple app that converted students&apos; timetables to
                Google Calendars. I made this project because I wanted to use
                Google Calendar for my timetable and thought this process
                doesn&apos;t need to be manual! I was so excited when I saw the
                logs on Heroku of other people using the project. Every single
                count of person who used it made a huge difference to my life.
              </p>
              <SectionHeading>{`My journey.`}</SectionHeading>
              <p>
                I&apos;m currently a 3rd year student at Vellore Institute of
                Technology, Vellore, Tamil Nadu. I started to seriously code
                only in my 1st year of college.
              </p>
              <p>
                As college taught us the basics of programming in Python, I
                worked in python scripts majority of the time. As Django was the
                popular major choice for full stack web development, and I
                wanted to build complete projects, I started learning Django. I
                made several projects in Django, and I was able to get a decent
                grasp of the framework.
              </p>
              <p>
                While working on a particular Django full stack project, I was
                having to learn and write a lot of DOM logic in javascript for
                interactivity. I found and did several things that Javascript
                was great for! As I polished my javascript skills, I started
                learning React.
              </p>
              <p>
                After doing their official tutorial, I made one of my favorite
                projects till date, A{' '}
                <StyledLink href="https://numpuz.sankalpmukim.dev">
                  Number Puzzle Game
                </StyledLink>{' '}
                in React. I made the first version in about a week, then over
                time, kept adding features to it. I was able to learn a lot
                about React, and I was able to make a project that I was proud
                of. Over time, I added responsiveness, dark mode, made it
                installable using PWAs, and added a leaderboard using Firebase.
                I learnt how to write advanced performant React by improving
                this project, understanding and reducing redundant re renders.
              </p>
              <p>
                For some time, I kept doing Frontend, learnt using NextJS, and
                made a few projects. I was able to learn a lot about React and
                NextJS, but I was missing out on the backend. I wanted to learn
                how to make a full stack project, and I wanted to learn how to
                make a backend that was scalable, secure and reliable. So I
                slowly shifted into Typescript and backend.
              </p>
              {/* TODO: Write about internship */}
              <p>
                As of today, Typescript is my primary go to language but I am
                also learning Go in my free time. Since the beginning I have
                enjoyed being full stack to be able to make complete projects by
                myself. So now, I can make a web or an app frontend. Make a
                backend with both SQL or a NoSQL database. I can deploy the
                project on a cloud platform and make it scale with confidence.
                And I am looking for opportunities that will allow me to
                continue to learn and grow.
              </p>
            </MainContent>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://twitter.com/IceCreamChai"
                icon={TwitterIcon}
              >
                {`Follow on Twitter`}
              </SocialLink>
              <SocialLink
                href="https://github.com/sankalpmukim"
                icon={GitHubIcon}
                className="mt-4"
              >
                {`Follow on GitHub`}
              </SocialLink>
              <SocialLink
                href="https://linkedin.com/in/sankalpmukim"
                icon={LinkedInIcon}
                className="mt-4"
              >
                {`Follow on LinkedIn`}
              </SocialLink>
              <SocialLink
                href="mailto:sankalpmukim@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                sankalpmukim@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}

const MainHeading = ({ children }) => (
  <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
    {children}
  </h1>
)

const SectionHeading = ({ children }) => (
  <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">
    {children}
  </h2>
)

const MainContent = ({ children }) => (
  <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
    {children}
  </div>
)

const StyledLink = (props) => (
  <Link
    {...props}
    className="text-zinc-800 hover:text-zinc-800 dark:text-zinc-300 dark:hover:text-zinc-200"
  />
)

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}
