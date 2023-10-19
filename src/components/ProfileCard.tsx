import Image from 'next/image'

interface Props {
    src: string
    name: string
    position: string
}

const ProfileCard: React.FC<Props> = ({src, name, position}) => {
    return (
        <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
            <div className="flex flex-col">
                <Image className="border-4 border-black"
                    src={src} 
                    width={400}
                    height={400} 
                    alt="profile">
                </Image>
                    <div className="text-center mt-4">
                    <h1 className="text-2xl font-medium mb-1">
                        {position}
                    </h1>
                    <div className="font-light text-xl mb-2">
                        {name}
                    </div>
                </div>
            </div>
        </div>

    )
  }

export default ProfileCard

