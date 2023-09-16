import Layout from "./components/layout";
import Header from "./modules/navbar";
import useRestaurant from "./lib/useRestaurant";
import Card from "./components/card";

export default function App() {
  const restaurants = useRestaurant();
  return (
    <Layout className="flex flex-col">
      <Header />
      <main className="mt-5">
        <section className="grid grid-cols-4 gap-2 max-md:grid-cols-2 max-sm:grid-cols-1">
          {restaurants?.map((item) => {
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
  );
}
