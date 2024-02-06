import { useState } from "react";

const FileUpload = (props: any) => {
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
          <div className="bg-[#EFF2F3] px-4 py-[12px] text-sm text-blueGrey-400 rounded-md w-full">
            {fileName !== "" ? fileName : props.file}
          </div>
          <div className="bg-accent3 text-white px-10 py-[12px] text-sm font-semibold rounded-md">
            Browse
          </div>
        </label>
        <input
          type="file"
          id="myFile"
          name="filename"
          multiple
          hidden
          onChange={props.onChange}
        />
      </div>
    </>
  );
};
export default FileUpload;
