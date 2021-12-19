import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="copyright">
        <p>
          Copyright © Designed &amp; Developed by{" "}
          <Link to="http://hubitcms.com/" target="_blank">
            Hubit Team
          </Link>{" "}
          2021
        </p>
      </div>
    </div>
  );
};

export default Footer;
