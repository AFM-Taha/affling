import { OffersData } from '@/assets/static-data/offers';
import Image from 'next/image';
import { BsArrowRightCircle } from 'react-icons/bs';

const OfferDetails = ({}) => {
  return (
    <div>
      <div className="px-5 lg:px-20">
        <div className="flex flex-col space-x-6 pb-8 pt-5 lg:pb-16 ">
          <div className="">
            {/* Table to display offers */}
            <div className="overflow-x-auto">
              <table className="w-full">
                {/* Table header */}
                <thead className="bg-[#0B1733] text-white">
                  <tr className="h-10 ">
                    <th className=" pl-4 text-start lg:pl-28">OFFERS NAME</th>
                    <th className="text-center">PAYOUT</th>
                    <th className="text-center">COUNTRIES</th>
                    <th className=" lg:pr-60">VERTICALS</th>
                  </tr>
                </thead>
                {/* Table body */}
                <tbody className="">
                  {OffersData.slice(0, 1).map((offer, index) => (
                    // Render each offer row
                    <tr
                      key={index}
                      className="border-b border-l border-r shadow-md ">
                      <td className="w-full py-2.5 text-left lg:px-5">
                        {/* Offer details */}
                        <div className="flex flex-row items-center justify-around px-10 lg:justify-start lg:px-0 ">
                          <Image
                            src={offer.image}
                            width={68}
                            height={68}
                            alt="offer_image"
                            className=""
                          />
                          <div className="ml-3 lg:ml-0">
                            <div className="flex items-center space-x-2 pb-2 font-bold ">
                              <p className="text-sm lg:text-base">
                                {offer.title}
                              </p>
                              <BsArrowRightCircle className="hidden text-[#4E93D3] lg:block" />
                            </div>
                            <div className="flex items-center justify-between space-x-5">
                              <p className="">{offer.tag}</p>
                              <div>
                                {/* Display offer categories */}
                                {offer.categories.map((el, index) => (
                                  <button
                                    key={index}
                                    className="border-1 mr-2 rounded-[10px] border bg-[#C6C6C6] px-2.5 text-xs lg:text-base">
                                    {el}
                                  </button>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      {/* Offer price */}
                      <td className="text-center text-lg font-bold lg:text-base">
                        ${offer.startup_pricing}
                      </td>
                      {/* Offer countries */}
                      <td className="pl-5 text-center lg:pl-0">
                        {offer.countries.map((el, index) => (
                          <span key={index} className="mr-1 lg:ml-2 ">
                            {el}
                          </span>
                        ))}
                      </td>
                      {/* Offer vertical */}
                      <td className="px-5 text-center lg:pr-60">
                        {offer.vertical}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Banner  */}
        <div>
          <Image
            src="/Offer/banner-sample.jpg"
            width={1200}
            height={308}
            alt="offer_banner_image"
            className="h-auto w-full"
          />
        </div>

        {/* Info  */}
        <div className="py-5 lg:py-8">
          <div className="py-5">
            <h4 className="pb-3">DESCRIPTION</h4>
            <p className="bg-[#D9D9D9] px-3 py-5 text-justify lg:pr-20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              eligendi assumenda error ut, omnis repellat magni iusto eius
              dignissimos eos praesentium? Amet eos nulla facere dolorum
              laudantium nobis aliquid! Qui eaque tempora, neque ex pariatur
              sunt obcaecati deserunt quis minus tenetur consequuntur quaerat
              fugit reiciendis voluptates quas error eligendi enim perferendis
              similique sapiente! Velit, architecto pariatur debitis, distinctio
              reprehenderit maxime officia impedit recusandae voluptas delectus
              est quos? Repellat quisquam nulla, odit temporibus, amet
              accusantium quaerat pariatur quidem sequi laborum molestiae,
              laudantium dolorem rem? Animi nulla saepe accusantium, sunt,
              aliquam repudiandae voluptatum dolorem ad vel cumque iste
              inventore! Vero animi unde totam nihil temporibus recusandae
              beatae mollitia saepe optio dolores est dolorem soluta accusamus,
              eius sapiente iste, quas sint maiores laboriosam quod cupiditate
              fuga veniam rerum? Odit, obcaecati! Dolore nobis amet voluptatibus
              voluptatem cumque velit ea quis, in eaque, iusto, incidunt
              perspiciatis explicabo ipsam excepturi quos corrupti vel.
              Repellendus inventore quam unde maiores labore quis. Ratione,
              inventore. Fuga quod, pariatur natus sint quia vitae expedita
              tenetur!
            </p>
          </div>

          <div className="py-5">
            <h4 className="pb-3">RESTRICTION</h4>
            <p className="bg-[#D9D9D9] px-3  py-5 text-justify lg:pr-20">
              Molestias debitis soluta sapiente magnam, modi voluptatibus,
              nihil, beatae tempore atque unde esse ducimus necessitatibus.
              Dolorem pariatur adipisci laudantium temporibus dolore aliquid
              numquam similique dignissimos recusandae sint esse saepe, earum
              voluptatem aut debitis. Unde doloribus vitae eaque quia magnam
              sint officiis ipsa facere magni error consequatur dicta dolores
              nesciunt natus perferendis quis, porro possimus placeat itaque
              illo! Amet ipsum eaque officia tenetur cumque pariatur aliquam
              quia perferendis. Minus, quod rerum! Praesentium laudantium
              architecto rem ab excepturi ipsam! Sit autem incidunt porro
              repellat tempora aliquid ullam cum? Voluptas, vel voluptate. Quam
              consequatur velit, facilis ipsam accusantium odio, deleniti
              numquam libero explicabo sed exercitationem rem nostrum? Nesciunt
              officiis earum maiores sint, quod voluptatum consequuntur vero ad?
              Vitae minus hic sit earum aut veritatis, rem consectetur cumque
              velit magni consequatur corrupti modi quibusdam nam explicabo
              itaque facilis provident! consectetur adipiscing elit. Vel
              ultrices nunc at sed sem sapien. Sagittis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferDetails;
