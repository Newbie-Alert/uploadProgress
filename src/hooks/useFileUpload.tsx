import axios, { AxiosProgressEvent } from "axios";
import React, { useState } from "react";

type FileUploadState = {
  state: "select" | "upload" | "uploading" | "complete" | "error";
};



export default function useFileUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [fileUploadState, setFileUploadState] = useState<FileUploadState>({
    state: "select",
  });
  const [progress, setProgress] = useState(0);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;

    if (files) {
      setFile(files[0]);
      setFileUploadState({ state: "upload" });
    }
  };

  const handleDeleteFile = () => {
    setFile(null);
    setFileUploadState({ state: "select" });
  };

  const handleUploadFile = async (url:string) => {
    if (!file) return;
    setFileUploadState({ state: "uploading" });

    const formData = new FormData();
    formData.append("file", file);

    const axiosOptions = {
      headers: {
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
      },
      withCredentials: false,
      onUploadProgress(progressEvent: AxiosProgressEvent) {
        setProgress(0);

        // 진행률
        const progress = progressEvent.total
          ? Math.round((progressEvent.loaded * 100) / progressEvent?.total)
          : 0;
        setProgress(progress);
      },
    };

    try {
      await axios.post(url, formData, axiosOptions);

      setProgress(100);
      setFileUploadState({ state: "complete" });
    } catch (error) {
      setFileUploadState({ state: "error" });
    }
  };
  return {
    file,
    fileUploadState,
    progress,
    handleFileChange,
    handleDeleteFile,
    handleUploadFile,
  };
}
