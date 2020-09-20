import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  overflow-x: hidden;
  p,
  span {
    font-family: Lato;
  }

  .wrapper h1 img {
    display: none;
  }

  .adminPageRightWrapper {
    width: ${props => `calc(100% - ${props.theme.main.sizes.leftMenu.width})`};
  }
`;

Wrapper.defaultProps = {
  theme: {
    main: {
      sizes: {
        leftMenu: {},
      },
    },
  },
};

export default Wrapper;
