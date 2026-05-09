export async function getCategory() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const resData = await res.json();
  const news = resData.data.news_category;
  return news;
}
export async function getNewsByCategory(category_id) {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${category_id}`,
  );
  const resData = await res.json();
  const news = resData.data;
  return news;
}
export async function getNewsDetailsById(news_id) {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/${news_id}`,
  );
  const resData = await res.json();
  const news = resData.data;
  return news[0];
}
