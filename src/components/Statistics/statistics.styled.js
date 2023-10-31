import styled from 'styled-components';

const getColor = (props) => {
    switch (props.$variant){
        case ".docx":
        return "#85C1E9";
        case ".pdf":
        return "#A3E4D7";
        case ".mp3":
        return "#F9E79F";
        case ".psd":
        return "#D7BDE2";
    default:
        return "#E6B0AA";
    }
}

export const StatSection = styled.section`
    border: 1px solid grey;
    margin-top: 40px;
`;

export const Title = styled.h2`
    color: #4D5656;
    margin: 60px;
    text-transform: uppercase;
    text-align: center;
    font-size: 40px;
`;

export const StatList = styled.ul`
    display: flex;
    margin: 0;
    padding: 0;
`;

export const ListItem = styled.li`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 20px 24px;
    color: white;
    font-size: 24px;
    background-color: ${getColor};
    border: 1px solid grey;
    text-align: center;
`;

