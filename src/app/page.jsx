import { Cards, RandomCountry } from "@/components/Landing";
import { useFullCountrysQuery } from "@/services";

export const metadata = {
  title: "Salammmm",
  description: "ne var ne yox",
};

async function page() {
  const data = await useFullCountrysQuery()

  function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const randomData = data[rand(0, data.length)]

  return (
    <main className="min-h-[50vh] container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
      <section className="dark:bg-gray-100 dark:text-gray-800 ">
        <RandomCountry data={randomData} />
      </section>
      <section>
        <Cards data={data} />
      </section>

    </main>
  )
}

export default page