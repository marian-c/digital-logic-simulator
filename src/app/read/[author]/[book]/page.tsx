export async function generateStaticParams() {
  return [{ author: 'eminescu', book: 'poezii`' }];
}

export default async function PageRead_Author_Title({
  params,
}: {
  params: Promise<{ author: string; book: string }>;
}) {
  console.log('pppp', await params);
  return <div>PLang</div>;
}
