import Image from 'next/image'
import React from 'react'
import Avatar from "../../assests/Avatar.png"

export default function UserNetworkCard() {
    const [UserCard, setUserCard] = useState([
        {
            avatar: <Image src={Avatar} />,
            name:""
        }
    ])
  return (
    <>
        <div>
network
        </div>
    </>
    )
}
