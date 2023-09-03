import { TrackingSoftwareFormData } from '@/components/SignUpForm/SignUpFormTrackingSoftware';
import { UseFormRegister, FieldErrors } from 'react-hook-form';

export interface IInputFieldTrackingSoftware {
  label: string;
  id: keyof TrackingSoftwareFormData;
  placeholder: string | null;
  type: string;
  register: UseFormRegister<TrackingSoftwareFormData>;
  errors: FieldErrors<TrackingSoftwareFormData>;
}
