import Link from 'next/link'

import ProfileHeader from '@/components/ProfileHeader'
import WorkExperience from '@/components/WorkExperience'
import ProfileDescription from '@/components/ProfileDescription'

export default function Home() {
  return (
    <div className="flex overflow-y-auto py-16">
      <ProfileHeader />

      <div className="px-8">
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
