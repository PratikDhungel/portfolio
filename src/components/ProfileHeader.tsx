import GitHub from '@/Icons/GitHub'
import Location from '@/Icons/Location'

const ProfileHeader = () => {
  return (
    <div className="px-8 w-[30%] flex-shrink-0">
      <div>
        <div className="mb-6">
          <p className="text-4xl">
            <strong className="border-b-2 pb-2">Pratik Dhungel</strong>
          </p>
        </div>

        <div className="mb-4">
          <p>
            <strong className="text-xl">Senior Software Engineer</strong>
          </p>
        </div>
      </div>

      <div className="mb-4">
        <p>Software engineer focused on rapidly delivering customer-centric solutions that meet real-world needs.</p>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <Location className="w-6 h-6" />
        Kathmandu, Nepal
      </div>

      <div className="flex items-center gap-2">
        <GitHub className="w-6 h-6" />
        <a target="_blank" href="https://github.com/PratikDhungel" className="hover:underline">
          https://github.com/PratikDhungel
        </a>
      </div>
    </div>
  )
}

export default ProfileHeader
