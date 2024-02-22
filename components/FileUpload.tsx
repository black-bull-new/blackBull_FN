const FileUpload = (props: any) => {
  return (
    <div className="relative">
      <div>
        <label
          htmlFor="myFile"
          className="flex gap-2 items-center cursor-pointer"
        >
          <div className="bg-[#EFF2F3] px-4 py-[12px] text-sm text-blueGrey-400 rounded-md w-full">
            {props?.fileName !== "" ? props?.fileName : props.file}
          </div>
          <div className="bg-accent3 text-white px-10 py-[12px] text-sm font-semibold rounded-md">
            Browse
          </div>
        </label>
        <input
          type="file"
          id="myFile"
          name="filename"
          hidden
          onChange={props?.onChange}
        />
      </div>
      {props.errorMessage && (
        <div className="text-red-500 text-[12px] mt-1">
          {props.errorMessage}
        </div>
      )}
    </div>
  );
};
export default FileUpload;
