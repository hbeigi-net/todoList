import { useTheme } from '../contexts/ThemeContext';
import React from 'react';
import styled from "styled-components"
import Button from '@mui/material/Button'
import {useAuth} from "../contexts/AuthContext"
import { Navigate , useLocation} from "react-router-dom"

const Container = styled.div`
  width : 80vw; 
  height: 80vh ; 
  position : relative ; 

  margin : auto ; 
  margin-top : 10vh ; 
  display : flex ; 
  flex-direction : column ; 
`
const TaskHeader = styled.div`
  background-color : ${props=>props.theme.palette.bg};
  color : ${props=>props.theme.palette.text};
  margin : 10px ; 
  padding : 10px 20px ;
  border-radius : 5px; 
  position :relative ; 
  overflow :hidden ; 
  display : flex ; 
  justify-content : space-between;
  align-items : center ; 
  border : 1px solid #6d6d6d36;
  `

const TaskDescription = styled.div`
  background-color : ${props=>props.theme.palette.bg};
  color : ${props=>props.theme.mode==="dark" ? "#ffffff" : "#000000"};
  margin : 10px ; 
  padding : 10px 20px ;
  border-radius : 5px; 
  position :relative ; 
  overflow :hidden ; 
  display : flex ; 
  border : 1px solid #6d6d6d36;
  

`
export default function TaskDetail() {
  const {theme} = useTheme();
  return <>
      <Container> 
        <TaskHeader theme={theme}>
            <h2>
              task title 
            </h2>
            <p>
              yyyy/MM/dd
            </p>
            <Button variant="contained" color="primary">
              mark as done
            </Button>
        </TaskHeader>
        <TaskDescription theme={theme}>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae deleniti possimus, enim debitis obcaecati adipisci eligendi, velit reprehenderit repellendus omnis quam nemo minus asperiores voluptatem iusto ducimus blanditiis sed facilis. Quas provident atque, quaerat error facere in, accusamus fuga impedit voluptas ullam, adipisci rerum! Modi labore excepturi voluptates quia aperiam amet iusto, quisquam ratione tempore incidunt blanditiis, magnam natus iste ducimus tempora consequatur dolore rerum dolorem illo nihil dolor. At iusto totam laboriosam amet rerum debitis id sed omnis distinctio aliquid? Impedit ipsam et maiores optio blanditiis quas, corrupti quo cupiditate inventore, debitis molestiae? Magnam deserunt numquam voluptas? Quis, voluptatibus veniam? Corrupti recusandae dicta fugit perspiciatis nesciunt inventore maiores qqquos non quis dignissimos nisi neque modi commodi accusamus repellendus aliquam veritatis, numquam iste! Nostrum amet ut natus. Error rerum possimus officiis dolorem nihil, magnam facere nam veniam laboriosam iste! Animi, dolore laboriosam debitis harum officia dignissimos ipsum aut fugiat aperiam, dolores velit assumenda quisquam necessitatibus ex libero veniam maiores consequatur, numquam molestias illtatibus veniam? Corrupti recusandae dicta fugit perspiciatis nesciunt inventore maiores qqquos non quis dignissimos nisi neque modi commodi accusamus repellendus aliquam veritatis, numquam iste! Nostrum amet ut natus. Error rerum possimus officiis dolorem nihil, magnam facere nam veniam laboriosam iste! Animi, dolore laboriosam debitis harum officia dignissimos ipsum aut fugiat aperiam, dolores velit assumenda quisquam necessitatibus ex libero veniam maiores consequatur, numquam molestias illo et maxime. Optio eligendi repudiandae iste facere modi recusandae. Velit maxime illo non voluptate ipsa quis dolorum, dolor alias, voluptates sint deserunt unde corporis neque, mollitia veritatis. Expedita dolore natus omnis similique doloremque earum, rerum neque aperiam!
            </p>
        </TaskDescription>
      </Container>
  </>;
}
