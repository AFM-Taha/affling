import { SubmitHandler, useForm } from 'react-hook-form';
import { FaChevronRight } from 'react-icons/fa';
// import { useRouter } from 'next/router';
// import { toast } from 'react-hot-toast';

interface Admin {
  email: string;
  password: string;
}

export default function Login() {
  const { register, handleSubmit } = useForm<Admin>();
  //   const router = useRouter();

  //   const from: any = router.query.from;

  //   if (token) {
  //     if (from) {
  //       router.push(from);
  //     } else {
  //       router.push('/admin');
  //     }
  //     toast.success('Signin Admin Successfully');
  //   }

  const onSubmit: SubmitHandler<Admin> = async (data) => {
    console.log(data);
  };
  return (
    <div className="px-16 text-center text-white">
      <h2 className="pt-32 text-5xl font-black sm:text-8xl">Welcome back.</h2>
      <p className="my-10 text-xl font-bold sm:text-3xl">
        Login to gain access
      </p>
      {/* {someErrorMessages && (
        <div className="some-error-message m-4 mx-auto flex w-2/3 items-center justify-center  rounded-lg border bg-red-100 p-4  text-sm text-red-600 md:w-1/3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {someErrorMessages}
        </div>
      )} */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`mx-auto flex w-full flex-col items-center justify-center gap-2`}>
        <label htmlFor="admin-email" className="sr-only">
          Admin Email
        </label>
        <input
          {...register('email', { required: true })}
          id="admin-email"
          className="h-12 w-2/3 rounded-xl border-0 px-4 py-1 text-black md:w-1/3"
          type="email"
          placeholder="Admin's Email"
        />
        <label htmlFor="admin-password" className="sr-only">
          Admin Password
        </label>
        <input
          {...register('password', { required: true })}
          id="admin-password"
          className="h-12 w-2/3 rounded-xl border-0 px-4 py-1 text-black md:w-1/3"
          type="password"
          placeholder="Admin's password"
        />
        <div className="w-full pt-3">
          <button
            className="group w-1/3 gap-3 rounded-xl bg-black/30 px-8 py-2 font-bold text-white"
            type="submit">
            Enter{' '}
            <FaChevronRight className="-mt-[3px] inline-block duration-300 ease-in-out group-hover:ml-3" />
          </button>
        </div>
      </form>
    </div>
  );
}
