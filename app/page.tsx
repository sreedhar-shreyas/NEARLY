"use client";
import Container from "@/app/components/Container";
import ListingCard from "@/app/components/listings/ListingCard";
import EmptyState from "@/app/components/EmptyState";

import getListings, { 
  IListingsParams
} from "@/app/actions/getListings";
import getCurrentUser from "@/app/actions/getCurrentUser";
import ClientOnly from "./components/ClientOnly";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

interface HomeProps {
  searchParams: IListingsParams;
}

const Home = ({ searchParams }: HomeProps) => {
  const { isFallback } = useRouter();
  const [listings, setListings] = useState<any[]>([]);
  const [currentUser, setCurrentUser] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      const listingsData = await getListings(searchParams);
      const userData = await getCurrentUser();

      setListings(listingsData);
      setCurrentUser(userData);
    };

    if (!isFallback) {
      fetchData();
    }
  }, []);

  if (isFallback) {
    return (
      <Container>
        <div className="text-center">Loading...</div>
      </Container>
    );
  }

  if (listings.length === 0) {
    return (
      <EmptyState showReset />
    );
  }

  return (
    <Container>
      <div 
        className="
          pt-24
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4
          xl:grid-cols-5
          2xl:grid-cols-6
          gap-8
        "
      >
        {listings.map((listing: any) => (
          <ListingCard
            currentUser={currentUser}
            key={listing.id}
            data={listing}
          />
        ))}
      </div>
    </Container>
  );
}

export default Home;
