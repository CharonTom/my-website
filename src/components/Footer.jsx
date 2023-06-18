function Footer() {
  const getYear = new Date().getFullYear();
  return (
    <div className="footer">
      <p className="text-center py-[120px] w-full bg-secondary">
        {getYear} &copy; Design by Tom Charon. All rights reserved
      </p>
    </div>
  );
}
export default Footer;
