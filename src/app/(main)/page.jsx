import { redirect } from "next/navigation";

const defaultCategory ='01'

export default async function Home() {

  return (
    redirect(`category/${defaultCategory}`)
  );
}
