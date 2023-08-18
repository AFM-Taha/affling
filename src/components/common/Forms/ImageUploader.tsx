import Image from 'next/image';
import { useState } from 'react';

export default function ImageUploader() {
  const [image, setImage] = useState('');

  return (
    <>
      {image && (
        <div>
          <Image src={image} alt={image} height={90} width={160} />
        </div>
      )}
      <label
        htmlFor="image-input"
        className="inline-block cursor-pointer border border-[#ccc] px-3 py-1">
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
        Upload Your Image
      </label>
    </>
  );
}
