import React from 'react'
import FollowerCard from './FollowerCard'
import styled from 'styled-components'

const FollowerDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 80%;
    margin: 4% auto;
`;

const FollowerContainer = styled.div`
    margin: 6% auto;
`;


const Followers = props => {
    const followers = props.followers
    return(
        <FollowerContainer>
            <h2>Followers</h2>
            <FollowerDiv>
                {followers.map(follower => <FollowerCard login={follower.login} url={follower.html_url} avatar={follower.avatar_url}/>)}
            </FollowerDiv>
        </FollowerContainer>
        
    )
}

export default Followers