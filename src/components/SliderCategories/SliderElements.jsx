import MainCategories from "./mainCategories"

async function SliderElements ({ categories, billboard }) {

  return (
    <header className="mt-28 lg:px-16 px-3">
        <MainCategories categories={categories} billboard={billboard} />
    </header>
  )
}

export default SliderElements