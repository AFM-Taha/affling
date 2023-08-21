import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { AdvertisingFormData } from '@/components/SignUpForm/SignUpFormAdvertisingNetwork';
export interface IInputField {
  label: string;
  id: keyof AdvertisingFormData; // Use keyof AdvertisingFormData here
  placeholder: string | null;
  type: string;
  register: UseFormRegister<AdvertisingFormData>; // Use the correct type
  errors: FieldErrors<AdvertisingFormData>; // Use the correct type
}
