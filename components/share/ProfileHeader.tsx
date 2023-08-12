import Image from "next/image";

interface Props {
    accountId: string;
    authUserId: string;
    name: string;
    username: string;
    imgUrl: string;
    bio: string;
    type?: string;
}


const ProfileHeader = ({accountId,
    authUserId,
    name,
    username,
    imgUrl,
    bio,
    type,}:Props) => {
  return (
    <div className='flex w-full flex-col justify-start p-7 bg-gradient-to-r from-gray-800 via-gray-950 to-black rounded-2xl'>
    <div className='flex items-center justify-between'>
      <div className='flex items-center gap-3'>
        <div className='relative h-20 w-20 object-cover'>
          <Image
            src={imgUrl}
            alt='logo'
            fill
            className='rounded-full object-cover shadow-2xl'
          />
        </div>
        <div className="flex-1">
            <h2 className="text-left text-heading3-bold text-light-1">{name}</h2>
            <p className="text-base-medium text-gray-1">@{username}</p>
        </div>
        </div></div>
        {/**Community */}
        <p className="mt-6 max-w-lg text-light-2">{bio}</p>
    </div>
  )
}

export default ProfileHeader
