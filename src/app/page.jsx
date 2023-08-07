import getBillboards from "@/actions/get-billboards"
import HomeCards from "@/components/home/HomeCards"
import Logo from "@/components/Icons/McbLogo"

export default async function Home() {
  const billboards = await getBillboards()

  return (
    <main className="sm:flex-row sm:justify-center sm:items-center h-screen w-screen flex relative flex-col items-center">
      {billboards.map((billboard) => {
        if(billboard.label === 'ropa' || billboard.label === 'productos') {
          return (
            <HomeCards key={billboard.id} img={billboard.imageUrl} title={billboard.label} url={`/${billboard.label}`} />
          )
        }
      })}
      <div className="absolute z-20 sm:w-full sm:flex sm:justify-center sm:mt-0 mt-7 w-3/4">
        <Logo logoWidth={500} logoHeight={400} />
      </div>
    </main>
  )
}