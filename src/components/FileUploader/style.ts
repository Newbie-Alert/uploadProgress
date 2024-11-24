import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.4rem;
`;

type ButtonProps = {
  bg: "blue" | "gray" | "red";
};

export const Button = styled.div<ButtonProps>`
  width: 100%;
  max-width: 12rem;
  padding: 0.8rem;
  border-radius: 0.4rem;
  border: none;
  cursor: pointer;
  text-align: center;
  ${({ bg }) => {
    if (bg === "blue") {
      return css`
        background-color: #388cff;
        color: #fff;
      `;
    }
    if (bg === "gray") {
      return css`
        background-color: #555555;
        color: #fff;
      `;
    }
    if (bg === "red") {
      return css`
        background-color: #ff6a6a;
        color: #fff;
      `;
    }
  }}
`;

export const FileInput = styled.input`
  display: none;
`;

export const FileInfoBox = styled.div`
  width: 100%;
  max-width: fit-content;
  min-width: 36rem;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  border: 1px solid #000;
  padding: 1.4rem;
  border-radius: 0.4rem;
  font-size: 1.8rem;
  white-space: pre-wrap;
`;

export const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.4rem;
`;

export const ProgressBarWrapper = styled.div`
  width: 100%;
  max-width: calc(100vw - 40vw);
  height: 2rem;
  background-color: #e6e6e6;
  border-radius: 20rem;
  position: relative;
`;

type ProgressBarProps = {
  progress: number;
};

export const ProgressBar = styled.div<ProgressBarProps>`
  width: ${({ progress }) => `${progress}%`};
  height: 2rem;
  background-color: #388cff;
  border-radius: 20rem;
  transition: width 0.3s ease-in-out;
`;

export const ProgressBarText = styled.p`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #000;
  font-weight: 600;
`;
