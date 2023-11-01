import { Friend, OnlineStatus } from './friendlistitem.styled'

export const FriendListItem = ({ isOnline, src, name }) => {
    return (
        <Friend>
            <OnlineStatus $isOnline={isOnline}></OnlineStatus>
                    <img src={src} alt={name} width="48" />
                    <p>{name}</p>
        </Friend>
    )
}