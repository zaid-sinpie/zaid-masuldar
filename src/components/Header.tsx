import { Button } from "./ui/button";

// const Nav = () => {
//   return (
//     <nav className="hidden items-center gap-10 md:flex">
//       <a
//         href="/about"
//         className="text-[13px] text-white/50 transition-colors hover:text-white"
//       >
//         About
//       </a>

//       <a
//         href="/projects"
//         className="text-[13px] text-white/50 transition-colors hover:text-white"
//       >
//         Skills
//       </a>

//       <a
//         href="/projects"
//         className="text-[13px] text-white/50 transition-colors hover:text-white"
//       >
//         Projects
//       </a>

//       <a
//         href="/experience"
//         className="text-[13px] text-white/50 transition-colors hover:text-white"
//       >
//         Experience
//       </a>

//       <a
//         href="/contact"
//         className="text-[13px] text-white/50 transition-colors hover:text-white"
//       >
//         Contact
//       </a>
//     </nav>
//   );
// };

const Header = () => {
  function openGoogleDoc() {
    window.open(
      "https://docs.google.com/document/d/1-d5aB_EMm4gD8xPXYXSvfXlWjt6nbNygVN5VhpCcOgA/edit?usp=sharing",
      "_blank",
    );
  }
  return (
    <header className="relative z-50">
      <div className="mx-auto flex h-24 max-w-375 items-center justify-between px-7 lg:px-12">
        <a href="/" className="group text-xl font-semibold tracking-tight">
          ZM
          <span className="text-violet-500">.</span>
        </a>

        <Button
          onClick={openGoogleDoc}
          variant="outline"
          className="h-9 rounded-lg border-violet-500/50 bg-transparent px-4 text-xs text-white hover:border-violet-400 hover:bg-violet-500/8 hover:text-white"
        >
          Resume
        </Button>
      </div>
    </header>
  );
};

export default Header;
