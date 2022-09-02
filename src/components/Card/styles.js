import styled from "styled-components";
import {
    gelo,cinza
} from "../../styles/variaveis";

export const CardStyle = styled.article `    
    height: 360px;
    width: 280px;
    border-radius: 10px;
    background: ${gelo};
    figure{
        width: 280px;
        height: 200px;
        border-radius: 10px 10px 0 0 ;        
        img{
            border-radius: 8px 8px 0 0 ;
            width: 280px;
            height: 200px;
        }
    }

    .infos{
        height: 160px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 25px 10px 10px 10px;

        h3{
            font-size: 20px;
        }

        p{
            display: flex;
            flex-wrap: wrap;
            color: grey;
            font-size: 12px;
        }

    }
    
    .editPrice{
        display: flex;
        justify-content: space-between;

        .icons{
            width: 25%;
            display: flex;
            justify-content: space-between;
            cursor: pointer;
        }

        h4{
            font-size: 14px;
            font-weight: 400;
            color: ${cinza};
            display: flex;
            align-items: center;
            gap: 10px;
        }

        span{
            font-size: 18px;
            font-weight: 600;
            color: green;
        }
    }
`