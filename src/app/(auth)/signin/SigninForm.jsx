"use client";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const SigninForm = () => {
  const router = useRouter();
  // const session = useSession();
  // console.log(session.data);

  // if (session.data){
  //   router.push("/create");
  // }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    const res = await signIn("credentials", {
      email: data.name,
      password: data.password,
      redirect: false,
    });

    res.ok
      ? (toast.success("Welcome!!"),
      // "continue.html",
      reset(),
      router.push("/create"),
      router.refresh())
      : toast.error(res.error);
  });
  return (
    <div className="min-h-screen mx-5 flex flex-col justify-center items-center ">
      <h1 className="text-center text-zinc-50 text-xl mb-10 font-extrabold">
        NICE TO SEE YOU!
      </h1>
      <form onSubmit={onSubmit}>
        <div className="rounded-lg bg-appOrange p-3 mb-3">
          <label>
            <p className="m-0">Email </p>
            <input
              className="w-full p-1 lg:text-2xl font-semibold rounded-md text-slate-950 "
              type="text"
              {...register("name")}
              autoFocus
              placeholder="user@email.com"
            />
          </label>
        </div>

        <div className="rounded-lg bg-appOrange p-3 mb-3">
          <label>
            <p className="m-0">Password</p>
            <input
              className="w-full p-1  lg:text-2xl font-semibold rounded-md text-slate-800"
              type="password"
              {...register("password")}
              placeholder="********"
            />
          </label>
        </div>
        <button className="w-full text-zinc-50 text-2xl p-1  mb-4 mt-3 font-semibold rounded-lg bg-appOrangeButton hover:shadow-inner transform hover:scale-110 hover:bg-opacity-50 transition ease-out duration-300">
          Login
        </button>
      </form>
      <Toaster />
    </div>
  );
};

export default SigninForm;
