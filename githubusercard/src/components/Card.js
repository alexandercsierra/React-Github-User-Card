import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import styled from 'styled-components'

const CardDiv = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const ACard = styled(Card)`
  width: 30%;
`;


const TheCard = (props) => {
  const user = props.user;
  return (
    <CardDiv>
      <ACard>
        <CardImg top width="100%" src={user.avatar_url} alt="Card image cap" />
        <CardBody>
          <CardTitle style={{fontSize: "1.5rem"}}>{user.name}</CardTitle>
          <CardSubtitle>username: {user.login}</CardSubtitle>
          <CardText style={{fontSize: ".9rem", background: "#e3e3e3", padding: "3%", borderRadius: "5px", margin:"4% auto"}}>{user.bio}</CardText>
          <a href={user.url} target="_blank"><Button>Go to profile</Button></a>
        </CardBody>
      </ACard>
    </CardDiv>
  );
};

export default TheCard;