import { Link } from "react-router-dom";

import { ContainerInner, ContainerOuter } from "@/common/Container";
import { paths } from "@/lib/Paths";

function NavLink({ href, children }) {
  return (
    <Link
      to={href}
      className="transition hover:text-daintree-500"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t border-celeste-300 pb-16 pt-10">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-daintree-800">
                {paths.map(({path, label}) => {
                  return (
                    <NavLink href={path} key={path}>
                      {label}
                    </NavLink>
                  )
                })}
              </div>
              <p className="text-sm text-center text-celeste-500">
                &copy; {new Date().getFullYear()} Keelan Vella. All rights
                reserved.
              </p>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
