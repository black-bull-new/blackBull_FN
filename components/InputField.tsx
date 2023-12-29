import Image from "next/image";
interface imputdata {
  name: string;
  placeholder: string;
  type: any;
  value: string;
  className: any;
  onChange: (e: any) => void;
  onClick?:()=>void;
  id: string;
  alt: string;
  src: string;
  svgWidth: number;
  svgHeight: number;
  onBlur?:any;
  hasError?:any;
  isvisibel?:boolean;
  required?:any;
}

const InputField = ({
  onChange,
  onClick,
  hasError,
  onBlur,
  name,
  placeholder,
  type,
  value,
  className,
  id,
  alt,
  src,
  svgWidth,
  isvisibel,
  required,
  svgHeight,
}: imputdata) => {
  return (
    <>
      <div
        className={`text-left m-2 ml-0 flex  p-2 justify-between rounded-md ${className} ${hasError? 'border border-solid border-red-600 ':""}`}
      >
        <div className="flex gap-2 w-full">
          <Image src={src} alt={alt} width={svgWidth} height={svgHeight} />
          <input
            type={type}
            name={name}
            id={id}
            className={` text-sm bg-transparent focus:outline-none w-full `}
            placeholder={placeholder}
            value={value}
            onBlur={onBlur}
            onChange={(e: any) => onChange(e)}
            required={required}
          />
        </div>
        {placeholder === "password" && (
          <Image
            src={!isvisibel?"/eye.svg":"unlock.svg"}
            alt={alt}
            width={svgWidth}
            height={svgHeight}
            className="cursor-pointer"
            onClick={onClick}
          />
        )}
      </div>
    </>
  );
};
export default InputField;
