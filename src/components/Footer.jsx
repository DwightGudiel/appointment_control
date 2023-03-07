import { useState, useEffect } from "react";

function Footer() {
  // Get current year
  const [yearCopyright, setYearCopyright] = useState("");

  useEffect(() => {
    const year = new Date().getFullYear();
    // Update the state
    setYearCopyright(year);
  }, []);

  return (
    <div className="text-center py-10">
      <p className="font-black uppercase text-2xl">
        Creado Por{" "}
        <a
          className=" text-fuchsia-900 "
          href="https://github.com/DwightGudiel"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          Dwight Gudiel <span>{yearCopyright}</span> &#9829;
        </a>
      </p>
    </div>
  );
}

export default Footer;
