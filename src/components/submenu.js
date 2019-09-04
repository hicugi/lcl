import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function() {
  const { pathname } = useRouter();
  const items = [
    {
      title: "Мои объявления",
      link: "ads"
    },
    {
      title: "Мои сделки",
      link: "deals"
    },
    {
      title: "Управления счетом",
      link: "score"
    },
    {
      title: "Аккаунт",
      link: "account"
    },
    {
      title: "Безопасность",
      link: "security"
    }
  ];

  return (
    <div className="submenu-container">
      <ul className="submenu">
        {items.map(({ title, link }, index) => {
          const cls = ["submenu__item"];
          const newLink = ["/profile/", link].join("");

          if (pathname.indexOf(newLink) === 0)
            cls.push("submenu__item--active");

          return (
            <li key={index} className={cls.join(" ")}>
              <Link href={newLink}>
                <a>{title}</a>
              </Link>
            </li>
          );
        })}
      </ul>

      <style jsx>{`
        .submenu-container {
          display: flex;
          margin-bottom: 40px;
        }
        .submenu {
          padding: 0px 30px;
          margin: 0;
          display: flex;
          background-color: #fff;
          box-shadow: 0 2px 3px #e5e6e8;
          border-radius: 4px;
          list-style: none;
        }

        .submenu__item {
          position: relative;
          color: #949fb1;
        }
        .submenu__item--active {
          color: #173256;
        }
        .submenu__item--active::before {
          position: absolute;
          width: 100%;
          height: 2px;
          bottom: 0;
          background-color: var(--color);
          content: "";
        }

        .submenu__item a {
          padding: 25px 32px;
          display: block;
          font-size: 17px;
          letter-spacing: 1px;
          text-decoration: none;
          color: inherit;
        }
      `}</style>
    </div>
  );
}
