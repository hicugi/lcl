import React from "react";
import Link from "next/link";

export default function() {
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
      <ul key="ul" className="nav-list">
        {items.map(({ title, link }, index) => {
          const cls = ["nav-list__item"];
          if (typeof window === "object" && window.location.pathname === link) {
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
          color: #fff;
        }
        .nav-list__item a {
          height: 70px;
          padding: 0 26px;
          display: flex;
          color: inherit;
          align-items: center;
          text-decoration: none;
          letter-spacing: 1.5px;
        }
        .nav-list__item--active {
          color: var(--color);
        }
      `}</style>
    </nav>
  );
}
