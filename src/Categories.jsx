import * as React from "react";

function CategoryCard({ imageSrc, title }) {
  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow justify-center p-px w-full rounded-md border border-solid bg-black bg-opacity-0 border-stone-300 max-md:mt-4">
        <div className="flex flex-col px-7 pt-2.5 pb-7 bg-black bg-opacity-0 max-md:px-5">
          <div className="flex overflow-hidden flex-col bg-black bg-opacity-0">
            <img
              loading="lazy"
              src={imageSrc}
              alt={`${title} category`}
              className="object-contain w-full aspect-[0.94]"
            />
          </div>
          <div className="self-center mt-2 text-lg font-bold leading-relaxed text-center text-black">
            {title}
          </div>
        </div>
      </div>
    </div>
  );
}

function CategoryGrid({ categories }) {
  return (
    <div className="flex gap-5 max-md:flex-col">
      {categories.map((category, index) => (
        <CategoryCard
          key={index}
          imageSrc={category.imageSrc}
          title={category.title}
        />
      ))}
    </div>
  );
}

export function Categories() {
  const topCategories = [
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/8eb5178e789e4b07ac6918e0556d754e/50377474ac32f8bf0b08ad01113755559b978b118a520718451ad552d4731222?apiKey=8eb5178e789e4b07ac6918e0556d754e&",
      title: "Nuts & Dry Fruits"
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/8eb5178e789e4b07ac6918e0556d754e/eda40ebb4617ac1aeb2ccd4e1e85ab1c4c28db061eda53c24c890b5b4da7ad19?apiKey=8eb5178e789e4b07ac6918e0556d754e&",
      title: "Dates"
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/8eb5178e789e4b07ac6918e0556d754e/17a3f4b5613c6c28c90e9c63795ae8dace0ec3ad74506dc46d34529b7b116472?apiKey=8eb5178e789e4b07ac6918e0556d754e&",
      title: "DFH Exclusives"
    }
  ];

  const bottomCategories = [
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/8eb5178e789e4b07ac6918e0556d754e/cdb131ddc82332b18dae5a9874e0ad3c68013af3ce8ce0d0e81227237a2d62b4?apiKey=8eb5178e789e4b07ac6918e0556d754e&",
      title: "Berries"
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/8eb5178e789e4b07ac6918e0556d754e/35b010012f81fbcd43de6d52ee971d8c082827956c72dfaf4ecf9d8bff1fee71?apiKey=8eb5178e789e4b07ac6918e0556d754e&",
      title: "Seeds & More"
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/8eb5178e789e4b07ac6918e0556d754e/f526889b8d905499dced7c50088300be6a118bdd60134e96144916175e02a885?apiKey=8eb5178e789e4b07ac6918e0556d754e&",
      title: "Gift Boxes"
    }
  ];

  return (
    <div className="flex flex-col px-4 bg-black bg-opacity-0">
      <h1 className="self-center text-4xl font-bold leading-none pt-10 text-center text-black">
        Our Categories
      </h1>
      <div className="flex flex-col pb-8 pl-40 pr-40 mt-10 w-full bg-black bg-opacity-0 max-md:max-w-full">
        <div className="max-md:max-w-full">
          <CategoryGrid categories={topCategories} />
        </div>
        <div className="mt-8 max-md:max-w-full">
          <CategoryGrid categories={bottomCategories} />
        </div>
      </div>
    </div>
  );
}

export default Categories;