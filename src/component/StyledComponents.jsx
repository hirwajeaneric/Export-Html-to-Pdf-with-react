import styled from "styled-components";

export const Container = styled.div`
    padding: 20px 50px 50px 50px;
    background-color: white;
    color: black;
`;

export const ExportedSpace = styled.div`
    padding: 50px;
    width: 759.68px;
    height: 1122.519685px;
    background: rgb(100,150,150);
`;

export const MainComponents = styled.div`
    background: gray;
    height: 100vh;
    color: white;
    width: 100%;
`;

export const Navigation = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: purple;
    
    h1 {
        padding: 0 0 0 50px;
    }

`;

export const NavigationComponents = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;
    padding: 0 50px 0 0;

    a {
        text-decoration: none;
        color: white;
        
        &:hover {
            color: black;
        }
    
        &.active {
            color: orange;
        }
    }
`;

export const ExportNav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    svg {
        &:hover {
            color: orange;
        }
    }
`;