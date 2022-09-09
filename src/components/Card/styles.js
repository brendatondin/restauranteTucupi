import styled from "styled-components";
import {
    gelo
} from "../../styles/variaveis";

export const CardStyle = styled.article `    
    height: 200px;
    width: 220px;
    border-radius: 10px;
    background: ${gelo};
    }

    .infos{
        height: 160px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 25px 10px 10px 10px;

        p{
            display: flex;
            flex-wrap: wrap;
            color: grey;
            font-size: 12px;
        }

    }
    
    .editReserva{
        display: flex;
        justify-content: space-between;

        .icons{
            width: 25%;
            display: flex;
            justify-content: space-between;
            cursor: pointer;
        }

        span{
            font-size: 18px;
            font-weight: 600;
            color: green;
        }
    }
`