import styled from 'styled-components';

const getStatus = ({$isOnline}) => {
    return $isOnline ? "#2ECC71" : "#E74C3C";
}

export const Friend = styled.li`
    display: flex;
    align-items: center;
    gap: 20px;
    border: 1px solid grey;
    padding: 0 20px;
    margin-bottom: 16px;
    border-radius: 8px;
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.12);
`;

export const OnlineStatus = styled.span`
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: ${getStatus};
`;