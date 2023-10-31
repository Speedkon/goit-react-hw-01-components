import styled from 'styled-components';

export const CardWrapper = styled.div`
    border: 1px solid black;
    border-radius: 9px;
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px 60px;
    gap: 20px;
`;

export const StatsWrapper = styled.ul`
    display: flex;
    margin: auto;
    padding: 0;
`;

export const Avatar = styled.img`
    border: 5px solid black;
    border-radius: 50%;
`;

export const NameText = styled.p`
    margin: auto;
`;

export const Text = styled.p`
    color: grey;
    margin: auto;
    font-size: 24px;
`;

export const StatsText = styled.li`
    display: flex;
    width: 40%;
    gap: 8px;
    flex-direction: column;
    padding: 16px;
    font-size: 20px;
    border: 1px solid grey;
    border-bottom: 0;
    align-items: center;
`;

export const StatsCount = styled.b`
    font-size: 24px;
`;