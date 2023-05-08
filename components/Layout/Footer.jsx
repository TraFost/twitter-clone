import Link from "next/link";
import Container from "../Common/Container";

const Footer = () => {
  return (
    <footer className="mt-3 ml-2 grid place-items-center text-[0.753rem] text-[#536471]">
      <Container>
        <ul className="flex gap-3">
          <li>Terms Of Service</li>
          <li>Privacy Policy</li>
          <li className="">Cookie Policy</li>
        </ul>
        <ul className="flex gap-3">
          <li>Accessibility</li>
          <li>Ads Info</li>
          <li>
            <Link href="#">
              More<span>...</span>
            </Link>
          </li>
          <li>© 2023 X Corp.</li>
        </ul>
      </Container>
    </footer>
  );
};

export default Footer;
