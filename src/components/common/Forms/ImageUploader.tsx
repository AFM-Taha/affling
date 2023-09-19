import Image from 'next/image';
import { ChangeEvent, useState } from 'react';
// import { useState } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { IoCloudUpload } from 'react-icons/io5';

interface Props {
  register: UseFormRegister<any>;
}

export default function ImageUploader({ register }: Props) {
  const [image, setImage] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setImage(URL.createObjectURL(e.target.files[0]));
  };

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
          {...register('image', {
            required: 'Image is required',
            onChange(event) {
              handleChange(event);
            },
          })}
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
