import styled from 'styled-components';

export const HomeWrapper = styled.div`
  height: 100%;

  .home-content {
      height: 100%;

      .home-header {
        background-color: #373d41;
        display: flex;
        justify-content: space-between;
        padding-left: 0;
        align-items: center;
        color: #fff;
        font-size: 20px;

        .left-header {
            display: flex;
            align-items: center;

            .title {
                margin-left: 15px;
            }
        }

        .login-out {
            background-color: #909399;
            border: none;
            color: #fff;
            cursor: pointer;
            padding: 12px 20px;
            border-radius: 4px;
            font-size: 14px;

            &:hover {
                background-color: #a6a9ad;
            }
        }
      }

      .home-sider {
        background-color: #333744;

        .toggle-button {
          background-color: #4a5064;
          font-size: 10px;
          line-height: 24px;
          color: #fff;
          text-align: center;
          letter-spacing: 0.2em;
          cursor: pointer;
        }

        .ant-menu-submenu-title {
            height: 56px;
            line-height: 56px;

            &:hover {
                background-color: rgb(41,44,54);
            }
        }

        .ant-menu-item {
            background-color: rgb(51,55,68);
            margin: 0;
            height: 50px;
            line-height: 50px;

            &:hover {
                background-color: rgb(41,44,54);
            }
        }

        .ant-menu-item-selected {
            background-color: rgb(41,44,54);
        }

      }

      .home-right {
        background-color: #eaedf1;
        padding: 20px;
      }
  }
`