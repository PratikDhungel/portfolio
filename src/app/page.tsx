import ProfileHeader from '@/components/ProfileHeader'
import ProfileDescription from '@/components/ProfileDescription'

export default function Home() {
  return (
    <div className="flex overflow-y-auto py-16">
      <ProfileHeader />

      <ProfileDescription />
    </div>
  )
}
