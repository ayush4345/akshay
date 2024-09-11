import NotesCard from "@/components/NotesCard";
import { getNotesData } from "@/util/databaseFunctions";
import { headers } from 'next/headers'

export const metadata = {
  title: 'Archives',
  description: 'The only Poker guide you need to master the game.',
  openGraph: {
    title: 'Archives',
    description: 'The only Poker guide you need to master the game.',
    type: 'website',
  },
};

export default async function Archrives() {

  const headersList = headers()
  const referer = headersList.get('referer')

  const notesData = await getNotesData()

  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <section className="mt-10 w-full max-w-[720px]">
        <div className=" text-4xl font-semibold sticky top-0 bg-[#121212] py-3 text-white">Archives</div>
        <div className="text-white/70 text-xl mb-6 font-semibold sticky top-0 bg-[#121212]">The only Poker guide you need to master the game</div>
        {notesData && notesData.response.map((data, index) => <NotesCard key={data.id} slug={data.slug} title={data.title} description={data.content} readingTime={data.readingTime} publishedOn={data.publishedOn} />)}
      </section>
    </main>
  );
}