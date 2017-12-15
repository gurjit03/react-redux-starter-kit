// @flow
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 32%;
  border: 2px solid #333;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 25px;
`;

const ShowCard = (props: {
  poster: string,
  title: string,
  year: string,
  description: string
}) => (
  <Wrapper className="show-card">
    <img alt={`${props.title} Show Img`} src={`/public/img/posters/${props.poster}`} />
    <div>
      <h3>{props.title}</h3>
      <h3>({props.year})</h3>
      <p>{props.description}</p>
      <p>Hello 23</p>
    </div>
  </Wrapper>
);


export default ShowCard;
