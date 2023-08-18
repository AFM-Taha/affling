import Image from 'next/image';
import { useState } from 'react';
import { IoCloudUpload } from 'react-icons/io5';

export default function ImageUploader() {
  const [image, setImage] = useState('');

  return (
    <>
      {image && (
        <div className="my-4">
          <Image src={image} alt={image} width={320} height={180} />
        </div>
      )}
      <label
        htmlFor="image-input"
        className="inline-block cursor-pointer rounded-xl border border-black px-3 py-1 text-xl">
        <input
          onChange={(e) => {
            if (e.target.files)
              setImage(URL.createObjectURL(e.target.files[0]));
          }}
          className="hidden bg-black text-white"
          type="file"
          id="image-input"
          accept="image/*"
        />
        <IoCloudUpload className="mr-2 inline text-[24px]" size={18} />
        Upload Your Image
      </label>
    </>
  );
}
