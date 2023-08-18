import ImageUploader from './ImageUploader';

export default function NetworkDetailReviewForm() {
  return (
    <form>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" />
      <label htmlFor="email">Email</label>
      <input type="text" id="email" />
      <h3 className="mt-5">Upload Your Affiliate Payment Screenshot</h3>
      <ImageUploader />
    </form>
  );
}
