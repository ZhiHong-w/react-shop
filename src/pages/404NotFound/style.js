import styled from 'styled-components';

export const NotFoundWrapper = styled.div`
  height: 100%;
  background-color: rgba(51,55,68,0.8);

  .content {
    width: 600px;
    height: 400px;
    background-color: #fff;
    border-radius: 60%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .unpage {
        font-size: 40px;
    }
    .timer {
        color: red;
        text-decoration: underline;
    }
  }
`