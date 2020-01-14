import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import styled from 'styled-components'
import ReactCardFlip from 'react-card-flip';

const CardDiv = styled.div`
  // width: 80%;
  height: 600px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const ACard = styled(Card)`
  width: 30%;
`;

// const CardFront = styled.div`
//     background: green;
//     // width: 30%;
//     height: 500px;
// `;

// const CardBack = styled.div`
//     background: blue;
//     // width: 30%;
//     height: 500px;
// `;

const BtnDiv = styled.div`
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Btn = styled(Button)`
  margin: 4% auto;
`;




// const TheCard = (props) => {
//   const user = props.user;
//   return (
//     <CardDiv>
//       <ACard>
//         <CardImg top width="100%" src={user.avatar_url} alt="Card image cap" />
//         <CardBody>
//           <CardTitle style={{fontSize: "1.5rem"}}>{user.name}</CardTitle>
//           <CardSubtitle>username: {user.login}</CardSubtitle>
//           <CardText style={{fontSize: ".9rem", background: "#e3e3e3", padding: "3%", borderRadius: "5px", margin:"4% auto"}}>{user.bio}</CardText>
//           <a href={user.url} target="_blank"><Button>Go to profile</Button></a>
//         </CardBody>
//       </ACard>
//     </CardDiv>
//   );
// };

class TheCard extends React.Component {
  constructor() {
    super();
      this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
          <CardDiv onClick={this.handleClick}>
            <ACard>
              <CardImg top width="100%" src={this.props.user.avatar_url} alt="Card image cap" />
              <CardBody>
                <CardTitle style={{fontSize: "1.5rem"}}>{this.props.user.name}</CardTitle>
                <CardSubtitle>username: {this.props.user.login}</CardSubtitle>
                <CardText style={{fontSize: ".9rem", background: "#e3e3e3", padding: "3%", borderRadius: "5px", margin:"4% auto"}}>{this.props.user.bio}</CardText>
                <a href={this.props.user.url} target="_blank" onClick={e => e.stopPropagation()}><Button>Go to profile</Button></a>
              </CardBody>
            </ACard>
          </CardDiv>

 
          <CardDiv onClick={this.handleClick}>
            <ACard>
              <CardImg top width="100%" src={this.props.user.avatar_url} alt="Card image cap" />
              <CardBody>
                <CardTitle style={{fontSize: "1.5rem"}}>Professional Cat Dad</CardTitle>
                <BtnDiv>
          <a href="https://lh3.googleusercontent.com/QhwmbH4ppZDMJiU8VEbZ4nIP0DRljVRnUvpCb1_G-iA9YeQBODlWzLsCvNiQPxPPDCsela6MPPgsNxSTQL5pnptT-m61K9hv9rsomJ10uuePWhzVVJQlr1ylCLF-iMQYP3rdoxoBxSDYERFQ7AO6J1PR1khCaoKyhinApnkCRk7hIOW_wYZtcmYauC6PoByCDkEjRNqWJvTFc3PzfYSo60nrQgI16rJfyW8i35wZhxCOGem1aGLhO8BPscszmcAJ91Pk5A0fc9tngzkGA2N2mdrieDXhQ-g9P6AfipYpVdxUpsQ0mZjRShrn-YkKOnfV5oZYl9F2HEw6o3EE-hoZ-tTtCE37HlM3GubbUE9JxJVYuUh7me6DiemDUxA9-EceCR10HngY0lFiIcUtMbEjNd1HQwFzYcVQ3ep6-d0izk51_kakoTs6fYkkWr1uzIenPHeLxkWszrN7SVphFhOhfjLAtxhohkctLv8T25bRxkbr-zfW48YwlnTuc1Mxsj9DEhhv8R6yzyVAHx-a02rKWHGBnley4RJkiyo6uGpi_mgA0smGPguh5wDih_sCvccQLwOhZDQejHfntU13qnDYgirAtlvCXpF6t3S7CwlHR4tsDbUvxBH2JmDaO8A_aGJA4bRVUvN25nYcgxk8iDqFsG0xtgrRIE87tzKU_aKUVgjg34rsYMxn8Cq-=w588-h591-no" target="_blank" onClick={e => e.stopPropagation()}><Btn>Jasper</Btn></a>
          <a href="https://lh3.googleusercontent.com/PmLII3zO-AEVJ0yDuLAM2B3HGmz5te9ufrsqXLlG4mNhgk4cEq9pyOb77TtxAZ8grA7Jo76SWqCnI-TA-SALoS202WzoPvxzKPSOj2OSZ2COgkRX54gV3jY9FOUyMxbti19VvWo3yT0wbE4_BEDPWd9qrYgDPKtCh-eCyIYAyhDfLwTe2hyy2IsJQKpoY46zMSjwHgifEQnTNQI3xaOxq1JHtO221j5V4BhvJt7hp1jqixyQeyejjXfzhHHQhs_AYyeB8pdq1EJtfSMN1FckYni39quL1kSxf4shtY3PirBV0YzrNOU70wqWVQRGOgYW7iv5qfrm5t_AGi3bb0oxQb0w-lyPW8dNqTtdHZsMGPBCCVAUQ0HSDnuaHYw1JhpXoap4vB2Sz9ouaaVG0q5nGl8187jK4YiU2gWqpLB8QOrlRQ_62EvTnpVMscvNArQc-wUlzKPwWA1cAAB77gFepQc3v82Lu770n6BzuIZqTxqnoBSSduRCl1MCfBlNlAcUuLjuQwe-ws5mRBtjrcdfR1-M93_35XRVQSHIvhkhzVhLY0k8oiSj-PgxJD100KZfbA_jfhdTC-9qstPmmD7ckPp7_FtdSnb5gGhcMFCVgWaQ6L4cMYOisHqT4tVQEQ4zMPtYGh55-3adY8AZXyjzCNRe7rgAdMvtUVJ1XVcAP1emhv6Zvx9VdsRg=w1556-h875-no" target="_blank" onClick={e => e.stopPropagation()}><Btn>Scion</Btn></a>
          <a href="https://lh3.googleusercontent.com/AiGhGBh55nwOaon0BRxRzoy_a7miNG3gs2flV1-7UM0oE70p9rt0DA9WR570nlPJ8T7CZwXvSo4PrGF_uCiOuPz9wZkaqbo1LOPypuFzi-mRD15V1Q80p2GCp_xCExEK38ZxBkcWxeATBbkApG86ahhaS9mNqsZwj_AiVFykejqFqYWNK_BTao_rUoIX9fSNQClEHWasJe8eTwiovJVnwhQyEntIgqvR1ij78xnnKdWJ2Hj61LmDiMtjtW_ojkQBUwzUyJztAVtuBUAtM5Pc6pKaedYlualVad_Mn2ORLo7RLMBM6oP7_WickLebGQ6Dhd0QsO_Y2BxCa_mNwnbVWGvY-SsSeZlZs7UhzM74S7qrMfgwNlpSTibpXjCnM2vvAHZzmwX2fineoIrGjeyOm3VhRMzUB_P5Zlsb08aD2jePRLSllUhqViy5JQ2z36C006WvZZNoRRAyyGZdqwSeqZ6VwkhdwkUzdKMu-SEE2TPlKjA4zTE5TLq6udxSfRfkrwfowcqzM9JBJDdPhTm1tHhDl1_PmsfThbSONmtJao8ZdX1t1THviLIPsE667i0c7HM4ZKz5ld1CT2DsyURfyVoJbxUtrUClYKSeBIx3sFXXe6oZaVRuDc6gWjWpW0DkY4qoZ0EbV-ITu7g-p11Vhabw9ULFFl2umjPJnhlkaMqSTciv4C5kZrnn=s876-no" target="_blank" onClick={e => e.stopPropagation()}><Btn>Cinnamon</Btn></a>
          </BtnDiv>          

              </CardBody>
            </ACard>
          </CardDiv>
          
      </ReactCardFlip>
    )
  }

}

export default TheCard;