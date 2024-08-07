import NotesCard from "@/components/NotesCard";

export const data = [
  {
    "title": "One up the Circle",
    "description": "Anyone who’s spent some time working as product manager, especially those who have moved around a bit, knows that the function can be vastly different depending on the product, the team, and the company they’re at.",
    "slug": "one_up_the_circle",
  },
  {
    "title": "One up the Circle",
    "slug": "one_up_the_circle",
    "description": "Anyone who’s spent some time working as product manager, especially those who have moved around a bit, knows that the function can be vastly different depending on the product, the team, and the company they’re at."
  },
  {
    "title": "One up the Circle",
    "slug": "one_up_the_circle",
    "description": "Anyone who’s spent some time working as product manager, especially those who have moved around a bit, knows that the function can be vastly different depending on the product, the team, and the company they’re at."
  },
  {
    "title": "One up the Circle",
    "slug": "one_up_the_circle",
    "description": "Anyone who’s spent some time working as product manager, especially those who have moved around a bit, knows that the function can be vastly different depending on the product, the team, and the company they’re at."
  },
  {
    "title": "One up the Circle",
    "slug": "one_up_the_circle",
    "description": "Anyone who’s spent some time working as product manager, especially those who have moved around a bit, knows that the function can be vastly different depending on the product, the team, and the company they’re at."
  },
  {
    "title": "One up the Circle",
    "slug": "one_up_the_circle",
    "description": "Anyone who’s spent some time working as product manager, especially those who have moved around a bit, knows that the function can be vastly different depending on the product, the team, and the company they’re at."
  },
  {
    "title": "One up the Circle",
    "slug": "one_up_the_circle",
    "description": "Anyone who’s spent some time working as product manager, especially those who have moved around a bit, knows that the function can be vastly different depending on the product, the team, and the company they’re at."
  },
  {
    "title": "One up the Circle",
    "slug": "one_up_the_circle",
    "description": "Anyone who’s spent some time working as product manager, especially those who have moved around a bit, knows that the function can be vastly different depending on the product, the team, and the company they’re at."
  },
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <section className="mt-10 max-w-[720px]">
        <div className=" text-4xl mb-6 font-semibold sticky top-0 bg-[#121212] py-3">Notes</div>
        {data.map((data,index) => <NotesCard key={index} slug={data.slug} title={data.title} description={data.description} />)}
      </section>
    </main>
  );
}