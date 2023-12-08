import { Axios } from "axios";
import { useState } from "react";
export default function UploadInfo() {
  function uploadImage(files) {
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "");
    Axios.post(
      "https://api.cloudinary.com/v1_1/myCloud/image.upload",
      formData
    ).then((res) => console.log(res));
  }

  return (
    <div className="upload-info">
      <input
        type="file"
        name="image"
        onChange={(event) => {
          uploadImage(event.target.files);
        }}
      />
      <button>Submit</button>
    </div>
  );
}
