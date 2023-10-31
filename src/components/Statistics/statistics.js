import {StatSection, Title, StatList, ListItem} from './statistics.styled'

export const Statistics = ({ stats, title }) => {
    return (
        <StatSection>
            {title && <Title>{title}</Title>}
            <StatList>
                {stats.map(stat => (
                    <ListItem key={stat.id} $variant={stat.label}>
                    <span>{stat.label}</span>
                    <span>{stat.percentage}%</span>
                    </ListItem>
                ))}
                
            </StatList>
        </StatSection>
    );
}