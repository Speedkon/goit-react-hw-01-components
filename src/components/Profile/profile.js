import { CardWrapper, StatsWrapper, TextWrapper, Avatar, NameText, Text, StatsText, StatsCount } from './profile.styled';

export const Profile = ({ username, tag, location, avatar, stats: { followers, views, likes } }) => {
    return (
        <CardWrapper>
            <TextWrapper>
                <Avatar
                    src={avatar}
                    alt={username}
                    width="300"
                />
                <NameText><b>{username}</b></NameText>
                <Text>@{tag}</Text>
                <Text>{location}</Text>
            </TextWrapper>

            <StatsWrapper>
                <StatsText>
                    <span>Followers</span>
                    <StatsCount>{followers}</StatsCount>
                </StatsText>
                <StatsText>
                    <span>Views</span>
                    <StatsCount>{views}</StatsCount>
                </StatsText>
                <StatsText>
                    <span>Likes</span>
                    <StatsCount>{likes}</StatsCount>
                </StatsText>
            </StatsWrapper>
        </CardWrapper>
    );
}