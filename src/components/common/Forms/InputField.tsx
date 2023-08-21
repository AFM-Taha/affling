import { IInputField } from '@/interface/globalInterface';
import React from 'react';

const InputField: React.FC<IInputField> = ({
  label,
  id,
  placeholder,
  type,
  register,
  errors,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="mt-4 block text-base font-bold leading-relaxed text-zinc-800">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder || undefined}
        className="h-[37.07px] w-full bg-stone-100 pl-2"
        {...register(id)}
      />
      <p className="text-red-500">{errors[id] ? errors[id]?.message : ''}</p>
    </div>
  );
};

export default InputField;
