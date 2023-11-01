import {FriendListItem} from '../FriendListItem/friendlistitem'
import { FriendsList } from './friendlist.styled'

export const FriendList = ({ friends }) => {
    return (
        <FriendsList>
            {friends.map(({ avatar, name, isOnline, id }) => (
                <FriendListItem key={id} isOnline={isOnline} src={avatar} name={name} />
            ))}
        </FriendsList>
    );
}