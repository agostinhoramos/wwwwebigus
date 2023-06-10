export default function Footer() {
  const bgStyle = {
    transition: "background .3s ease,box-shadow .3s ease",
    boxShadow: "inset 0 1px 0 #eaeaea",
    transform: "translateZ(0)",
    webkitBackdropFilter: "saturate(180%) blur(5px)",
    backdropFilter: "saturate(180%) blur(5px)",
    background: "hsla(0,0%,100%,.8)",
  };

  return (
    <footer style={bgStyle}>
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-8 sm:py-10 lg:px-8">
        <p className=" text-center text-xs leading-5 text-gray-500">
          &copy; 2023 WebiGus. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
