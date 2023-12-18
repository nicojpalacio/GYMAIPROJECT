import SignupForm from "@/app/(auth)/signup/SignupForm";

import { getServerSession } from "next-auth/next";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const Signup = async () => {
  const session = await getServerSession(authOptions);


  if (session) {
    redirect("/create");
  }
  return (
    <section className="grid grid-cols-1 md:grid-cols-2  ">
    <div className="flex mx-auto mt-20 justify-center items-center " >
      <img src="GYMAI.png"  alt="" className="hidden p-0 rounded-lg h-96  mt-10 md:block " />

    </div>
      <SignupForm />
    </section>
  );

};
export default Signup;
