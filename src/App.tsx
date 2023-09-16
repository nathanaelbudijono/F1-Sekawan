import * as React from "react";
import Layout from "./components/layout";
import Header from "./modules/navbar";
import useRestaurant from "./lib/useRestaurant";
import Card from "./components/card";
import SearchFilter from "./components/search/search-filter";
import SortListBox from "./components/search/sort-list-box";
import Typography from "./components/typography";
import Footer from "./components/footer";

export default function App() {
  const { restaurants, isLoading } = useRestaurant();
  const [filtered, setFiltered] = React.useState(() => restaurants);
  const [selected, setSelected] = React.useState(() => "Sort by name");
  if (isLoading) {
    return (
      <Layout className="h-screen flex flex-col">
        <Header />
        <main className="mt-5">
          <Typography variant="h4">Fetching..</Typography>
        </main>
      </Layout>
    );
  }
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
          <section className="grid grid-cols-4 gap-2 max-md:grid-cols-2 max-sm:grid-cols-1">
            {filtered?.map((item) => {
              return (
                <Card
                  id={item?.id}
                  rating={item?.rating}
                  name={item?.name}
                  city={item?.city}
                  description={item?.description}
                />
              );
            })}
          </section>
        </main>
      </Layout>
      <Footer />
    </>
  );
}
