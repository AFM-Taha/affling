import { IInputTextLabels } from '@/interface/globalInterface';

const InputFromText: React.FC<{ field: IInputTextLabels }> = ({ field }) => {
  const { labelName, id, type } = field;

  return (
    <>
      {field.type === 'text' && (
        <>
          <label
            htmlFor={id}
            className="mt-4 block text-base font-bold leading-relaxed text-zinc-800">
            {labelName}
          </label>
          <input
            id={id}
            type={type}
            className={` h-[37.07px] w-full bg-stone-100 pl-2`}
          />
        </>
      )}

      {field?.type === 'textarea' && (
        <>
          <label
            htmlFor={id}
            className="mt-4 block text-base font-bold leading-relaxed text-zinc-800">
            {labelName}
          </label>
          <textarea
            id={id}
            className={` w-full bg-stone-100 pl-2`}
            rows={field?.id === 'faq' ? 6 : 10}
            cols={1}></textarea>
        </>
      )}

      {field?.type === 'select' && (
        <>
          <label
            htmlFor={id}
            className="mt-4 block text-base font-bold leading-relaxed text-zinc-800">
            {labelName}
          </label>
          <select className="h-[37.07px] w-[760px] bg-stone-100 text-center text-xl font-normal text-zinc-800">
            {field?.options?.map((option) => (
              <option key={option?.id} value={option?.name} className="">
                {option?.labelName}
              </option>
            ))}
          </select>
        </>
      )}

      <div className="grid grid-cols-1 gap-x-10 md:grid-cols-2 ">
        {field?.id === 'targetingOptimization' &&
          field?.options?.map((option) => {
            return (
              <>
                <div className="flex  items-center  justify-between">
                  <label
                    htmlFor={option?.id}
                    className="mt-4 block text-base font-bold leading-relaxed text-zinc-800">
                    {option?.labelName}
                  </label>
                  <input
                    key={option.id}
                    type="checkbox"
                    value={option?.name}
                    name={option?.name}
                    className=" border border-zinc-800"
                  />
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default InputFromText;
