import styled from "styled-components";

export const StyledHeader = styled.div`
  width: 100%;
  height: 170px;
  background: #424242;

  .inner {
    width: 80%;
    height: 120px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h1 {
    color: #fff;
  }
  .opt_box {
    width: 110px;
    height: 28px;
  }
`;

export const StyledMain = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: -50px;
  margin-bottom: 100px;
  background-color: white;
  border-radius: 10px;
  padding: 40px 30px;
  // border: 1px solid #dee2e6;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledTotalBox = styled.div`
  width: 20%;
  font-weight: bold;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  p {
    margin: 0;
  }
  .num {
    color: ${(props) => props.color || "#222"};
  }
  .death-per-box {
    margin-top: 10px;
  }
  .death-per {
    font-size: 12px;
  }
`;

export const TotalContainer = styled.div`
  width: 100%;
  margin: 20px 0;
  display: flex;
  justify-content: space-evenly;
`;
