import { UseFormRegister, FieldValues } from 'react-hook-form';

export interface IInputField {
  label: string;
  id: string;
  placeholder: string | null;
  type: string;
  register: UseFormRegister<FieldValues>; 
  errors: Record<string, any>;
}
