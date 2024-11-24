import React from "react";
import * as St from "./style";
import useFileUpload from "../../hooks/useFileUpload";

export default function FileUploader() {
  const {
    file,
    fileUploadState,
    progress,
    handleFileChange,
    handleDeleteFile,
    handleUploadFile,
  } = useFileUpload();

  return (
    <St.Wrapper>
      {fileUploadState.state === "select" && (
        <React.Fragment>
          <p>업로드 할 파일을 선택하세요</p>

          <label htmlFor="file-uploader">
            {<St.Button bg="blue">파일 선택</St.Button>}
            <St.FileInput
              id="file-uploader"
              type="file"
              onChange={handleFileChange}
            />
          </label>
        </React.Fragment>
      )}

      {file && fileUploadState.state === "upload" && (
        <React.Fragment>
          <h3>선택된 파일</h3>
          <St.FileInfoBox>
            <p>파일명: {file?.name}</p>
            <p>파일 크기: {(file?.size / 1024).toFixed(2)}KB </p>
            <p>파일 타입: {file?.type}</p>

            <St.ButtonBox>
              <St.Button bg="red" onClick={handleDeleteFile}>
                삭제
              </St.Button>
              <St.Button
                bg="blue"
                onClick={() => handleUploadFile("https://httpbin.org/post")}>
                올리기
              </St.Button>
            </St.ButtonBox>
          </St.FileInfoBox>
        </React.Fragment>
      )}

      {file && fileUploadState.state === "uploading" && (
        <React.Fragment>
          <h3>업로드 중</h3>
          <St.FileInfoBox>
            <span>파일명: {file?.name}</span>
            <p>파일 크기: {(file?.size / 1024).toFixed(2)}KB </p>
            <p>파일 타입: {file?.type}</p>
          </St.FileInfoBox>

          <St.ProgressBarWrapper>
            <St.ProgressBar progress={progress}>
              <St.ProgressBarText>{progress}%</St.ProgressBarText>
            </St.ProgressBar>
          </St.ProgressBarWrapper>
        </React.Fragment>
      )}

      {file && fileUploadState.state === "complete" && (
        <React.Fragment>
          <h3>업로드 완료</h3>

          <St.ProgressBarWrapper>
            <St.ProgressBar progress={progress}>
              <St.ProgressBarText>{progress}%</St.ProgressBarText>
            </St.ProgressBar>
          </St.ProgressBarWrapper>
        </React.Fragment>
      )}

      {file && fileUploadState.state === "error" && (
        <React.Fragment>
          <h3>업로드 실패</h3>
          <St.FileInfoBox>
            <p>파일명: {file?.name}</p>
            <p>파일 크기: {(file?.size / 1024).toFixed(2)}KB </p>
            <p>파일 타입: {file?.type}</p>
          </St.FileInfoBox>
        </React.Fragment>
      )}
    </St.Wrapper>
  );
}
