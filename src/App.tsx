import * as React from "react";
import Layout from "./components/layout";
import Header from "./modules/navbar";
import Card from "./components/card";
import SearchFilter from "./components/search/search-filter";
import SortListBox from "./components/search/sort-list-box";
import Footer from "./components/footer";
import { useAppStore } from "./lib/store";
import LoadingCard from "./components/loading-card";

export default function App() {
  const { getRestaurant, restaurants } = useAppStore();
  const [filtered, setFiltered] = React.useState(() => restaurants);
  const [selected, setSelected] = React.useState(() => "Sort by name");
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    getRestaurant();
    setIsLoading(false);
  }, []);
  return (
    <>
      <Layout className="flex flex-col">
        <Header />
        <main className="mt-5">
          <SearchFilter
            setFiltered={setFiltered}
            restaurants={restaurants}
            selected={selected}
          />
          <SortListBox selected={selected} setSelected={setSelected} />
        </main>
        <main className="mt-5">
          {isLoading ? (
            <section className="grid grid-cols-4 gap-2 max-md:grid-cols-2 max-sm:grid-cols-1">
              {Array.from({ length: 20 }).map((_, index) => (
                <LoadingCard key={index} />
              ))}
            </section>
          ) : (
            <section className="grid grid-cols-4 gap-2 max-md:grid-cols-2 max-sm:grid-cols-1">
              {filtered?.map((item) => {
                return (
                  <Card
                    key={item?.id}
                    id={item?.id}
                    rating={item?.rating}
                    name={item?.name}
                    city={item?.city}
                    description={item?.description}
                  />
                );
              })}
            </section>
          )}
        </main>
      </Layout>
      <Footer />
    </>
  );
}
