import styled from 'styled-components';

export const OrdersOperationWrapper = styled.div`
   .btn {
      display: flex;
      justify-content: space-between;

      .ant-btn{
          width: 50px;
      }

      .location {
         background-color: #67C23A;
         border-color: #67C23A;
         color: #ffffff;

         &:hover {
              background-color: #85ce61;
              border-color: #85ce61;
         }
      }
   }
   
`