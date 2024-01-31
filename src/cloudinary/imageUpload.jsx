import Axios from "axios";
import { useState } from "react";

export default function UploadInfo() {
  const [imgUpload, setImgUpload] = useState(null);

  function uploadImage() {
    if (!imgUpload) {
      console.error("Please select an image");
      return;
    }
    const formData = new FormData();
    formData.append("file", imgUpload);
    formData.append("upload_preset", "myCloud");
    const response = Axios.post(
      "https://api.cloudinary.com/v1_1/duc8kpcl9/image/upload",
      formData
    ).then((res) => console.log(res.data.url));
    
  }

  return (
    <div className="upload-info">
      <input
        type="file"
        name="image"
        onChange={(event) => {
          setImgUpload(event.target.files[0]);
        }}
      />
      <button onClick={uploadImage}>Submit</button>
    </div>
  );
}
