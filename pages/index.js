import Head from 'next/head'
import HomePage from '../components/pages/HomePage'
import AboutPage from '../components/pages/AboutPage'
import ProjectsPage from '../components/pages/ProjectsPage'
import ContactPage from '../components/pages/ContactPage'


export default function Home() {
  return (
    <div className="bg-[#10403B]">
      <Head>
        <title>Edwin Sanjo Soji</title>
        <meta name="title" content="Edwin Sanjo Soji" />
        <meta name="description" content="I am  Programming Hobbysist i love coding  and i am a student. Just chck out my website" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <HomePage />
      <AboutPage />
      <ProjectsPage />
      <ContactPage />
    </div>
  )
}
