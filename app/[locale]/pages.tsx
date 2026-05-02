// 'use client';

// import { useTranslations } from 'next-intl';
// import Link from 'next/link';

// export default function Home() {
//   const t = useTranslations('Home');

//   return (
//     <div style={{ padding: '40px' }}>
//       <h1>{t('title')}</h1>
//       <p>{t('description')}</p>

//       <div>
//         <Link href="/en">English</Link> |{" "}
//         <Link href="/ar">Arabic</Link>
//       </div>
//     </div>
//   );
// }

export default function Page() {
  return (
    <section>
      <h2>Params page</h2>
    </section>
  );
}