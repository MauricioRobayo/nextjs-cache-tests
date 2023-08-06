// export const revalidate = 100; // second

export default async function Home() {
  const response10 = await fetch(
    "https://timeapi.io/api/Time/current/zone?timeZone=UTC",
    {
      next: {
        revalidate: 10,
      },
    }
  );
  const { seconds: seconds10 } = await response10.json();
  const response20 = await fetch(
    "https://timeapi.io/api/Time/current/zone?timeZone=UTC",
    {
      next: {
        revalidate: 20,
      },
    }
  );
  const { seconds: seconds20 } = await response20.json();
  const seconds = new Date().getSeconds();
  console.log({ seconds, seconds10, seconds20 });
  return (
    <main>
      <div>
        <pre>page 1: {seconds}</pre>
        <pre>fetch 10: {JSON.stringify(seconds10, null, 2)}</pre>
        <pre>fetch 20: {JSON.stringify(seconds20, null, 2)}</pre>
      </div>
    </main>
  );
}
