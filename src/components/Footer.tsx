function Footer() {

  const year = new Date().getFullYear();

  return (
    <footer className="p-6 text-center text-slate-800">
      <p>© {year} Zhakhangir Anuarbek</p>
    </footer>
  );
}

export default Footer;
