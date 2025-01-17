import Footer from "components/footer/FooterAuthDefault";
import authImg from "assets/img/auth/auth-cover-2.jpg";
import { Outlet } from "react-router-dom";
import FixedPlugin from "components/fixedPlugin/FixedPlugin";

export default function AuthLayout() {
  return (
    <div>
      <div className="relative float-end h-full min-h-screen w-full !bg-white dark:!bg-navy-900">
        <FixedPlugin />
        <main className={`mx-auto min-h-screen`}>
          <div className="relative flex">
            <div className="mx-auto flex min-h-full w-full flex-col justify-start pt-12 md:max-w-[75%] lg:h-screen lg:max-w-[1013px] lg:px-8 lg:pt-0 xl:h-[100vh] xl:max-w-[1383px] xl:px-0 xl:ps-[70px]">
              <div className="mb-auto flex flex-col pe-5 ps-5 md:pe-0 md:ps-12 lg:max-w-[48%] lg:ps-0 xl:max-w-full">
                <Outlet />
                <div className="absolute end-0 hidden h-full min-h-screen md:block lg:w-[49vw] 2xl:w-[44vw]">
                  <div
                    className="absolute flex h-full w-full items-end justify-center bg-cover bg-center"
                    style={{ backgroundImage: `url(${authImg})` }}
                  />
                </div>
              </div>
              <Footer />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
