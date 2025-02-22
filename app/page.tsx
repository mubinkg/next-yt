export default function Home() {
  const random = Math.floor(Math.random()*3)
  if(random === 2){
    throw new Error("Error on home page!")
  }
  return (
    <div>
      <h2 className="text-4xl mb-10">Home page</h2>
    </div>
  );
}
