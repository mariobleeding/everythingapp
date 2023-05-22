export const Header = () => {
  return (
    <nav className="flex justify-between p-3 items-center">
      <h1 className="text-bold text-4xl font-title">everythingapp</h1>
      <ul className="flex">
        <li className="mr-4 cursor-pointer">About</li>
        <li className="mr-4 cursor-pointer">Github</li>
        <li className="mr-4 cursor-pointer">Me</li>
      </ul>
    </nav>
  );
};
