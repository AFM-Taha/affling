import { AffiliateNetworkFormData } from '@/components/SignUpForm/SignUpFormAffiliateNetwork';
import { UseFormRegister, FieldErrors } from 'react-hook-form';

export interface IInputFieldAffiliateNetwork {
  label: string;
  id: keyof AffiliateNetworkFormData;
  placeholder: string | null;
  type: string;
  register: UseFormRegister<AffiliateNetworkFormData>;
  errors: FieldErrors<AffiliateNetworkFormData>;
}
