import { useDropzone } from "react-dropzone";

type UploadProps = {
  onGetImage: (str: string) => void;
};

export default function Upload({ onGetImage }: UploadProps) {
  const onDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      if (reader.result) {
        onGetImage(reader.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  return (
    <div className="upload-zone" {...getRootProps()}>
      <input {...getInputProps()} accept="image/*" />
      <button>Upload Image</button>
    </div>
  );
}
