import { InputFormTextLabels } from '@/assets/static-data/inputFormText';
import InputFromText from '../common/Forms/InputFromText';
import Registration from '../common/Forms/Registration';

const SignUpForm = () => {
    
  return (
    <>
      <form className='my-12'>
        <div className="mb-8">
          <Registration />
        </div>
        <div className="space-y-4">
          {InputFormTextLabels.map((field) => (
            <InputFromText key={field.id} field={field} />
          ))}
        </div>

        <button className="inline-flex h-[45.60px] w-[89.60px] items-start justify-start gap-[10.30px] bg-blue-500 p-[10.30px] text-xl font-normal text-white">
          Submit
        </button>
      </form>
    </>
  );
};

export default SignUpForm;
