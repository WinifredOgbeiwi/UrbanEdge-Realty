import { FaBath } from "react-icons/fa";
import { LuDiamond } from "react-icons/lu";
import { MdBed } from "react-icons/md";

const ListingCard = ({item}) => {
  return (
    <div
      key={item.id}
      className={`shadow-lg rounded-lg overflow-hidden relative ${
        item.avaliable ? "" : "opacity-20"
      }`}
    >
      <img src={item.img} alt={item.name} className="w-full" />
      <div className="p-3 relative">
        {item.popular && (
          <div className="bg-primary text-white px-3 rounded-md absolute -top-3 left-0">
            Popular
          </div>
        )}
        <h5 className="font-bold">
          <span className="text-primary font-extrabold text-xl">
            {item.price}
          </span>
          <sapn className=" opacity-40 text-sm">/month</sapn>
        </h5>
        <h5 className="font-extrabold text-xl my-2">{item.name}</h5>
        <p className="opacity-40 text-sm">{item.address}</p>
        <hr className="my-2" />
        <div className="flex justify-between items-center flex-wrap">
          <div className="text-sm flex items-center gap-1">
            <MdBed className="text-primary" />
            <span className="opacity-40 ">{item.beds}Beds</span>
          </div>
          <div className="text-sm flex items-center gap-1">
            <FaBath className="text-primary" />
            <span className="opacity-40 text-sm">
              {item.bathrooms} Bathrooms
            </span>
          </div>
          <div className="text-sm flex items-center gap-1">
            <LuDiamond className="text-primary" />
            <span className="opacity-40 text-sm">
              {item.area}m<sup>2</sup>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListingCard