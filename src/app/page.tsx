import Link from 'next/link'

import ProfileHeader from '@/components/ProfileHeader'
import ProfileDescription from '@/components/ProfileDescription'

export default function Home() {
  return (
    <div className="flex overflow-y-auto py-16">
      <ProfileHeader />

      <div className="px-8">
        <ProfileDescription />

        <Link href="bio" className="hover:underline">
          Read more...
        </Link>
      </div>
    </div>
  )
}
