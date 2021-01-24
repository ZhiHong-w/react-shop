import styled from 'styled-components';

export const OperationWrapper = styled.div`
  .btn {
      display: flex;
      justify-content: space-between;

      .ant-btn{
          width: 50px;
      }

      .setting {
          background-color: #E6A23C;
          border-color: #E6A23C;
          color: #ffffff;

          &:hover {
              background-color: #ebb563;
              border-color: #ebb563;
          }
      }
  }

  .ant-modal-body {
      font-size: 18px;

      .warning {
          margin-left: 10px;
      }
  }
`