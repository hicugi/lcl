import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function() {
  const { pathname } = useRouter();
  const items = [
    {
      title: "Кредиторы",
      link: "/creditors"
    },
    {
      title: "Заемщики",
      link: "/borrowers"
    },
    {
      title: "Разместить объявления",
      link: "/post-ads"
    },
    {
      title: "Справка",
      link: "/reference"
    }
  ];

  return (
    <nav className="app-nav">
      <ul className="nav-list">
        {items.map(({ title, link }, index) => {
          const cls = ["nav-list__item"];
          if (pathname.indexOf(link) === 0) {
            cls.push("nav-list__item--active");
          }

          return (
            <li key={index} className={cls.join(" ")}>
              <Link href={link}>
                <a>{title}</a>
              </Link>
            </li>
          );
        })}
      </ul>

      <style jsx global>{`
        .nav-list {
          width: 730px;
          padding: 0;
          margin: 0;
          display: flex;
          justify-content: space-between;
          list-style: none;
        }

        .nav-list__item {
          position: relative;
          color: #fff;
        }

        .nav-list__item a {
          height: 70px;
          padding: 0 26px;
          display: flex;
          color: inherit;
          align-items: center;
          text-decoration: none;
          font-size: 16px;
          letter-spacing: 1.5px;
        }

        .nav-list__item--active {
          color: var(--color);
        }
        .nav-list__item--active::before {
          width: 100%;
          height: 2px;
          position: absolute;
          bottom: 0;
          left: 0;
          background-color: var(--color);
          content: "";
        }
      `}</style>
    </nav>
  );
}
