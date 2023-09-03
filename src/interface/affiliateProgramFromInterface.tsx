import { AffiliateProgramFormData } from '@/components/SignUpForm/SignUpFormAffiliateProgram';
import { UseFormRegister, FieldErrors } from 'react-hook-form';

export interface IInputFieldAffiliateProgram {
  label: string;
  id: keyof AffiliateProgramFormData;
  placeholder: string | null;
  type: string;
  register: UseFormRegister<AffiliateProgramFormData>;
  errors: FieldErrors<AffiliateProgramFormData>;
}
