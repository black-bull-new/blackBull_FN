import React, { useState } from 'react';

const FileUpload = ({ fileName, file, onChange, errorMessage }: any) => {
  return (
    <div className="relative w-full">
      <div>
        <label
          htmlFor="myFile"
          className="flex gap-2 items-center cursor-pointer"
        >
          <div className="bg-[#2B36D9] text-white px-10 py-[12px] flex justify-center text-sm font-semibold rounded-full whitespace-nowrap ">
            {fileName !== "" ? fileName : (file !== "" ? file : "Browse")}
          </div>
        </label>
        <input
          type="file"
          id="myFile"
          name="filename"
          hidden
          onChange={onChange}
        />
      </div>
      {errorMessage && (
        <div className="text-red-500 text-[12px] mt-1">
          {errorMessage}
        </div>
      )}
    </div>
  );
};
export default FileUpload;
