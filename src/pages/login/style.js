import styled from 'styled-components';

export const LoginWrapper = styled.div`
  height: 100%;
  background-color: #2b4b6b;
  position: relative;

  .login-box {
      width: 450px;
      height: 300px;
      background-color: #fff;
      position: absolute;
      border-radius: 4px;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      margin: auto;

      .avatar {
        height: 150px;
        width: 150px;
        border: 1px solid #eee;
        border-radius: 50%;
        padding: 10px;
        box-shadow: 0 0 10px #ddd;
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #fff;

        .logo {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background-color: #eee;
        }
      }

      .login-form {
          position: absolute;
          bottom: 0px;
          width: 100%;
          padding: 0 20px;
          box-sizing: border-box;

          .ant-form-item-control-input-content {
              display: flex;
              justify-content: flex-end;
          }
          .reset-form-button{
              margin-left: 20px;
          }
      }
  }

`