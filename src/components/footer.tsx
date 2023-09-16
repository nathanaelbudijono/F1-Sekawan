import Typography from "./typography";

import { AiFillMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="max-w-5xl mx-auto flex py-4 max-md:py-3 px-16 max-md:px-6 h-[20vh] text-center">
      <section className="max-w-4xl mx-auto flex justify-center flex-col items-center gap-1">
        <div>
          <Typography variant="small" className="text-xs">
            © {new Date().getFullYear()} All right reserved Nathanael
          </Typography>
        </div>
        <div className="flex gap-2">
          <a href="mailto:nathanaelbudijono@gmail.com">
            <AiFillMail className="icon" />
          </a>
          <a href="https://github.com/nathanaelbudijono">
            <AiFillGithub className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/nathanael-budijono/">
            <AiFillLinkedin className="icon" />
          </a>
        </div>
      </section>
    </footer>
  );
}
