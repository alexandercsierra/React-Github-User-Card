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
`;

const ACard = styled(Card)`
  width: 20%;
`;


const TheCard = (props) => {
  const user = props.user;
  return (
    <CardDiv>
      <ACard>
        <CardImg top width="100%" src={user.avatar_url} alt="Card image cap" />
        <CardBody>
          <CardTitle>{user.name}</CardTitle>
          <CardSubtitle>{user.login}</CardSubtitle>
          <CardText>{user.bio}</CardText>
          <a href={user.url} target="_blank"><Button>Button</Button></a>
        </CardBody>
      </ACard>
    </CardDiv>
  );
};

export default TheCard;