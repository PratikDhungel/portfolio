import Link from 'next/link'

import ProfileHeader from '@/components/ProfileHeader'
import WorkExperience from '@/components/WorkExperience'
import ProfileDescription from '@/components/ProfileDescription'

export default function Home() {
  return (
    <div className="flex py-16">
      <ProfileHeader />

      <div className="px-8 overflow-y-scroll h-[calc(100vh-64px)]">
        <div className="mb-8">
          <ProfileDescription />

          <Link href="bio" className="hover:underline">
            Read more...
          </Link>
        </div>

        <WorkExperience />
      </div>
    </div>
  )
}
