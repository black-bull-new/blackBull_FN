import { useState } from "react";

const FileUpload = () => {
  const [fileName, setFileName] = useState("");
  const handleFileUpload = (event: any) => {
    const file = event.target.files[0];

    if (file) {
      setFileName(file.name);
      console.log("Uploaded File:", file.name);
    }
  };
  return (
    <>
      <div>
        <label
          htmlFor="myFile"
          className="flex gap-2 items-center cursor-pointer"
        >
          <div className="bg-[#EFF2F3] px-4 py-2 rounded-md w-full">
            {fileName !== "" ? fileName : " Choose Rego Document"}
          </div>
          <div className="bg-[#6599FF] text-white px-4 py-2 rounded-md">
            Browse
          </div>
        </label>
        <input
          type="file"
          id="myFile"
          name="filename"
          hidden
          onChange={handleFileUpload}
        />
      </div>
    </>
  );
};
export default FileUpload;
