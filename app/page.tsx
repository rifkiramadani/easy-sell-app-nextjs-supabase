import Card from "./components/card";
import ubuntu from "./utils/fonts/ubuntu";
import { supabase } from "../supabase/client"

export default async function Home() {

  // const products = [
  //   {
  //     id: 1,
  //     name: "Motorcycle",
  //     price: 400,
  //     description: "Motorcycle Desc Motorcycle DescMotorcycle DescMotorcycle DescMotorcycle DescMotorcycle DescMotorcycle Desc",
  //     imageUrl: "https://t4.ftcdn.net/jpg/03/76/70/11/360_F_376701136_KNP9pERnyP5Z2acAIuhnQQ0HpqUuWQyh.jpg"
  //   },
  //   {
  //     id: 2,
  //     name: "Motorcycle",
  //     price: 400,
  //     description: "Motorcycle Desc Motorcycle DescMotorcycle DescMotorcycle DescMotorcycle DescMotorcycle DescMotorcycle Desc",
  //     imageUrl: "https://t4.ftcdn.net/jpg/03/76/70/11/360_F_376701136_KNP9pERnyP5Z2acAIuhnQQ0HpqUuWQyh.jpg"
  //   },
  //   {
  //     id: 3,
  //     name: "Motorcycle",
  //     price: 400,
  //     description: "Motorcycle Desc Motorcycle DescMotorcycle DescMotorcycle DescMotorcycle DescMotorcycle DescMotorcycle Desc",
  //     imageUrl: "https://t4.ftcdn.net/jpg/03/76/70/11/360_F_376701136_KNP9pERnyP5Z2acAIuhnQQ0HpqUuWQyh.jpg"
  //   },
  //   {
  //     id: 4,
  //     name: "Motorcycle",
  //     price: 400,
  //     description: "Motorcycle Desc Motorcycle DescMotorcycle DescMotorcycle DescMotorcycle DescMotorcycle DescMotorcycle Desc",
  //     imageUrl: "https://t4.ftcdn.net/jpg/03/76/70/11/360_F_376701136_KNP9pERnyP5Z2acAIuhnQQ0HpqUuWQyh.jpg"
  //   },

  // ]

  // Use the imported supabase client directly
  const { data: products, error } = await supabase
    .from('easy-sell-products')
    .select()

  if (!products) {
    return <span>Product Not Found ${error.message}</span>
  }

  return (


    <>
      <div className="container mx-auto flex sm:flex-col sm:items-center sm:justify-center px-5">
        <div className="flex flex-col md:flex-row sm:py-10 px-5">
          <div className="w-58 flex flex-col py-3 ms-4 mt-5 sm:text-center sm:p-15 gap-7 sm:mt-5 sm:w-lg">
            <span className="text-5xl font-bold bg-linear-to-bl from-sky-500 to-violet-500 text-transparent bg-clip-text sm:text-7xl">Our Top Products</span>
            <span className="text-lg font-thin sm:text-3xl">You can pay to boost your products here</span>
          </div>
          <div className="flex flex-col ms-2 py-3 flex-wrap sm:gap-5 sm:flex-row">
            {
              products!.map(product => (
                <Card key={product.id} {...product} imageUrl={`${process.env.SUPABASE_URL}/storage/v1/object/public/image/${product.imageUrl}`} /> //{...product} => spreading semua value yang ada di array ke component card
              ))
            }
          </div>
        </div>
        <div className="py-5 px-10 sm:py-10 sm:px-5">
          <span className={`text-4xl sm:px-5 font-bold ${ubuntu.className}`} ata-aos="fade-up"
            data-aos-anchor-placement="center-bottom">All Products</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5 gap-5">
            {
              products!.map(product => (
                <Card key={product.id} {...product} imageUrl={`${process.env.SUPABASE_URL}/storage/v1/object/public/image/${product.imageUrl}`} /> //{...product} => spreading semua value yang ada di array ke component card
              ))
            }
          </div>
        </div>
    </div>

    </>
  );
}
