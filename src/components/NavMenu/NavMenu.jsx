const NavMenu = () => {
  const menu = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Pricing",
      link: "/pricing",
    },
    {
      title: "Blog",
      link: "/blog",
    },
  ];

  const menuList = menu.map((item) => (
    <li className="group relative" key={item.title}>
      <a
        href={item.link}
        className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70"
      >
        {item.title}
      </a>
    </li>
  ));

  return <ul className="hidden lg:flex ">{menuList}</ul>;
};

export default NavMenu;
