import { shuffle } from "lodash";
import Home from "@/components/templates/home";
import { getCategory, getPageInfo } from "@/lib/fetchs";

async function HomePage() {
  const pageInfo = await getPageInfo({ pageId: "12" })

  const carousel =
    pageInfo?.result?.data?.pageSections.find(
      (section) => section.title === "کاروسل"
    )?.items || [];

  const newestProducts =
    pageInfo?.result?.data?.pageSections.find(
      (section) => section.title === "جدید ترین محصولات"
    );

  const specialProducts = pageInfo?.result?.data?.pageSections.find(
    (section) => section.title === "محصولات ویژه"
  );

  const otherProducts = pageInfo?.result?.data?.pageSections.find(
    (section) => section.title === "باقی محصولات"
  );

  const banners =
    pageInfo?.result?.data?.pageSections.find(
      (section) => section.title === "بنر ها"
    )?.items || [];

  const categories = shuffle((await getCategory({ type: 1 })).result?.data || []).slice(0, 8);

  return (
    <Home banners={banners} carousel={carousel} newestProducts={newestProducts} otherProducts={otherProducts} specialProducts={specialProducts} categories={categories} />
  );
}

export default HomePage;
