function Footer() {
  
  return (
    <div className="text-center py-10">
      <p className="font-black uppercase text-xl">
        Creado Por{" "}
        <a
          className=" text-fuchsia-900 "
          href="https://github.com/DwightGudiel"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          Dwight Gudiel <span>{new Date().getFullYear()}</span> &#9829;
        </a>

      </p>
    </div>
  );
}

export default Footer;
