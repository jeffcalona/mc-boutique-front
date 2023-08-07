import getCategories from "@/actions/get-categories"
import MainCategories from "./mainCategories"

async function SliderElements () {

    const categories = await getCategories()

  return (
    <header className="mt-28 lg:px-16 px-3">
        <MainCategories categories={categories} />
    </header>
  )
}

export default SliderElements