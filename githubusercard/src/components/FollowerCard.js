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
//   border: 1px solid red;
  width: 25%;
  margin: 4%;
`;

const ACard = styled(Card)`
  width: 100%;
`;


const FollowerCard = (props) => {
  const {login, url, avatar} = props;
  console.log("follower url",url);
  return (
    <CardDiv>
      <ACard>
        <CardImg top width="100%" src={avatar} alt="Card image cap" />
        <CardBody>
          <CardTitle style={{fontSize: "1.5rem"}}>{login}</CardTitle>
          {/* <CardSubtitle>username: {user.login}</CardSubtitle> */}
          {/* <CardText style={{fontSize: ".9rem", background: "#e3e3e3", padding: "3%", borderRadius: "5px", margin:"4% auto"}}>{user.bio}</CardText> */}
          <a href={url} target="_blank"><Button>Go to profile</Button></a>
        </CardBody>
      </ACard>
    </CardDiv>
  );
};

export default FollowerCard;