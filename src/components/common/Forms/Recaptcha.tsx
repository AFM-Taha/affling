import { Dispatch, SetStateAction } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

export default function Recaptcha({
  setCaptchaVerified,
}: {
  setCaptchaVerified: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <ReCAPTCHA
      sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
      onChange={() => setCaptchaVerified(true)}
    />
  );
}
