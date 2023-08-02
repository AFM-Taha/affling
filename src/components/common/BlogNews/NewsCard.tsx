import Image from 'next/image';
import { HiClock, HiChatAlt2 } from 'react-icons/hi';
import { HiUser } from 'react-icons/hi2';
import { RiFolder2Fill } from 'react-icons/ri';

export default function NewsCard() {
  return (
    <div className="mb-16 ml-12 max-w-[992px]">
      <Image
        className="rounded-2xl"
        width={992}
        height={580}
        src="/e-commerce.jpeg"
        alt="e-commerce"
      />
      <div className="mt-8 flex gap-10 font-bold text-[#313131]">
        <div className="flex items-center gap-2">
          <RiFolder2Fill color="#4E93D3" size={28} />
          <p>CPA</p>
        </div>
        <div className="flex items-center gap-2">
          <HiClock color="#4E93D3" size={28} />
          <p>25 Aug, 2022</p>
        </div>
        <div className="flex items-center gap-2">
          <HiUser color="#4E93D3" size={28} />
          <p>Admin</p>
        </div>
        <div className="flex items-center gap-2">
          <HiChatAlt2 color="#4E93D3" size={28} />
          <p>28</p>
        </div>
      </div>
      <h4 className="mb-2 mt-4 text-3xl font-bold text-[#4E93D3]">
        CPA Network in Bangladesh
      </h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac pharetra sit
        mauris habitasse netus pulvinar. Dapibus nullam nibh velit feugiat
        volutpat eget. Massa pretium morbi tincidunt vel. Hac quisque
        suspendisse ultrices ipsum. Eget condimentum consequat in et enim,
        bibendum. Et viverra senectus aliquam tortor. Diam dui dignissim in
        nulla nisi, montes, in libero. Lacus cursu{' '}
        <button className="font-bold text-[#313131] hover:underline">
          Read More...
        </button>
      </p>
    </div>
  );
}
