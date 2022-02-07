import React  , {useState} from 'react';
import styled from "styled-components";
import Checkbox from '@mui/material/Checkbox'
import {useTheme} from "../contexts/ThemeContext"

const Container = styled.div`
    display :flex ; 
    align-items : center ; 
    justify-content : space-between ; 
    padding : 5px ; 
    border : 1px solid #4e504f42 ; 
    border-radius : 3px ; 
    margin : 5px ; 
    cursor: pointer;
`
export default function TaskItem() {
    const [checked, setChecked] = useState(false);
    const {theme} = useTheme();
  return <>
        <Container>
            hello world 
          
                <Checkbox
                  value="checked"
                  checked={checked}
                  onChange={()=>setChecked(checked=>!checked)}
                  color={theme.mode==="dark" ? "secondary" : "primary"}
                />
              
        </Container>
  </>;
}
