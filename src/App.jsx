import React from "react";
import {
  Hero,
  PopularProducts,
  SuperQuality,
  Service,
  SpecialOffers,
  CustomerReview,
  Footer,
  Subscribe,
} from "./sections";
import Nav from "./Components/Nav";
const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-1 wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding">
        <Service />
      </section>
      <section className="padding">
        <SpecialOffers />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReview />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="padding-x bg-black padding-t pb-8">
        <Footer />
      </section>
     
    </main>
  );
};

export default App;
