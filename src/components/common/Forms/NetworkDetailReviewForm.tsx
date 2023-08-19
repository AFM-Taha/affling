import ImageUploader from './ImageUploader';

export default function NetworkDetailReviewForm() {
  return (
    <form className="mt-12">
      <label className="text-xl" htmlFor="name">
        Name
      </label>
      <input
        className="mb-4 mt-1 h-[45px] w-full rounded-lg bg-[#D9D9D9] px-4 py-1"
        type="text"
        id="name"
      />
      <label className="text-xl" htmlFor="email">
        Email
      </label>
      <input
        className="mt-1 h-[45px] w-full rounded-lg bg-[#D9D9D9] px-4 py-1"
        type="text"
        id="email"
      />
      <h3 className="mb-2 mt-10 text-[26px] font-bold">
        Upload Your Affiliate Payment Screenshot
      </h3>
      <ImageUploader />
      <div className="mt-4">
        <label className="text-xl" htmlFor="review">
          Your Review
        </label>
        <textarea
          className="min-h-[200px] w-full rounded-lg bg-[#D9D9D9] px-4 py-3"
          id="review"></textarea>
      </div>
      <button
        className="my-7 rounded-lg bg-[#4E93D3] px-7 py-2 text-xl text-white hover:bg-blue-600"
        type="submit">
        Submit
      </button>
    </form>
  );
}
