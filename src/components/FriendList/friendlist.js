import {FriendsList, Friend, OnlineStatus} from './friendlist.styled'

export const FriendList = ({ friends }) => {
    return (
        <FriendsList>
            {friends.map(({ avatar, name, isOnline, id }) => (
                <Friend key={id} >
                    <OnlineStatus $isOnline={isOnline}></OnlineStatus>
                    <img src={avatar} alt={name} width="48" />
                    <p>{name}</p>
                </Friend>
            ))}
        </FriendsList>
    );
}