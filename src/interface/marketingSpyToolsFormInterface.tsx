import { MarketingSpyToolsFormData } from '@/components/SignUpForm/SignUpFormMarketingSpyTools';
import { UseFormRegister, FieldErrors } from 'react-hook-form';

export interface IInputFieldMarketingSpyTools {
  label: string;
  id: keyof MarketingSpyToolsFormData;
  placeholder: string | null;
  type: string;
  register: UseFormRegister<MarketingSpyToolsFormData>;
  errors: FieldErrors<MarketingSpyToolsFormData>;
}
