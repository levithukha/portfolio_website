import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Phyo Thu Kha</p>
        </div>
        <div className="socials flex justify-center gap-8">
          {socialImgs.map((socialImg, index) => (
            <div key={index} className="icon">
              <a
                href={socialImg.url}
                key={index}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={socialImg.imgPath}
                  alt="social icon"
                  className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 opacity-70 hover:opacity-100 hover:scale-110"
                />
              </a>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            Thank you for visiting my portfolio website!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
