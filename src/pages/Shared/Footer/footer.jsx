

const Footer = () => {
  return (
    <>
    <footer className="footer p-10 bg-base-200 text-base-content">
        <aside>
          <img src="/src/assets/logo/Group 2.png" alt="Logo-png" />
          <p>
            DocHouse
            <br />
            Providing reliable health care services, since 1992.
          </p>
          <button className="btn btn-outline decoration-[#F7A582]">Appointment</button>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>

      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <aside>
          <p>Copyright © 2024 - All right reserved by DocHouse</p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;