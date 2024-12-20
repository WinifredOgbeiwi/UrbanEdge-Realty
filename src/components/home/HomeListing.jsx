import { Listing } from "../../utils/data-arrays";
import { MdBed } from "react-icons/md";
import { LuDiamond } from "react-icons/lu";
import { FaBath } from "react-icons/fa";
import { CgUnavailable } from "react-icons/cg";
import Button from "../common/Button";
import ListingCard from "../common/ListingCard";

const HomeListing = () => {
  const homeList =Listing.slice(0,6)
  return (
    <section className="mt-16 mx-8 sm:mx-16">
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 ">
        {homeList.map((item) => (
          <ListingCard item={item}  key={item.id}/>
        ))}
      </div>
      <div className="flex items-center my-6  justify-center">
        <Button link="/listings" text="Browse Properties"></Button>
      </div>
    </section>
  );
}

export default HomeListing;
