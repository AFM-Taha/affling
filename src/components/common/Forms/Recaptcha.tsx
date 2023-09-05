import { Dispatch, SetStateAction } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

export default function Recaptcha({
  setCaptchaVerified,
}: {
  setCaptchaVerified: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <ReCAPTCHA
      sitekey="6LeLCP8nAAAAAKrHBlja8tl-5zCO5FAt474N0ho0"
      onChange={() => setCaptchaVerified(true)}
    />
  );
}
