import React from 'react'
import { Listing } from '../../utils/data-arrays';
import ListingCard from '../../components/common/ListingCard';

const Listings = () => {
  return (
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 my-32 mx-6 sm:mx-16 ">
      {Listing.map((item) => (
        <ListingCard item={item} />
      ))}
    </div>
  );
}

export default Listings